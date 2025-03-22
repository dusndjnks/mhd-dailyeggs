import Layout from "./components/Layout"
import Benefits from "./pages/Benefits"
import Contact from "./pages/Contact"
import Daily from "./pages/Daily"
import Home from "./pages/Home"
import { Routes , Route } from "react-router-dom"
import Products from "./pages/Products"
import Brochure from "./pages/Brochure"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="daily" element={<Daily/>}/>
        <Route path="benefits" element={<Benefits/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="brochure" element={<Brochure/>}/>
    </Routes>
    </Layout>
  )
}

export default App
