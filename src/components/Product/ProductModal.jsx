import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  IconButton, 
  Typography, 
  Box, 
  Divider, 
  Stack, 
  Button, 
  TextField,
  Chip
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "../../contexts/TranslationContext";
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useState } from 'react';
import { useTheme } from "../../contexts/ThemeContext";

const StyledRating = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export default function ProductModal({ product, open, onClose }) {
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const colors = {
    background: isDarkMode ? '#121212' : '#ffffff',
    paper: isDarkMode ? '#1e1e1e' : '#ffffff',
    grey: isDarkMode ? '#424242' : '#f5f5f5',
    textPrimary: isDarkMode ? '#ffffff' : '#000000',
    textSecondary: isDarkMode ? '#b0b0b0' : '#666666',
    divider: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.12)',
    starFilled: isDarkMode ? '#ffc107' : '#ff9800', 
    starEmpty: isDarkMode ? '#555555' : '#e0e0e0', 
    warning: '#ff9800',
    disabled: isDarkMode ? '#555555' : '#cccccc'
  };

  const getStockStatus = () => {
    return { 
      text: language === 'ar' ? 'متوفر في المخزن' : 'In Stock', 
      color: 'success' 
    };
  };

  const getDurabilityInfo = () => {
    if (product.warranty) return { label: language === 'ar' ? 'ضمان' : 'Warranty', value: product.warranty };
    if (product.freshness_guarantee) return { label: language === 'ar' ? 'ضمان النضارة' : 'Freshness Guarantee', value: product.freshness_guarantee };
    if (product.shelf_life) return { label: language === 'ar' ? 'مدة الصلاحية' : 'Shelf Life', value: product.shelf_life };
    return null;
  };

  const renderProductStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <StarIcon 
            key={`product-${i}`} 
            sx={{ 
              color: colors.starFilled, 
              fontSize: '1.2rem',
              filter: isDarkMode ? 'brightness(1.2)' : 'none'
            }} 
          />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <StarHalfIcon 
            key={`product-${i}`} 
            sx={{ 
              color: colors.starFilled, 
              fontSize: '1.2rem',
              filter: isDarkMode ? 'brightness(1.2)' : 'none'
            }} 
          />
        );
      } else {
        stars.push(
          <StarBorderIcon 
            key={`product-${i}`} 
            sx={{ 
              color: colors.starEmpty, 
              fontSize: '1.2rem',
              opacity: isDarkMode ? 0.8 : 1
            }} 
          />
        );
      }
    }
    
    return (
      <StyledRating>
        {stars}
        <Typography variant="caption" sx={{ ml: 1, color: colors.textPrimary }}>
          ({product.rating.toFixed(1)})
        </Typography>
      </StyledRating>
    );
  };

  const renderInteractiveStars = () => {
    return (
      <Box sx={{ display: 'flex', gap: '2px', my: 1 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <IconButton
            key={`rate-${star}`}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setUserRating(star)}
            size="small"
            disableRipple
            sx={{ 
              color: colors.textPrimary,
              '&:hover': {
                transform: 'scale(1.2)',
                transition: 'transform 0.2s ease'
              }
            }}
          >
            {(hoverRating || userRating) >= star ? (
              <StarIcon sx={{ 
                color: colors.starFilled,
                filter: isDarkMode ? 'brightness(1.3)' : 'none'
              }} />
            ) : (
              <StarBorderIcon sx={{ 
                color: colors.starEmpty,
                opacity: isDarkMode ? 0.8 : 1
              }} />
            )}
          </IconButton>
        ))}
      </Box>
    );
  };

  const handleSubmitReview = () => {
    console.log('Submitted rating:', userRating);
    console.log('Review text:', reviewText);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setUserRating(0);
      setReviewText('');
    }, 3000);
  };

  const stockStatus = getStockStatus();
  const durability = getDurabilityInfo();

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: colors.paper,
          color: colors.textPrimary,
          backgroundImage: 'none'
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        bgcolor: colors.grey,
        color: colors.textPrimary,
        borderBottom: `1px solid ${colors.divider}`
      }}>
        {product.name}
        <IconButton onClick={onClose} aria-label="close" sx={{ color: colors.textPrimary }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ bgcolor: colors.paper }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: language === 'ar' ? 'row-reverse' : 'row', 
          gap: '2rem',
          pt: 2,
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            gap: '1rem'
          }
        }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              width: '50%', 
              maxHeight: '400px', 
              objectFit: 'contain',
              borderRadius: '8px',
              backgroundColor: colors.grey,
              '@media (max-width: 600px)': {
                width: '100%',
                maxHeight: '300px'
              }
            }} 
          />
          <Box sx={{ 
            width: '50%',
            '@media (max-width: 600px)': {
              width: '100%'
            }
          }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" color={colors.textPrimary}>
                EGP {product.price.toFixed(2)}
              </Typography>
              <Chip 
                label={stockStatus.text} 
                color={stockStatus.color} 
                size="small"
                sx={{ fontWeight: 'bold' }}
              />
            </Stack>
            
            <Typography variant="subtitle1" color={colors.textSecondary} gutterBottom>
              {language === 'ar' ? 'الشركة: ' : 'Brand: '}{product.company}
            </Typography>
            
            {renderProductStars()}
            
            <Divider sx={{ 
              my: 2, 
              borderColor: colors.divider,
              borderWidth: '1px'
            }} />
            
            <Typography variant="body1" paragraph color={colors.textPrimary}>
              {product.description}
            </Typography>
            
            {durability && (
              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography variant="subtitle2" component="div" color={colors.textPrimary}>
                  {durability.label}:
                </Typography>
                <Typography variant="body2" color={colors.textSecondary}>
                  {durability.value}
                </Typography>
              </Box>
            )}
            
            <Typography variant="body2" paragraph sx={{ color: colors.textSecondary }}>
              {product.information}
            </Typography>

            <Box sx={{ 
              mt: 4, 
              p: 2, 
              backgroundColor: colors.grey, 
              borderRadius: 1,
              border: `1px solid ${colors.divider}`,
              minWidth: 0, 
              overflow: 'hidden', 
              '@media (max-width: 530px)': {
                p: 1.5, 
                boxSizing: 'border-box' 
              }
            }}>
              <Typography variant="h6" gutterBottom color={colors.textPrimary}>
                {language === 'ar' ? 'قيم المنتج' : 'Rate this product'}
              </Typography>
              
              {renderInteractiveStars()}
              
              <TextField
                fullWidth
                multiline
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder={language === 'ar' ? 'اكتب مراجعتك هنا...' : 'Write your review here...'}
                variant="outlined"
                margin="normal"
                InputProps={{
                  sx: {
                    '&::placeholder': {
                      fontWeight: 'bold',
                      opacity: 1,
                    }
                  }
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: colors.textPrimary,
                    '& fieldset': {
                      borderColor: colors.divider,
                    },
                    '&:hover fieldset': {
                      borderColor: colors.starFilled,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: colors.starFilled,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: colors.textSecondary,
                  }
                }}
              />
              
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmitReview}
                disabled={userRating === 0 || submitted}
                sx={{ 
                  mt: 1,
                  bgcolor: colors.starFilled,
                  color: isDarkMode ? '#000' : '#fff',
                  fontWeight: 'bold',
                  '&:hover': {
                    bgcolor: isDarkMode ? '#ffca28' : '#f57c00'
                  }
                }}
              >
                {submitted 
                  ? (language === 'ar' ? 'شكراً لك!' : 'Thank You!') 
                  : (language === 'ar' ? 'إرسال التقييم' : 'Submit Rating')}
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}