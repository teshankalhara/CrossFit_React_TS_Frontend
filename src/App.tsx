import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home"
import CustomizedBtn from "./components/CustomizedBtn/CustomizedBtn"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CustomizedBtn title="View" height={40} width={200}/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
