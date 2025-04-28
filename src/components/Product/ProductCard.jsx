import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "../../contexts/TranslationContext";
import ProductModal from "./ProductModal";

export default function ProductCard({ product, onAddToCart }) {
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  const getImageUrl = () => {
    
    if (product.image.startsWith('http')) return product.image;
    return `${window.location.origin}/E-commerce${product.image.startsWith('/') ? '' : '/'}${product.image}`;
  };

  return (
    <>
      <Card className={`product-card ${isDarkMode ? 'dark-mode' : ''}`}>
        <CardMedia
          component="img"
          height="200"
          image={getImageUrl()}
          alt={product.name}
          onClick={() => setModalOpen(true)}
          style={{ cursor: 'pointer' }}
          onError={(e) => {
            e.target.src = `${window.location.origin}/E-commerce/images/placeholder.jpg`;
          }}
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div"
            onClick={() => setModalOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" mt={2}>
            EGP {product.price.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={onAddToCart}
            fullWidth
            sx={{ mt: 2 }}
          >
            {language === 'ar' ? 'أضف إلى السلة' : 'Add to Cart'}
          </Button>
        </CardContent>
      </Card>
      <ProductModal 
        product={{...product, image: getImageUrl()}} 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}