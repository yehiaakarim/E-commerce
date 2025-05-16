import React from 'react';
import { useTranslation } from "../../contexts/TranslationContext";
import { useTheme } from "../../contexts/ThemeContext";
import "./Modal.css";

const ShippingModal = ({ onClose }) => {
  const { language } = useTranslation();
  const { isDarkMode } = useTheme();

  const content = {
    en: {
      title: "Shipping Policy",
      policy: `
        <h3>Grocery Delivery Information</h3>
        <p>We offer fast and reliable delivery for your grocery orders.</p>
        
        <h4>Delivery Areas</h4>
        <ul>
          <li>Within city limits: Free delivery for orders over EGP 1500</li>
          <li>Suburban areas: EGP 50 delivery fee</li>
          <li>Outlying areas: Delivery available with additional fees</li>
        </ul>
        
        <h4>Delivery Times</h4>
        <ul>
          <li>Standard delivery: 1-2 business days</li>
          <li>Express delivery: Same day (orders placed before 12pm)</li>
          <li>Weekend delivery available for an additional fee</li>
        </ul>
        
        <h4>Perishable Items</h4>
        <p>All perishable groceries are packed in insulated containers with ice packs to ensure freshness during delivery.</p>
        
        <h4>Order Tracking</h4>
        <p>You will receive SMS/email notifications with tracking information once your order is dispatched.</p>
      `,
      close: "Close"
    },
    ar: {
      title: "سياسة الشحن",
      policy: `
        <h3>معلومات توصيل البقالة</h3>
        <p>نحن نقدم توصيلًا سريعًا وموثوقًا لطلبات البقالة الخاصة بك.</p>
        
        <h4>مناطق التوصيل</h4>
        <ul>
          <li>داخل حدود المدينة: توصيل مجاني للطلبات التي تزيد عن 1500 جنيها</li>
          <li>المناطق الضواحي: رسوم التوصيل 50 جنيها</li>
          <li>المناطق النائية: التوصيل متاح برسوم إضافية</li>
        </ul>
        
        <h4>أوقات التوصيل</h4>
        <ul>
          <li>التوصيل القياسي: 1-2 أيام عمل</li>
          <li>التوصيل السريع: في نفس اليوم (الطلبات المقدمة قبل الساعة 12 ظهرًا)</li>
          <li>التوصيل في عطلة نهاية الأسبوع متاح برسوم إضافية</li>
        </ul>
        
        <h4>المواد القابلة للتلف</h4>
        <p>يتم تعبئة جميع مواد البقالة القابلة للتلف في حاويات معزولة مع أكياس ثلج لضمان النضارة أثناء التوصيل.</p>
        
        <h4>تتبع الطلب</h4>
        <p>سوف تتلقى إشعارات عبر الرسائل القصيرة / البريد الإلكتروني مع معلومات التتبع بمجرد شحن طلبك.</p>
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

export default ShippingModal;