import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import Pricing from "./pages/Pricing.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/gallery"} element={<GalleryPage />} />
        <Route path={"/pricing"} element={<Pricing />} />
        <Route path={"/contact"} element={<Contact />} />
    </Routes>
  )
}

export default App
