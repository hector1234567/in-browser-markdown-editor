import { useState } from "react";
import { Header } from "./layout/header";
import Menu from "./layout/Menu";
import DarkModeSwitch from "./components/dark-mode-switch";
import Markdown from "./layout/markdown";
import Preview from "./layout/preview";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // const [showPreview, setShowPreview] = useState(false);

  const [text, setText] = useState("");

  function toggleMenu() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  return (
    <div className="relative h-screen overflow-hidden font-sans">
      <aside
        className={`fixed top-0 left-0 flex min-h-screen w-62.5 flex-col justify-between bg-slate-950 p-6 transition-transform ${
          isMenuOpen ? "" : "-translate-x-62.5"
        }`}
      >
        <Menu />
        <DarkModeSwitch isChecked={darkMode} setDarkMode={setDarkMode} />
      </aside>
      <div
        className={`flex min-h-screen flex-col transition-transform ${isMenuOpen ? "translate-x-62.5" : ""}`}
      >
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <main className="flex h-100 grow">
          <Markdown text={text} editText={setText} />
          <Preview markdownText={text} />
        </main>
      </div>
    </div>
  );
}

export default App;
