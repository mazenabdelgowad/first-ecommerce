import Navbar from "./components/Navbar/Navbar"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import AOS from "aos";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  // Get the current location using useLocation hook
  const location = useLocation();

  // Conditionally render Navbar and Footer based on the current route
  const showNavbarAndFooter = !location.pathname.includes("/signup") && !location.pathname.includes("/signin");

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}

    </>
  )
}

export default App
