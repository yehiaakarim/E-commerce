import { useTranslation } from "../contexts/TranslationContext";
import "./ProductList.css";
import React from 'react';

const Marquee = () => {
  const { language } = useTranslation();
  
  const offers = (
    language === "ar" 
      ? "...عروض خاصة...🚨 اشتري لاب توب الترا بوك و احصل علي مروحة تبريد لاب توب هدية قيمتها ٧٥٠ جنية...🚨 اشتري هاتف نوفا إن١ و احصل علي باور بانك ٢٠٠٠٠ مللي امبير هدية قيمتها ١٠٠٠ جنية...🚨 اشتري ٣ سويت شيرت و احصل علي الرابع هدية مجانية...🚨"
      : "🚨...Special Offers...🚨 Buy Ultrabook Laptop and Get a Free Cooling Pad Worth 750 EGP ...🚨 Buy Nova N1 SmartPhone and Get a Free 20000mAh Power Bank worth 1000 EGP...🚨 Buy 3 Hooded Sweatshirts and Get the 4th one for Free"
  ).split('🚨').filter(item => item.trim() !== '');

  return (
    <div className="stock-ticker marquee-strip">
      <ul aria-hidden="false">
        {offers.map((offer, index) => (
          <li key={`original-${index}`}>
            {offer.trim()}
          </li>
        ))}
      </ul>
      
      <ul aria-hidden="true">
        {offers.map((offer, index) => (
          <li key={`clone-${index}`}>
            {offer.trim()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;