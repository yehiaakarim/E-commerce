import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from '../../contexts/TranslationContext';
import './AuthForms.css';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 
  const { login } = useAuth();
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    const result = await login(email, password);
    
    if (result.success) {
      setSuccess(language === 'ar' ? 'تم تسجيل الدخول بنجاح!' : 'Signed in successfully!');
      setTimeout(() => navigate('/'), 1500); 
    } else {
      setError(result.error || (language === 'ar' ? 'بيانات الاعتماد غير صالحة' : 'Invalid credentials'));
    }
    
    setIsLoading(false);
  };

  return (
    <form className={`auth-form ${isDarkMode ? 'dark-mode' : ''}`} onSubmit={handleSubmit}>
      {error && <div className="auth-error">{error}</div>}
      {success && <div className="auth-success">{success}</div>}
      
      <div className="input-group">
        <label htmlFor="email">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          dir={language === 'ar' ? 'rtl' : 'ltr'}
          autoComplete="username"
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">{language === 'ar' ? 'كلمة المرور' : 'Password'}</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          dir={language === 'ar' ? 'rtl' : 'ltr'}
          autoComplete="current-password"
        />
      </div>

      <button 
        type="submit" 
        className="auth-submit-btn"
        disabled={isLoading}
      >
        {isLoading 
          ? (language === 'ar' ? 'جاري التحميل...' : 'Loading...') 
          : (language === 'ar' ? 'تسجيل الدخول' : 'Sign In')
        }
      </button>
    </form>
  );
}