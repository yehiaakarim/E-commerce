import React from 'react';
import { useTranslation } from "../../contexts/TranslationContext";
import { useTheme } from "../../contexts/ThemeContext";
import "./Modal.css";

const TermsModal = ({ onClose }) => {
  const { language } = useTranslation();
  const { isDarkMode } = useTheme();

  const content = {
    en: {
      title: "Terms of Use",
      terms: `
        <h3>Welcome to Our Store</h3>
        <p>By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.</p>
        
        <h4>General Conditions</h4>
        <ul>
          <li>We reserve the right to refuse service to anyone for any reason at any time</li>
          <li>Your content may be transferred unencrypted over various networks</li>
          <li>You agree not to reproduce, duplicate, or exploit any portion of the service without express written permission</li>
        </ul>
        
        <h4>Accuracy of Information</h4>
        <p>We are not responsible if information made available on this site is not accurate, complete, or current.</p>
        
        <h4>Modifications to Service</h4>
        <p>We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information.</p>
      `,
      close: "Close"
    },
    ar: {
      title: "شروط الاستخدام",
      terms: `
        <h3>مرحبًا بكم في متجرنا</h3>
        <p>باستخدامك موقعنا الإلكتروني أو خدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية.</p>
        
        <h4>الشروط العامة</h4>
        <ul>
          <li>نحتفظ بالحق في رفض الخدمة لأي شخص لأي سبب وفي أي وقت</li>
          <li>قد يتم نقل محتواك بدون تشفير عبر شبكات مختلفة</li>
          <li>توافق على عدم استنساخ أو تكرار أو استغلال أي جزء من الخدمة دون إذن كتابي صريح</li>
        </ul>
        
        <h4>دقة المعلومات</h4>
        <p>نحن لسنا مسؤولين إذا كانت المعلومات المتاحة على هذا الموقع غير دقيقة أو غير كاملة أو غير حديثة.</p>
        
        <h4>تعديلات الخدمة</h4>
        <p>نحتفظ بالحق في تعديل محتويات هذا الموقع في أي وقت، لكننا غير ملتزمين بتحديث أي معلومات.</p>
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
          dangerouslySetInnerHTML={{ __html: content[language].terms }}
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

export default TermsModal;