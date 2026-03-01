import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Profile from "./pages/Profile/Profile";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import ScrollToTop from "./components/ScrollToTop";
 
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
      <Route
          path="/category/:slug"
          element={<CategoryPage />}
        />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile" element={<Profile />} />
    
      
    </Routes>
    </>
  );
}

export default App;
