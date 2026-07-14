import { useEffect, useState } from "react";
import { Header } from "./layout/header";
import Menu from "./layout/Menu";
import DarkModeSwitch from "./components/dark-mode-switch";
import Markdown from "./layout/markdown";
import Preview from "./layout/preview";
import ShowPreviewButton from "./components/show-preview-button";

const MIN_DOUBLE_WINDOW_WIDTH = 800; // px

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const [text, setText] = useState("");

  function toggleMenu() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  useEffect(() => {
    (async function getExampleMarkdown() {
      const res = await fetch("/example.md");
      const data = await res.text();
      setText(data);
    })();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden font-sans">
      <aside
        className={`fixed top-0 left-0 flex min-h-screen w-62.5 flex-col justify-between bg-slate-950 p-6 transition-transform ${
          isMenuOpen ? "" : "-translate-x-62.5"
        }`}
      >
        <Menu />
        <DarkModeSwitch />
      </aside>
      <div
        className={`flex min-h-screen flex-col transition-transform ${isMenuOpen ? "translate-x-62.5" : ""}`}
      >
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <main className="relative flex h-100 grow dark:bg-neutral-950">
          {!showPreview || window.innerWidth > MIN_DOUBLE_WINDOW_WIDTH ? (
            <Markdown text={text} editText={setText} />
          ) : null}
          {showPreview ? <Preview markdownText={text} /> : null}
          <div className="absolute top-0 right-6 flex h-10 items-center">
            <ShowPreviewButton
              show={showPreview}
              onClickHandler={() => setShowPreview((show) => !show)}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
