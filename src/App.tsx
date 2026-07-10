import { useState } from "react";
import "./App.css";
import { Header } from "./layout/header";
import Menu from "./layout/Menu";
import DarkModeSwitch from "./components/dark-mode-switch";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  return (
    <div className="relative overflow-hidden font-sans">
      <aside
        className={`fixed top-0 left-0 flex min-h-screen w-62.5 flex-col justify-between bg-slate-950 p-6 transition-transform ${
          isMenuOpen ? "" : "-translate-x-62.5"
        }`}
      >
        <Menu />
        <DarkModeSwitch isChecked={darkMode} setDarkMode={setDarkMode} />
      </aside>
      <div
        className={`transition-transform ${isMenuOpen ? "translate-x-62.5" : ""}`}
      >
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default App;
