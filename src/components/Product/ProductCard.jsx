import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "../../contexts/TranslationContext";
import ProductModal from "./ProductModal";

export default function ProductCard({ product, onAddToCart }) {
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  const getImageUrl = () => {
    if (product.image.startsWith("http")) return product.image;
    return `${window.location.origin}/E-commerce${
      product.image.startsWith("/") ? "" : "/"
    }${product.image}`;
  };

  return (
    <>
      <Card 
        className={`product-card ${isDarkMode ? "dark-mode" : ""}`}
        sx={{
          backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "background-color 0.3s ease",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={getImageUrl()}
          alt={product[language === "ar" ? "name2" : "name"]}
          onClick={() => setModalOpen(true)}
          style={{ cursor: "pointer" }}
          onError={(e) => {
            e.target.src = `${window.location.origin}/E-commerce/images/placeholder.jpg`;
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            onClick={() => setModalOpen(true)}
            sx={{ 
              cursor: "pointer",
              color: isDarkMode ? "#ffffff" : "text.primary",
              fontWeight: 500,
              minHeight: "64px",
              display: "flex",
              alignItems: "center"
            }}
          >
            {product[language === "ar" ? "name2" : "name"]}
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "text.secondary",
              mb: 2,
              minHeight: "80px"
            }}
          >
            {product[language === "ar" ? "description2" : "description"]}
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: isDarkMode ? "#ffffff" : "text.primary",
              mt: 2,
              fontWeight: 600
            }}
          >
            {language === "ar" ? "جنية" : "EGP"}{" "}
            {language === 'ar' ? product.price2 : product.price.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={onAddToCart}
            fullWidth
            sx={{ mt: 2 }}
          >
            {language === "ar" ? "أضف إلى السلة" : "Add to Cart"}
          </Button>
        </CardContent>
      </Card>
      <ProductModal
        product={{ ...product, image: getImageUrl() }}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}