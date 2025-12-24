import React from 'react';
import { useTranslation } from "../../contexts/TranslationContext";
import { useTheme } from "../../contexts/ThemeContext";
import "./Modal.css";

const AboutModal = ({ onClose }) => {
  const { language } = useTranslation();
  const { isDarkMode } = useTheme();

  const content = {
    en: {
      title: "About Us",
      policy: `
        <h3>Our Story</h3>
        <p>Founded in 2015, Family Shop started as a small neighborhood grocery store with a vision to provide fresh, high-quality products at affordable prices.</p>
        
        <h4>Our Mission</h4>
        <p>To make grocery shopping convenient, affordable, and enjoyable for families in our community while supporting local farmers and producers.</p>
        
        <h4>What We Offer</h4>
        <ul>
          <li>Fresh produce sourced daily from local farms</li>
          <li>High-quality meats and dairy products</li>
          <li>Wide selection of international and specialty foods</li>
          <li>Convenient online ordering with fast delivery</li>
        </ul>
        
        <h4>Our Values</h4>
        <ul>
          <li>Quality: We carefully select all our products</li>
          <li>Community: We support local businesses and charities</li>
          <li>Sustainability: We minimize waste and use eco-friendly packaging</li>
          <li>Customer Service: Your satisfaction is our priority</li>
        </ul>
      `,
      close: "Close"
    },
    ar: {
      title: "معلومات عنا",
      policy: `
        <h3>قصتنا</h3>
        <p>تأسس متجر العائلة في عام 2015، بدأ كمحل بقالة صغير في الحي بهدف توفير منتجات طازجة وعالية الجودة بأسعار معقولة.</p>
        
        <h4>مهمتنا</h4>
        <p>جعل تسوق البقالة مريحًا وبأسعار معقولة وممتعًا للأسر في مجتمعنا مع دعم المزارعين والمنتجين المحليين.</p>
        
        <h4>ما نقدمه</h4>
        <ul>
          <li>منتجات طازجة يتم الحصول عليها يوميًا من المزارع المحلية</li>
          <li>لحوم ومنتجات ألبان عالية الجودة</li>
          <li>تشكيلة واسعة من الأطعمة الدولية والمتخصصة</li>
          <li>طلب عبر الإنترنت مع توصيل سريع</li>
        </ul>
        
        <h4>قيمنا</h4>
        <ul>
          <li>الجودة: نختار جميع منتجاتنا بعناية</li>
          <li>المجتمع: ندعم الأعمال المحلية والجمعيات الخيرية</li>
          <li>الاستدامة: نقلل النفايات ونستخدم تغليفًا صديقًا للبيئة</li>
          <li>خدمة العملاء: رضاك هو أولويتنا</li>
        </ul>
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

export default AboutModal;