import Navbar from "./components/Navbar/Navbar"
import { Hero } from "./pages"
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route index element={<Hero />} />
      </Routes>
    </main>
  )
}

export default App
