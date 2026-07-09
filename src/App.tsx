import { useState } from "react";
import "./App.css";
import { Header } from "./layout/header";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default App;
