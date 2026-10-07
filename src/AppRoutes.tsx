import { Route, Routes } from "react-router";
import IndiceGeneros from "./features/generos/components/IndiceGeneros";
import LandingPage from "./features/home/components/LandingPage";

export default function AppRoutes(){
    return(
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/generos" element={<IndiceGeneros />} />
            <Route />
          </Routes>
    )
}