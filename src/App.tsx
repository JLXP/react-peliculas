import Menu from "./components/Menu";
import LandingPage from "./features/home/components/LandingPage";

export default function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <LandingPage />
      </div>
    </>
  );
}
