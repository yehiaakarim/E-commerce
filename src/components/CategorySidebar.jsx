import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import './CategorySidebar.css';

export default function CategorySidebar({ 
  activeCategory, 
  setActiveCategory,
  sortOrder,
  setSortOrder 
}) {
  const { language } = useTranslation();
  
  const categories = [
    { id: 'hot-deals', en: 'Hot Deals 🔥', ar: '🔥 العروض المميزة' },
    { id: 'electronics', en: 'Electronics 💻', ar: '💻 إلكترونيات' },
    { id: 'clothing', en: 'Clothing 👗', ar: '👗 ملابس' },
    { id: 'watches', en: 'Watches ⌚', ar: '⌚ ساعات' },
    { id: 'groceries', en: 'Groceries 🍞', ar: '🍞 بقالة' },
    { id: 'home appliances', en: 'Home Appliances 📺', ar: '📺 أدوات منزلية' }
  ];

  const handleCategoryClick = (categoryId) => {
    console.log('Category selected:', categoryId);
    setActiveCategory(categoryId);
  };

  const handleSortChange = (e) => {
    console.log('Sort order changed:', e.target.value);
    setSortOrder(e.target.value);
  };

  return (
    <div className="category-sidebar">
      <h3>{language === 'ar' ? 'الفئات' : 'Categories'}</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className={activeCategory === category.id ? 'active' : ''}
            onClick={() => handleCategoryClick(category.id)}
          >
            {language === 'ar' ? category.ar : category.en}
          </li>
        ))}
      </ul>

      <div className="sort-controls">
        <h4>{language === 'ar' ? 'ترتيب حسب السعر' : 'Sort by Price'}</h4>
        <select 
          value={sortOrder} 
          onChange={handleSortChange}
          className="sort-select"
        >
          <option value="default">{language === 'ar' ? 'الافتراضي' : 'Default'}</option>
          <option value="low-high">{language === 'ar' ? 'من الأقل للأعلى' : 'Low to High'}</option>
          <option value="high-low">{language === 'ar' ? 'من الأعلى للأقل' : 'High to Low'}</option>
        </select>
      </div>
    </div>
  );
}