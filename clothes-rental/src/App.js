import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import Women from "./components/Women.jsx";
import Men from "./components/Men.jsx";
import ContactForm from "./components/ContactForm.jsx";
import About from "./components/About.jsx"
import SignInForm from "./components/SignInForm.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Categories />
                <Footer />
              </>
            }
          />
          <Route
            path="/women"
            element={
              <>
                <Women />
                <Footer />
              </>
            }
          />
          <Route
            path="/men"
            element={
              <>
                <Men />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <SignInForm></SignInForm>
              </>
            }
          />

          <Route
            path="/register"
            element={
              <RegistrationForm></RegistrationForm>
            }></Route>

          <Route
            path="/cart"
            element={
              <Cart></Cart>
            }></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
