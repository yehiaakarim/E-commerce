import React, { useState, useEffect, useMemo } from "react";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "../contexts/TranslationContext";
import ProductCard from "../components/Product/ProductCard";
import CategorySidebar from "../components/CategorySidebar";
import productsData from "../data/products";
import "./ProductList.css";
import Marquee from "./Marquee";

const HOT_DEAL_IDS = new Set([1, 2, 21, 22, 41, 42, 61, 62, 81, 82]);

export default function ProductList() {
  const [products] = useState(() => {
    const baseUrl = window.location.origin + "/E-commerce";
    return productsData.map((p) => ({
      ...p,
      image: `${baseUrl}${p.image.startsWith("/") ? "" : "/"}${p.image}`,
    }));
  });

  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((p) => HOT_DEAL_IDS.has(p.id))
  );
  const [activeCategory, setActiveCategory] = useState("hot-deals");
  const [sortOrder, setSortOrder] = useState("default");

  const { addToCart } = useCart();
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();

  useEffect(() => {
    let filtered = [];
    if (activeCategory === "hot-deals") {
      filtered = products.filter((p) => HOT_DEAL_IDS.has(p.id));
    } else if (activeCategory === "all") {
      filtered = [...products];
    } else {
      filtered = products.filter((p) => p.category === activeCategory);
    }
    setFilteredProducts(filtered);
  }, [activeCategory, products]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOrder === "low-high") return a.price - b.price;
      if (sortOrder === "high-low") return b.price - a.price;
      return 0;
    });
  }, [filteredProducts, sortOrder]);

  return (
    <div className={`product-container ${isDarkMode ? "dark-mode" : ""}`}>
      <CategorySidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <div className="main-content">
        <Marquee />
        <div className="product-list">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => addToCart(product)}
              />
            ))
          ) : (
            <div className={`no-products ${isDarkMode ? "dark-mode" : ""}`}>
              {language === "ar" ? "لا توجد منتجات" : "No products found"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
