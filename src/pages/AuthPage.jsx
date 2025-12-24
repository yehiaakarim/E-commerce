import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../contexts/TranslationContext';
import SignInForm from '../components/auth/SignInForm';
import SignUpForm from '../components/auth/SignUpForm';
import './AuthPage.css';

export default function AuthPage({ initialMode = 'signin' }) {
  const [isSignIn, setIsSignIn] = useState(initialMode === 'signin');
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();

  useEffect(() => {
    setIsSignIn(location.pathname === '/signin');
  }, [location]);

 
const switchMode = () => {
  const newPath = isSignIn ? '/signup' : '/signin';
  navigate(newPath, { replace: true });
};

  const translations = {
    signin: {
      title: language === 'ar' ? 'تسجيل الدخول' : 'Sign In',
      prompt: language === 'ar' ? 'جديد في متجر العيلة؟ ' : 'New to Family Shop? ',
      action: language === 'ar' ? 'إنشاء حساب' : 'Sign up'
    },
    signup: {
      title: language === 'ar' ? 'إنشاء حساب' : 'Create Account',
      prompt: language === 'ar' ? 'لديك حساب بالفعل؟ ' : 'Already have an account? ',
      action: language === 'ar' ? 'تسجيل الدخول' : 'Sign in'
    },
    guest: language === 'ar' ? 'المتابعة كزائر' : 'Continue as Guest'
  };

  return (
    <div className={`auth-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="auth-card">
        <div className="auth-header">
          <h1>{isSignIn ? translations.signin.title : translations.signup.title}</h1>
          <p>
            {isSignIn ? translations.signin.prompt : translations.signup.prompt}
            <span onClick={switchMode}>
              {isSignIn ? translations.signin.action : translations.signup.action}
            </span>
          </p>
        </div>

        {isSignIn ? <SignInForm /> : <SignUpForm />}

        <div className="auth-footer">
          <button 
            className="guest-btn"
            onClick={() => navigate('/')}
          >
            {translations.guest}
          </button>
        </div>
      </div>
    </div>
  );
}