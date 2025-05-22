import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from './AuthContext';
import { useTranslation } from '../contexts/TranslationContext';
import '../components/Cart/MergePrompt.css';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useContext(AuthContext);
  const { language, isRTL } = useTranslation();
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showMergePrompt, setShowMergePrompt] = useState(false);
  const [guestCartItems, setGuestCartItems] = useState([]);

  const getCartKey = (currentUser) => {
    return currentUser ? `cart_${currentUser.email}` : 'cart_guest';
  };

  useEffect(() => {
    const key = getCartKey(user);
    const savedCart = localStorage.getItem(key);
    setCartItems(savedCart ? JSON.parse(savedCart) : []);
    
    if (user) {
      const guestCart = localStorage.getItem('cart_guest');
      if (guestCart && JSON.parse(guestCart).length > 0) {
        setGuestCartItems(JSON.parse(guestCart));
        setShowMergePrompt(true);
      }
    }
  }, [user]);

  useEffect(() => {
    const key = getCartKey(user);
    localStorage.setItem(key, JSON.stringify(cartItems));
  }, [cartItems, user]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    const key = getCartKey(user);
    setCartItems([]);
    localStorage.setItem(key, JSON.stringify([]));
  };

  const mergeCarts = (shouldMerge) => {
    if (shouldMerge) {
      const mergedCart = [...guestCartItems].reduce((acc, item) => {
        const existing = acc.find(i => i.id === item.id);
        return existing 
          ? acc.map(i => i.id === item.id 
              ? { ...i, quantity: i.quantity + item.quantity } 
              : i)
          : [...acc, item];
      }, [...cartItems]);
      setCartItems(mergedCart);
    }
    localStorage.removeItem('cart_guest');
    setShowMergePrompt(false);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        isCartOpen,
        toggleCart: () => setIsCartOpen(!isCartOpen),
      }}
    >
      {children}
      
      {showMergePrompt && (
        <div className="merge-prompt-overlay">
          <div 
            className={`merge-prompt ${user?.theme === 'dark' ? 'dark-mode' : ''}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <h3>{language === 'ar' ? 'دمج عربات التسوق' : 'Merge shopping carts?'}</h3>
            <p>
              {language === 'ar' 
                ? 'يوجد لديك عناصر في عربة الزائر. هل ترغب في دمجها مع حسابك؟'
                : 'You have items in your guest cart. Would you like to merge them with your account?'}
            </p>
            <div className="merge-buttons">
              <button 
                onClick={() => mergeCarts(true)}
                className="merge-btn merge-yes"
              >
                {language === 'ar' ? 'نعم، دمج' : 'Yes, merge'}
              </button>
              <button 
                onClick={() => mergeCarts(false)}
                className="merge-btn merge-no"
              >
                {language === 'ar' ? 'لا، ابدأ جديد' : 'No, start fresh'}
              </button>
            </div>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}