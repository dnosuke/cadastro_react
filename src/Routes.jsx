import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/Navbar";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/carrinho" element={<Cart />}/>
                <Route path="/catalogo" element={<Catalog />}/>
            </Routes>
        </BrowserRouter>
    )

}
