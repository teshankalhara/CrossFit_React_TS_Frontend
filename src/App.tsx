import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import BMI from "./pages/BMI"
import JoinUs from "./pages/JoinUs"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/joinus" element={<JoinUs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
