import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Student from "./Components/Student";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("currentUser");
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />

        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />

        <Route
          path="/student"
          element={
            <PrivateRoute>
              <Student />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
