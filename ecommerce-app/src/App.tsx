import Navbar from "./components/Navbar/Navbar"
import { Home } from "./pages"
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
