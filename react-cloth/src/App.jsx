import "@fontsource/abel"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "./style/global.css"
import "./style/repeat.css"
import "./style/reset.css"
import { Route, BrowserRouter as Router, Routes } from "react-router"
import { HomePage } from "./pages/home"
import { Header } from "./components/header"
import { BasketPage } from "./pages/basket"
import { ProductPage } from "./pages/product"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}

export default App
