import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./components/Menu";
import LandingPage from "./features/home/components/LandingPage";
import IndiceGeneros from "./features/generos/components/IndiceGeneros";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/generos" element={<IndiceGeneros />} />
            <Route />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
