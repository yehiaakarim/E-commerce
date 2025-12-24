import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "../../contexts/TranslationContext";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductModal from "./ProductModal";

export default function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={`product-card ${isDarkMode ? 'dark-mode' : ''}`}>
        <img 
          src={product.image} 
          alt={product[language === 'ar' ? 'name2' : 'name']} 
          onClick={() => setModalOpen(true)}
          style={{ cursor: 'pointer' }}
        />
        <h3 onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }}>
          {product[language === 'ar' ? 'name2' : 'name']}
        </h3>
        <p>{language === 'ar' ? product.price2 : `EGP ${product.price.toFixed(2)}`}
        </p>
        <Button
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => addToCart(product)}
          className="add-to-cart-btn"
        >
          {language === 'ar' ? 'أضف إلى السلة' : 'Add to Cart'}
        </Button>
      </div>
      <ProductModal 
        product={product} 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}