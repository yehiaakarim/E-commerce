import React from "react";
import { HashRouter } from "react-router-dom"; 
import { useTheme } from "./contexts/ThemeContext";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import CartSidebar from "./components/Cart/CartSidebar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./Routes";
import "./styles/base/reset.css";
import "./styles/base/variables.css";

export default function App() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <HashRouter>
      <Header />
      <CartSidebar />
      <AppRoutes /> 
      <Footer />
    </HashRouter>
  );
}