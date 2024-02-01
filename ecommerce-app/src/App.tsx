import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import AOS from "aos";
import { useEffect } from "react";
const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);
  return (
    <main className="app">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
