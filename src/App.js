import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About";
import Instruction from "./pages/Instruction";
import Reviews from "./pages/Reviews";
import Hero from "./components/Hero";
import Testinomial from "./components/Testinomial";
function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/*" element={<Hero />} />
        <Route path="/" element={<About />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/review" element={<Reviews />} />
      </Routes>
      <Testinomial />
    </>
  );
}

export default App;
