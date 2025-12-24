import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "../../contexts/TranslationContext";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import LockIcon from "@mui/icons-material/Lock";
import "./CartSidebar.css";
import {
  
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  
} from "@mui/material";
const toArabicNumerals = (num) => {
  if (!num) return ""; 
  const arabicDigits = "٠١٢٣٤٥٦٧٨٩";
  return num.toString().replace(/\d/g, (d) => arabicDigits[d]);
};

export default function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    isCartOpen,
    toggleCart,
  } = useContext(CartContext);

  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();
  const [orders, setOrders] = useState([]);
  const [cancelSuccess, setCancelSuccess] = useState(null);
  const navigate = useNavigate();
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  
  const formatNumber = (num) => {
    if (!num) return ""; 
    return language === "ar" ? toArabicNumerals(num) : num;
  };

  const handleCheckout = () => {
    if (!user) {
      navigate("/signin");
      return;
    }

    if (cartItems.length === 0) return;

    const newOrder = {
      id: Date.now().toString().slice(-6),
      items: [...cartItems],
      total: cartTotal,
      status: "processing",
      date: new Date().toLocaleString(),
    };

    setOrders((prev) => [...prev, newOrder]);
    clearCart();

    setTimeout(() => {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === newOrder.id ? { ...order, status: "completed" } : order
        )
      );
    }, 3000);
  };

  const handleCancelOrder = (orderId) => {
    setSelectedOrderId(orderId);
    setCancelDialogOpen(true);
  };

  const handleSignIn = () => {
    toggleCart();
    navigate("/signin");
  };

  const activeOrders = orders.filter(
    (order) => order.status === "processing" || order.status === "completed"
  );

  const cancelledOrders = orders.filter(
    (order) => order.status === "cancelled"
  );

  if (!isCartOpen) return null;

  return (
    
    <div className={`cart-sidebar-overlay ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>{language === "ar" ? "سلة التسوق" : "Your Cart"}</h2>
          <button onClick={toggleCart} className="close-btn">
            <CloseIcon />
          </button>
        </div>

        <div className="cart-items">
          {cancelSuccess && (
            <div
              className={`cancel-success-message ${
                isDarkMode ? "dark-mode" : ""
              }`}
            >
              <DoneIcon className="success-icon" />
              <span>
                {language === "ar"
                  ? `تم إلغاء الطلب #${formatNumber(cancelSuccess)} بنجاح`
                  : `Order #${cancelSuccess} cancelled successfully`}
              </span>
            </div>
          )}

          {cartItems.length === 0 ? (
            <div
              className={`empty-cart-message ${isDarkMode ? "dark-mode" : ""}`}
            >
              <p>{language === "ar" ? "السلة فارغة" : "Your cart is empty"}</p>
              <p className="hint">
                {language === "ar"
                  ? "أضف بعض المنتجات للمتابعة"
                  : "Add some products to proceed"}
              </p>
            </div>
          ) : (
            <>
              <div className={`order-summary ${isDarkMode ? "dark-mode" : ""}`}>
                <h3>{language === "ar" ? "ملخص الطلب" : "Order Summary"}</h3>
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <span>
                      {language === "ar" ? item.name2 : item.name} ×{" "}
                      {formatNumber(item.quantity)}
                    </span>
                    <span>
                      {language === "ar" ? item.price2 : item.price.toFixed(2)}
                      {language === "ar" ? " جنية " : " EGP "}

                    </span>
                  </div>
                ))}
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{language === "ar" ? item.name2 : item.name}</h3>
                    <p>
                      {language === "ar" ? item.price2 : item.price.toFixed(2)}
                      {language === "ar" ? "جنية " : "EGP "}
                    </p>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span>{formatNumber(item.quantity)}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    {language === "ar" ? "إزالة" : "Remove"}
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {user && (
          <div className="order-status-section">
            {activeOrders.length > 0 && (
              <div
                className={`order-status-group ${
                  isDarkMode ? "dark-mode" : ""
                }`}
              >
                <h4>
                  {language === "ar"
                    ? `الطلبات النشطة (${formatNumber(activeOrders.length)})`
                    : `Active Orders (${activeOrders.length})`}
                </h4>
                {activeOrders.map((order) => (
                  <div
                    key={order.id}
                    className={`order-status-item ${order.status}`}
                  >
                    <div className="order-info">
                      <span className="order-id">
                        #{formatNumber(order.id)}
                      </span>
                      <span className="order-date">{order.date}</span>
                      <span className="order-amount">
                        {language === "ar" ? "جنية " : "EGP "}
                        {language === "ar"
                          ? toArabicNumerals(order.total.toFixed(2))
                          : order.total.toFixed(2)}
                      </span>
                    </div>
                    <div className="order-actions">
                      {order.status === "processing" ? (
                        <AutorenewIcon className="spinner" />
                      ) : (
                        <CheckCircleIcon className="status-icon" />
                      )}
                      <button
                        onClick={() => handleCancelOrder(order.id)}
                        className="cancel-order-btn"
                      >
                        <CancelIcon fontSize="small" />
                        {language === "ar" ? "إلغاء" : "Cancel"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cancelledOrders.length > 0 && (
              <div
                className={`order-status-group cancelled ${
                  isDarkMode ? "dark-mode" : ""
                }`}
              >
                <h4>
                  {language === "ar"
                    ? `الطلبات الملغاة (${formatNumber(
                        cancelledOrders.length
                      )})`
                    : `Cancelled Orders (${cancelledOrders.length})`}
                </h4>
                {cancelledOrders.map((order) => (
                  <div key={order.id} className="order-status-item">
                    <div className="order-info">
                      <span className="order-id">
                        #{formatNumber(order.id)}
                      </span>
                      <span className="order-date">{order.date}</span>
                      <span className="order-amount">
                        {language === "ar" ? "جنية " : "EGP "}
                        {language === "ar"
                          ? toArabicNumerals(order.total.toFixed(2))
                          : order.total.toFixed(2)}
                      </span>
                    </div>
                    <CancelIcon className="status-icon cancelled" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="cart-footer">
          <p>
            {language === "ar" ? "الإجمالي: " : "Total: "}
            <strong>
              {language === "ar"
                ? toArabicNumerals(cartTotal.toFixed(2))
                : cartTotal.toFixed(2)}
              {language === "ar" ? " جنية " : " EGP "}
            </strong>
          </p>

          {!user ? (
            <div className={`login-prompt ${isDarkMode ? "dark-mode" : ""}`}>
              <LockIcon fontSize="small" />
              <span>
                {language === "ar"
                  ? "يجب تسجيل الدخول لإتمام الشراء"
                  : "Please sign in to checkout"}
              </span>
              <button onClick={handleSignIn} className="signin-redirect-btn">
                {language === "ar" ? "تسجيل الدخول" : "Sign In"}
              </button>
            </div>
          ) : (
            <button
              className={`checkout-btn ${
                cartItems.length === 0 ||
                activeOrders.some((o) => o.status === "processing")
                  ? "disabled"
                  : ""
              }`}
              onClick={handleCheckout}
              disabled={
                cartItems.length === 0 ||
                activeOrders.some((o) => o.status === "processing")
              }
            >
              {language === "ar" ? "الدفع" : "Checkout"}
            </button>
          )}
        </div>
      </div>
      <Dialog
        open={cancelDialogOpen}
        onClose={() => setCancelDialogOpen(false)}
        aria-labelledby="cancel-order-dialog"
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
          }
        }}
      >
        <DialogTitle sx={{ 
          direction: language === "ar" ? "rtl" : "ltr",
          borderBottom: `1px solid ${isDarkMode ? '#424242' : '#e0e0e0'}`
        }}>
          {language === "ar" ? "تأكيد الإلغاء" : "Confirm Cancellation"}
        </DialogTitle>
        <DialogContent sx={{ 
          direction: language === "ar" ? "rtl" : "ltr",
          padding: '20px'
        }}>
          {language === "ar" 
            ? `هل أنت متأكد أنك تريد إلغاء الطلب #${formatNumber(selectedOrderId)}؟`
            : `Are you sure you want to cancel order #${selectedOrderId}?`}
        </DialogContent>
        <DialogActions sx={{ 
          direction: language === "ar" ? "rtl" : "ltr",
          padding: '16px 24px'
        }}>
          <Button 
            onClick={() => setCancelDialogOpen(false)}
            color="primary"
            sx={{ fontWeight: 'bold' }}
          >
            {language === "ar" ? "تراجع" : "Cancel"}
          </Button>
          <Button
            onClick={() => {
              if (selectedOrderId) {
                setOrders(prev =>
                  prev.map(order =>
                    order.id === selectedOrderId 
                      ? { ...order, status: "cancelled" } 
                      : order
                  )
                );
                setCancelSuccess(selectedOrderId);
                setTimeout(() => setCancelSuccess(null), 3000);
              }
              setCancelDialogOpen(false);
            }}
            color="error"
            sx={{ fontWeight: 'bold' }}
            autoFocus
          >
            {language === "ar" ? "تأكيد الإلغاء" : "Confirm"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
