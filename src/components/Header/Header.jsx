import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "../../contexts/TranslationContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems, toggleCart } = useContext(CartContext);
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  
  const convertToLocalNumerals = (number, language) => {
    if (language === 'ar') {
      const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      return number.toString().replace(/\d/g, (digit) => arabicDigits[digit]);
    }
    return number;
  };

  const handleAuthAction = (action) => {
    setShowMobileMenu(false);
    if (action === 'signin') {
      navigate('/signin');
    } else if (action === 'signup') {
      navigate('/signup');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowMobileMenu(false);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div 
        className="logo"
      >
        {language === 'ar' ? 'متجر العيلة' : 'Family Shop'}
      </div>

      <nav className="desktop-nav">
        {user && (
          <div className="user-info">
            <AccountCircleIcon className="user-icon" />
            <span className="user-name">
              {language === 'ar' 
                ? `مرحباً، ${user.name}`
                : `Hello, ${user.name}`}
            </span>
          </div>
        )}
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
        <button onClick={toggleLanguage} className="language-toggle">
          <LanguageIcon /> {language === 'ar' ? 'EN' : 'AR'}
        </button>
        {user ? (
          <button onClick={handleLogout} className="auth-btn">
            {language === 'ar' ? 'تسجيل خروج' : 'Logout'}
          </button>
        ) : (
          <>
            <button 
              onClick={() => handleAuthAction('signin')} 
              className="auth-btn"
            >
              {language === 'ar' ? 'تسجيل دخول' : 'Login'}
            </button>
            <button 
              onClick={() => handleAuthAction('signup')} 
              className="auth-btn"
            >
              {language === 'ar' ? 'إنشاء حساب' : 'Sign Up'}
            </button>
          </>
        )}
        <button className="cart-btn" onClick={toggleCart}>
          <ShoppingCartIcon />
          
          <span className="cart-count">
            {convertToLocalNumerals(cartItems.length, language)}
          </span>
        </button>
      </nav>

      <button 
        className="mobile-menu-btn"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        aria-label={language === 'ar' ? 'قائمة الجوال' : 'Mobile menu'}
      >
        <MenuIcon />
      </button>

      {showMobileMenu && (
        <nav className="mobile-nav" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {user && (
            <div className="user-info">
              <AccountCircleIcon className="user-icon" />
              <span className="user-name">
                {language === 'ar' 
                  ? `مرحباً، ${user.name}`
                  : `Hello, ${user.name}`}
              </span>
            </div>
          )}
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
          <button onClick={toggleLanguage} className="language-toggle">
            <LanguageIcon /> {language === 'ar' ? 'EN' : 'AR'}
          </button>
          {user ? (
            <button onClick={handleLogout} className="auth-btn">
              {language === 'ar' ? 'تسجيل خروج' : 'Logout'}
            </button>
          ) : (
            <>
              <button 
                onClick={() => handleAuthAction('signin')} 
                className="auth-btn"
              >
                {language === 'ar' ? 'تسجيل دخول' : 'Login'}
              </button>
              <button 
                onClick={() => handleAuthAction('signup')} 
                className="auth-btn"
              >
                {language === 'ar' ? 'إنشاء حساب' : 'Sign Up'}
              </button>
            </>
          )}
          <button className="cart-btn" onClick={toggleCart}>
            <ShoppingCartIcon />
            
            <span className="cart-count">
              {convertToLocalNumerals(cartItems.length, language)}
            </span>
          </button>
        </nav>
      )}
    </header>
  );
}