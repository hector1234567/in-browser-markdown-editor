import { useEffect, useState } from "react";
import { Header } from "./layout/header";
import DarkModeSwitch from "./components/dark-mode-switch";
import Markdown from "./layout/markdown";
import Preview from "./layout/preview";
import ShowPreviewButton from "./components/show-preview-button";
import { FilesProvider } from "./filesProvider";
import Menu from "./layout/Menu";

const MIN_DOUBLE_WINDOW_WIDTH = 800; // px

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEditor, setShowEditor] = useState(true);

  const [id, setId] = useState<IDBValidKey | undefined>();
  const [text, setText] = useState("");
  const [name, setName] = useState("New Document");

  function deleteDocument() {
    setName("");
    setText("");
    setId(undefined);
  }

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
      <FilesProvider>
        <aside
          className={`fixed top-0 left-0 flex min-h-screen w-62.5 flex-col justify-between bg-slate-950 p-6 transition-transform ${
            isMenuOpen ? "" : "-translate-x-62.5"
          }`}
        >
          <Menu
            setText={setText}
            setName={setName}
            setCurrentId={setId}
            currentId={id}
          />
          <DarkModeSwitch />
        </aside>
        <div
          className={`flex min-h-screen flex-col transition-transform ${isMenuOpen ? "translate-x-62.5" : ""}`}
        >
          <Header
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            text={text}
            name={name}
            setName={setName}
            deleteDocument={deleteDocument}
            index={id}
          />
          <main className="relative flex h-100 grow overflow-x-auto dark:bg-neutral-950">
            {showEditor ? <Markdown text={text} editText={setText} /> : null}
            {!showEditor || window.innerWidth > MIN_DOUBLE_WINDOW_WIDTH ? (
              <Preview markdownText={text} />
            ) : null}
          </main>
        </div>
        <div className="absolute top-14 right-6 flex h-10 items-center">
          <ShowPreviewButton
            show={showEditor}
            onClickHandler={() => setShowEditor((show) => !show)}
          />
        </div>
      </FilesProvider>
    </div>
  );
}

export default App;
