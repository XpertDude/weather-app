import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindMovie from "./Movies";
import About from "./About";
export default function App(){
    return(
        <>
    <Router basename="Popcorn-Hunt">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<FindMovie />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </Router>
        </>
    )
}