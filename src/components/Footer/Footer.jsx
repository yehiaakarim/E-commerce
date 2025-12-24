import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "../../contexts/TranslationContext";
import { Facebook, Instagram, WhatsApp, Email } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import TermsModal from "../UI/TermsModal";
import ReturnsModal from "../UI/ReturnsModal";
import PrivacyModal from "../UI/PrivacyModal";
import ShippingModal from "../UI/ShippingModal";
import AboutModal from "../UI/AboutModal";
import "./Footer.css";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showReturnsModal, setShowReturnsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showShippingModal, setShowShippingModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const content = {
    en: {
      links: {
        terms: "Terms of Use",
        privacy: "Privacy Policy",
        shipping: "Shipping Policy",
        returns: "Returns Policy",
        about: "About Us",
      },
      social: "Connect With Us",
      rights: "© 2026 Family Shop. All rights reserved.",
      adress: "El Sherouk City, Behind Dar Misr Compound. 01270006230",
      socialMedia: {
        facebook: "Facebook",
        instagram: "Instagram",
        whatsapp: "WhatsApp",
        gmail: "G-mail",
      },
      quickLinks: "Quick Links",
    },
    ar: {
      links: {
        terms: "شروط الاستخدام",
        privacy: "سياسة الخصوصية",
        shipping: "سياسة الشحن",
        returns: "سياسة الإرجاع",
        about: "معلومات عنا",
      },
      social: "تواصل معنا",
      rights: "© ٢٠٢٦ متجر العيلة. جميع الحقوق محفوظة.",
      adress: "مدينة الشروق, خلف كومبوند دار مصر ٠١٢٧٠٠٠٦٢٣٠",
      socialMedia: {
        facebook: "فيسبوك",
        instagram: "إنستجرام",
        whatsapp: "واتساب",
        gmail: "جي ميل",
      },
      quickLinks: "روابط سريعة",
    },
  };

  const handleModalClick = (policy) => {
    switch (policy) {
      case "terms":
        setShowTermsModal(true);
        break;
      case "returns":
        setShowReturnsModal(true);
        break;
      case "privacy":
        setShowPrivacyModal(true);
        break;
      case "shipping":
        setShowShippingModal(true);
        break;
      case "about":
        setShowAboutModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
      <div className="footer-container">
        <div className="footer-section">
          <h4>{content[language].quickLinks}</h4>
          <ul>
            {["terms", "returns", "privacy", "shipping", "about"].map((key) => (
              <li key={key}>
                <button
                  className="footer-link-button"
                  onClick={() => handleModalClick(key)}
                >
                  {content[language].links[key]}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>{content[language].social}</h4>
          <div className="social-icons">
            <Tooltip title={content[language].socialMedia.facebook}>
              <a
                href="https://www.facebook.com/yehiakarimsoliman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </Tooltip>
            <Tooltip title={content[language].socialMedia.instagram}>
              <a
                href="https://www.instagram.com/familyshopp2025/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </Tooltip>
            <Tooltip title={content[language].socialMedia.whatsapp}>
              <a
                href="https://wa.link/9afcky"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp />
              </a>
            </Tooltip>
            <Tooltip title={content[language].socialMedia.gmail}>
              <a
                href="https://mail.google.com/mail/u/0/#search/yehiaabdelkarimsoliman%40gmail.com?compose=new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Email />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{content[language].adress}</p>
        <p>{content[language].rights}</p>
      </div>

      {showTermsModal && (
        <TermsModal onClose={() => setShowTermsModal(false)} />
      )}
      {showReturnsModal && (
        <ReturnsModal onClose={() => setShowReturnsModal(false)} />
      )}
      {showPrivacyModal && (
        <PrivacyModal onClose={() => setShowPrivacyModal(false)} />
      )}
      {showShippingModal && (
        <ShippingModal onClose={() => setShowShippingModal(false)} />
      )}
      {showAboutModal && (
        <AboutModal onClose={() => setShowAboutModal(false)} />
      )}
    </footer>
  );
};

export default Footer;
