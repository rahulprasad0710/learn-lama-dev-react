import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleProduct from "./SingleProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SingleProduct />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
