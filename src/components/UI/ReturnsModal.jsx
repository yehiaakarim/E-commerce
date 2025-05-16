import React from 'react';
import { useTranslation } from "../../contexts/TranslationContext";
import { useTheme } from "../../contexts/ThemeContext";
import "./Modal.css";

const ReturnsModal = ({ onClose }) => {
  const { language } = useTranslation();
  const { isDarkMode } = useTheme();

  const content = {
    en: {
      title: "Returns Policy",
      policy: `
        <h3>Our Returns Policy</h3>
        <p>We want you to be completely satisfied with your grocery purchases. Please review our return policy carefully.</p>
        
        <h4>Grocery Items</h4>
        <ul>
          <li>Perishable goods (dairy, meat, produce): Not eligible for return</li>
          <li>Non-perishable items: May be returned within 7 days of purchase</li>
          <li>Items must be unopened and in original packaging</li>
        </ul>
        
        <h4>Non-Grocery Items</h4>
        <ul>
          <li>Household goods: 14-day return policy</li>
          <li>Electronics: 30-day return policy (must include all original packaging and accessories)</li>
        </ul>
        
        <h4>Return Process</h4>
        <ol>
          <li>Contact customer service for a return authorization</li>
          <li>Bring items to any of our store locations</li>
          <li>Refunds will be issued to original payment method within 3-5 business days</li>
        </ol>
      `,
      close: "Close"
    },
    ar: {
      title: "سياسة الإرجاع",
      policy: `
        <h3>سياسة الإرجاع الخاصة بنا</h3>
        <p>نريدك أن تكون راضيًا تمامًا عن مشترياتك من البقالة. يرجى مراجعة سياسة الإرجاع بعناية.</p>
        
        <h4>مواد البقالة</h4>
        <ul>
          <li>البضائع القابلة للتلف (منتجات الألبان واللحوم والمنتجات): غير مؤهلة للإرجاع</li>
          <li>السلع غير القابلة للتلف: يمكن إرجاعها في غضون 7 أيام من الشراء</li>
          <li>يجب أن تكون العناصر غير مفتوحة وفي تغليفها الأصلي</li>
        </ul>
        
        <h4>السلع غير الغذائية</h4>
        <ul>
          <li>السلع المنزلية: سياسة إرجاع لمدة 14 يومًا</li>
          <li>الإلكترونيات: سياسة إرجاع لمدة 30 يومًا (يجب أن تشمل جميع التغليف والملحقات الأصلية)</li>
        </ul>
        
        <h4>عملية الإرجاع</h4>
        <ol>
          <li>اتصل بخدمة العملاء للحصول على تصريح إرجاع</li>
          <li>أحضر العناصر إلى أي من مواقع متجرنا</li>
          <li>سيتم إصدار المبالغ المستردة إلى طريقة الدفع الأصلية في غضون 3-5 أيام عمل</li>
        </ol>
      `,
      close: "إغلاق"
    }
  };

  return (
    <div className={`modal-overlay ${isDarkMode ? "dark" : ""}`}>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{content[language].title}</h2>
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div 
          className="modal-content"
          dangerouslySetInnerHTML={{ __html: content[language].policy }}
          dir={language === "ar" ? "rtl" : "ltr"}
        />
        <div className="modal-footer">
          <button className="modal-action-button" onClick={onClose}>
            {content[language].close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnsModal;