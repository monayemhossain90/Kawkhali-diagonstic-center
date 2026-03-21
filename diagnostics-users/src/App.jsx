import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import DoctorsPage from "./pages/DoctorsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import OnlineReportPage from "./pages/OnlineReportPage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import VerifyOtpPage from "./pages/Auth/VerifyOtpPage.jsx";
import CreateNewPassPage from "./pages/Auth/CreateNewPassPage.jsx";
import FullScreenLoader from "./components/Loader/FullScreenLoader.jsx";


const App = () => {
    return (
        <>
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<HomePage/>}/>
                  <Route exact path="/about" element={<AboutPage/>}/>
                  <Route exact path="/services" element={<ServicePage/>}/>
                  <Route exact path="/doctors" element={<DoctorsPage/>}/>
                  <Route exact path="/contact" element={<ContactPage/>}/>
                  <Route exact path="/online-report" element={<OnlineReportPage/>}/>
                  <Route exact path="/login" element={<LoginPage/>}/>
                  <Route exact path="/register" element={<RegisterPage/>}/>
                  <Route exact path="/forgot-password" element={<ForgotPasswordPage/>}/>
                  <Route exact path="/verify-otp" element={<VerifyOtpPage/>} />
                  <Route exact path="/create-new-pass" element={<CreateNewPassPage/>} />
              </Routes>
          </BrowserRouter>
            <FullScreenLoader/>
        </>
    );
};

export default App;