import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from '../../contexts/TranslationContext';
import './AuthForms.css';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 
  const { signup } = useAuth();
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError(language === 'ar' ? 'كلمات المرور غير متطابقة' : "Passwords don't match");
      setIsLoading(false);
      return;
    }

    const result = await signup(name, email, password);
    
    if (result.success) {
      setSuccess(language === 'ar' ? 'تم إنشاء الحساب بنجاح!' : 'Account created successfully!');
      setTimeout(() => navigate('/'), 1500); 
    } else {
      setError(result.error || (language === 'ar' ? 'فشل إنشاء الحساب' : 'Signup failed'));
    }
    
    setIsLoading(false);
  };

  return (
    <form className={`auth-form ${isDarkMode ? 'dark-mode' : ''}`} onSubmit={handleSubmit}>
      {error && <div className="auth-error">{error}</div>}
      {success && <div className="auth-success">{success}</div>}
      
      <div className="input-group">
        <label htmlFor="name">{language === 'ar' ? 'الاسم الكامل' : 'Full Name'}</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">{language === 'ar' ? 'كلمة المرور' : 'Password'}</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
          required
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
      </div>

      <div className="input-group">
        <label htmlFor="confirmPassword">
          {language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
      </div>

      <button 
        type="submit" 
        className="auth-submit-btn"
        disabled={isLoading}
      >
        {isLoading 
          ? (language === 'ar' ? 'جاري التحميل...' : 'Loading...') 
          : (language === 'ar' ? 'إنشاء حساب' : 'Create Account')
        }
      </button>
    </form>
  );
}