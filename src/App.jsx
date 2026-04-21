import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Profile from "./pages/Profile/Profile";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import ScrollToTop from "./components/ScrollToTop";
import Privacy from "./pages/Legal/Privacy";
import FAQ from "./pages/Legal/FAQ";
import HelpCenter from "./pages/Legal/HelpCenter";
import TermsOfService from "./pages/Legal/TermsOfService";
import HowItWorks from "./pages/About/HowItWorks";
import OurStory from "./pages/About/OurStory";
import Careers from "./pages/About/Community";
import ContactUs from "./pages/About/ContactUs";
import Dashboard from "./pages/partner/Dashboard";

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/place/:id" element={<PlaceDetails />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile" element={<Profile />} />
      
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/terms" element={<TermsOfService />} />

       <Route path="/how-it-works" element={<HowItWorks />} />
       <Route path="/our-story" element={<OurStory />} />
       <Route path="/Community" element={<Careers />} />
       <Route path="/contact" element={<ContactUs />} />
       <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
    </>
  );
}

export default App;
