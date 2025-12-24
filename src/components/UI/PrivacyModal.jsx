import React from 'react';
import { useTranslation } from "../../contexts/TranslationContext";
import { useTheme } from "../../contexts/ThemeContext";
import "./Modal.css";

const PrivacyModal = ({ onClose }) => {
  const { language } = useTranslation();
  const { isDarkMode } = useTheme();

  const content = {
    en: {
      title: "Privacy Policy",
      policy: `
        <h3>Your Privacy Matters</h3>
        <p>We are committed to protecting your personal information when you shop with us.</p>
        
        <h4>Information We Collect</h4>
        <ul>
          <li>Contact information (name, email, phone number)</li>
          <li>Delivery address for your grocery orders</li>
          <li>Payment information (processed securely through our payment gateway)</li>
          <li>Purchase history to improve your shopping experience</li>
        </ul>
        
        <h4>How We Use Your Information</h4>
        <ul>
          <li>To process and deliver your orders</li>
          <li>To communicate about your orders and promotions</li>
          <li>To improve our products and services</li>
          <li>To prevent fraud and ensure security</li>
        </ul>
        
        <h4>Data Protection</h4>
        <p>We implement appropriate security measures to protect your personal information. We never sell your data to third parties.</p>
      `,
      close: "Close"
    },
    ar: {
      title: "سياسة الخصوصية",
      policy: `
        <h3>خصوصيتك تهمنا</h3>
        <p>نحن ملتزمون بحماية معلوماتك الشخصية عندما تتسوق معنا.</p>
        
        <h4>المعلومات التي نجمعها</h4>
        <ul>
          <li>معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
          <li>عنوان التسليم لطلبات البقالة الخاصة بك</li>
          <li>معلومات الدفع (يتم معالجتها بأمان عبر بوابة الدفع الخاصة بنا)</li>
          <li>سجل المشتريات لتحسين تجربة التسوق الخاصة بك</li>
        </ul>
        
        <h4>كيف نستخدم معلوماتك</h4>
        <ul>
          <li>لمعالجة وتوصيل طلباتك</li>
          <li>للتواصل بشأن طلباتك والعروض الترويجية</li>
          <li>لتحسين منتجاتنا وخدماتنا</li>
          <li>لمنع الاحتيال وضمان الأمان</li>
        </ul>
        
        <h4>حماية البيانات</h4>
        <p>ننفذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية. نحن لا نبيع بياناتك إلى أطراف ثالثة.</p>
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

export default PrivacyModal;