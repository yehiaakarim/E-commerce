import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  DialogActions,
  Box,
  Divider,
  Stack,
  Button,
  TextField,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "../../contexts/TranslationContext";
import { styled } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "react-medium-image-zoom/dist/styles.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "../../styles/components/product.css";
const StyledRating = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export default function ProductModal({ product, open, onClose }) {
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const colors = {
    background: isDarkMode ? "#121212" : "#ffffff",
    paper: isDarkMode ? "#1e1e1e" : "#ffffff",
    grey: isDarkMode ? "#424242" : "#f5f5f5",
    textPrimary: isDarkMode ? "#ffffff" : "#000000",
    textSecondary: isDarkMode ? "#b0b0b0" : "#666666",
    divider: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.12)",
    starFilled: isDarkMode ? "#ffc107" : "#ff9800",
    starEmpty: isDarkMode ? "#555555" : "#e0e0e0",
    warning: "#ff9800",
    disabled: isDarkMode ? "#555555" : "#cccccc",
  };
  const ConfirmationDialog = ({ open, message, onConfirm, onCancel }) => (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle
        sx={{
          direction: language === "ar" ? "rtl" : "ltr",
          color: colors.textPrimary,
          bgcolor: colors.background,
        }}
      >
        {language === "ar" ? "تأكيد" : "Confirmation"}
      </DialogTitle>
      <DialogContent sx={{ bgcolor: colors.background }}>
        <Typography variant="body1" color={colors.textPrimary}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          direction: language === "ar" ? "rtl" : "ltr",
          bgcolor: colors.background,
        }}
      >
        <Button onClick={onConfirm} sx={{ color: colors.starFilled }}>
          {language === "ar" ? "نعم" : "Yes"}
        </Button>
        <Button onClick={onCancel} sx={{ color: colors.textSecondary }}>
          {language === "ar" ? "لا" : "No"}
        </Button>
      </DialogActions>
    </Dialog>
  );
  const getStockStatus = () => {
    return {
      text: language === "ar" ? "متوفر في المخزن" : "In Stock",
      color: "success",
    };
  };

  const getDurabilityInfo = () => {
    const warrantyKey = language === "ar" ? "warranty2" : "warranty";
    const freshnessKey =
      language === "ar" ? "freshness_guarantee2" : "freshness_guarantee";
    const shelfLifeKey = language === "ar" ? "shelf_life2" : "shelf_life";

    if (product[warrantyKey])
      return {
        label: language === "ar" ? "ضمان" : "Warranty",
        value: product[warrantyKey],
      };
    if (product[freshnessKey])
      return {
        label: language === "ar" ? "ضمان النضارة" : "Freshness Guarantee",
        value: product[freshnessKey],
      };
    if (product[shelfLifeKey])
      return {
        label: language === "ar" ? "مدة الصلاحية" : "Shelf Life",
        value: product[shelfLifeKey],
      };
    return null;
  };

  const renderProductStars = () => {
    const numericRating = parseFloat(product.rating);

    const stars = [];
    const fullStars = Math.floor(numericRating);
    const hasHalfStar = numericRating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <StarIcon
            key={`product-${i}`}
            sx={{
              color: colors.starFilled,
              fontSize: "1.2rem",
              filter: isDarkMode ? "brightness(1.2)" : "none",
            }}
          />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <StarHalfIcon
            key={`product-${i}`}
            sx={{
              color: colors.starFilled,
              fontSize: "1.2rem",
              filter: isDarkMode ? "brightness(1.2)" : "none",
            }}
          />
        );
      } else {
        stars.push(
          <StarBorderIcon
            key={`product-${i}`}
            sx={{
              color: colors.starEmpty,
              fontSize: "1.2rem",
              opacity: isDarkMode ? 0.8 : 1,
            }}
          />
        );
      }
    }

    return (
      <StyledRating>
        {stars}
        <Typography
          variant="caption"
          sx={{
            ml: 1,
            color: colors.textPrimary,
            fontSize: "1.1rem",
          }}
        >
          (
          {language === "ar"
            ? product.rating2.split("/")[0]
            : numericRating.toFixed(1)}
          )
        </Typography>
      </StyledRating>
    );
  };

  const renderInteractiveStars = () => {
    return (
      <Box sx={{ display: "flex", gap: "2px", my: 1 }}>
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
              "&:hover": {
                transform: "scale(1.2)",
                transition: "transform 0.2s ease",
              },
            }}
          >
            {(hoverRating || userRating) >= star ? (
              <StarIcon
                sx={{
                  color: colors.starFilled,
                  filter: isDarkMode ? "brightness(1.3)" : "none",
                }}
              />
            ) : (
              <StarBorderIcon
                sx={{
                  color: colors.starEmpty,
                  opacity: isDarkMode ? 0.8 : 1,
                }}
              />
            )}
          </IconButton>
        ))}
      </Box>
    );
  };

  const handleSubmitReview = () => {
    console.log("Submitted rating:", userRating);
    console.log("Review text:", reviewText);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setUserRating(0);
      setReviewText("");
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
        "& .MuiPaper-root": {
          backgroundColor: colors.paper,
          color: colors.textPrimary,
          backgroundImage: "none",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: colors.grey,
          color: colors.textPrimary,
          borderBottom: `1px solid ${colors.divider}`,
        }}
      >
        {product[language === "ar" ? "name2" : "name"]}
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{ color: colors.textPrimary }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ bgcolor: colors.paper }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: language === "ar" ? "row-reverse" : "row",
            gap: "2rem",
            pt: 2,
            "@media (max-width: 600px)": {
              flexDirection: "column",
              gap: "1rem",
            },
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "500px",
              position: "relative",
              overflow: "hidden",
              "@media (max-width: 600px)": {
                width: "100%",
                height: "400px",
              },
            }}
          >
            <TransformWrapper
              doubleClick={{ disabled: true }}
              wheel={{
                step: 0.15,
                wheelDisabled: false,
                touchPadDisabled: false,
              }}
              panning={{
                disabled: false,
                velocityDisabled: false,
                lockAxis: false,
              }}
              onPanningStart={() => (document.body.style.cursor = "grab")}
              onPanningStop={() => (document.body.style.cursor = "default")}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <TransformComponent
                    wrapperStyle={{
                      width: "100%",
                      height: "100%",
                      cursor: "zoom-in",
                      direction: "ltr",
                    }}
                    contentStyle={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column", 
                        alignItems: "center", 
                        width: "100%",
                        height: "100%",
                        direction: "ltr",
                        position: "relative",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 8px 0", 
                          color: colors.textPrimary, 
                          fontSize: "0.9rem",
                          textAlign: "center",
                          zIndex: 1, 
                        }}
                      >
                        {language === "ar"
                          ? "استخدم بكره الماوس أو اصابع يدك لتكبير الصورة"
                          : "Scroll or Use you Fingers to Zoom in/out"}
                      </h3>
                      <div
                        style={{
                          flex: 1, 
                          width: "100%",
                          position: "relative",
                        }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <img
                          src={product.image}
                          alt={product[language === "ar" ? "name2" : "name"]}
                          style={{
                            width: "auto",
                            height: "100%", 
                            maxWidth: "100%",
                            objectFit: "contain",
                            borderRadius: "8px",
                            backgroundColor: colors.grey,
                            margin: "0 auto",
                          }}
                        />
                      </div>
                    </div>
                  </TransformComponent>

                  <div
                    style={{
                      position: "absolute",
                      right: 10,
                      bottom: 10,
                      zIndex: 1,
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        zoomIn();
                      }}
                      sx={{
                        minWidth: "auto",
                        p: "4px 8px",
                        bgcolor: "blue",
                        fontSize: "1.25rem",
                        "&:hover": { bgcolor: "blue" },
                      }}
                      title={language === "ar" ? "تكبير" : "Zoom in"} 

                    >
                      +
                    </Button>
                    <Button
                      variant="contained"
                      size="medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        zoomOut();
                      }}
                      sx={{
                        minWidth: "auto",
                        p: "4px 8px",
                        bgcolor: "blue",
                        fontSize: "1.25rem",
                        "&:hover": { bgcolor: "blue" },
                      }}
                      title={language === "ar" ? "تصغير" : "Zoom out"} 
                    >
                      -
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={(e) => {
                        e.stopPropagation();
                        resetTransform();
                      }}
                      sx={{
                        minWidth: "auto",
                        p: "4px 8px",
                        bgcolor: "blue",
                        fontSize: "1.25rem",
                        "&:hover": { bgcolor: "blue" },
                      }}
                      title={language === "ar" ? "اخرج من الزووم" : "Reset Zoom"} 

                    >
                      ↺
                    </Button>
                  </div>
                </>
              )}
            </TransformWrapper>
          </Box>
          <Box
            sx={{
              width: "50%",
              "@media (max-width: 600px)": {
                width: "100%",
              },
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" color={colors.textPrimary}>
                {language === "ar"
                  ? `${product.price2} جنية`
                  : `${product.price.toFixed(2)} EGP`}
              </Typography>
              <Chip
                label={stockStatus.text}
                color={stockStatus.color}
                size="small"
                sx={{ fontWeight: "bold" }}
              />
            </Stack>

            <Typography
              variant="subtitle1"
              color={colors.textSecondary}
              gutterBottom
            >
              {language === "ar" ? "الشركة: " : "Brand: "}
              {language === "ar" ? product.company2 : product.company}
            </Typography>
            {renderProductStars()}

            <Divider
              sx={{
                my: 2,
                borderColor: colors.divider,
                borderWidth: "1px",
              }}
            />

            <Typography variant="body1" paragraph color={colors.textPrimary}>
              {product[language === "ar" ? "description2" : "description"]}
            </Typography>

            {durability && (
              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography
                  variant="subtitle2"
                  component="div"
                  color={colors.textPrimary}
                >
                  {durability.label}:
                </Typography>
                <Typography variant="body2" color={colors.textSecondary}>
                  {durability.value}
                </Typography>
              </Box>
            )}

            <Typography
              variant="body2"
              paragraph
              sx={{
                color: colors.textSecondary,
                fontSize: "1rem",
              }}
            >
              {language === "ar" ? product.information2 : product.information}
            </Typography>
            <Box
              sx={{
                mt: 4,
                p: 2,
                backgroundColor: colors.grey,
                borderRadius: 1,
                border: `1px solid ${colors.divider}`,
                minWidth: 0,
                overflow: "hidden",
                "@media (max-width: 530px)": {
                  p: 1.5,
                  boxSizing: "border-box",
                },
              }}
            >
              <ConfirmationDialog
                open={confirmationOpen}
                message={confirmationMessage}
                onConfirm={() => {
                  handleSubmitReview();
                  setShowThankYou(true);

                  const ratedProducts = JSON.parse(
                    localStorage.getItem("ratedProducts") || "{}"
                  );
                  localStorage.setItem(
                    "ratedProducts",
                    JSON.stringify({
                      ...ratedProducts,
                      [product.id]: new Date().toISOString(),
                    })
                  );
                  setConfirmationOpen(false);
                  setTimeout(() => setShowThankYou(false), 20000);
                }}
                onCancel={() => setConfirmationOpen(false)}
              />

              <Typography variant="h6" gutterBottom color={colors.textPrimary}>
                {language === "ar" ? "قيم المنتج" : "Rate this product"}
              </Typography>

              {renderInteractiveStars()}

              <TextField
                fullWidth
                multiline
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder={
                  language === "ar"
                    ? "اكتب مراجعتك هنا..."
                    : "Write your review here..."
                }
                variant="outlined"
                margin="normal"
                InputProps={{
                  sx: {
                    "&::placeholder": {
                      fontWeight: "bold",
                      opacity: 1,
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: colors.textPrimary,
                    "& fieldset": {
                      borderColor: colors.divider,
                    },
                    "&:hover fieldset": {
                      borderColor: colors.starFilled,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.starFilled,
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: colors.textSecondary,
                  },
                }}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  const ratedProducts = JSON.parse(
                    localStorage.getItem("ratedProducts") || "{}"
                  );

                  if (ratedProducts[product.id]) {
                    setConfirmationMessage(
                      language === "ar"
                        ? "لقد قمت بتقييم هذا المنتج مسبقاً. هل تريد التقييم مرة أخرى؟"
                        : "You already rated this product. Submit again?"
                    );
                    setConfirmationOpen(true);
                  } else {
                    handleSubmitReview();
                    setShowThankYou(true);
                    localStorage.setItem(
                      "ratedProducts",
                      JSON.stringify({
                        ...ratedProducts,
                        [product.id]: new Date().toISOString(),
                      })
                    );
                    setTimeout(() => setShowThankYou(false), 20000);
                  }
                }}
                disabled={userRating === 0}
                sx={{
                  mt: 1,
                  bgcolor: colors.starFilled,
                  color: isDarkMode ? "#000" : "#fff",
                  fontWeight: "bold",
                  "&:hover": {
                    bgcolor: isDarkMode ? "#ffca28" : "#f57c00",
                  },
                }}
              >
                {showThankYou
                  ? language === "ar"
                    ? "شكراً لك!"
                    : "Thank You!"
                  : language === "ar"
                  ? "إرسال التقييم"
                  : "Submit Rating"}
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
