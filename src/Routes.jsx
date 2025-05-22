import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "./contexts/TranslationContext"; 

const ProductList = lazy(() => import("./pages/ProductList"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const AboutModal = lazy(() => import("./components/UI/AboutModal"));
const TermsModal = lazy(() => import("./components/UI/TermsModal"));
const ReturnsModal = lazy(() => import("./components/UI/ReturnsModal"));
const PrivacyModal = lazy(() => import("./components/UI/PrivacyModal"));
const ShippingModal = lazy(() => import("./components/UI/ShippingModal"));

export default function AppRoutes() {
  const { language } = useTranslation(); 

  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "calc(100vh - 120px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {language === 'ar' ? 'جاري عرض المنتجات...' : 'Loading Products...'}
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/signin" element={<AuthPage initialMode="signin" />} />
        <Route path="/signup" element={<AuthPage initialMode="signup" />} />
        <Route
          path="/about"
          element={<AboutModal onClose={() => window.history.back()} />}
        />
        <Route
          path="/terms"
          element={<TermsModal onClose={() => window.history.back()} />}
        />
        <Route
          path="/returns"
          element={<ReturnsModal onClose={() => window.history.back()} />}
        />
        <Route
          path="/privacy"
          element={<PrivacyModal onClose={() => window.history.back()} />}
        />
        <Route
          path="/shipping"
          element={<ShippingModal onClose={() => window.history.back()} />}
        />
      </Routes>
    </Suspense>
  );
}