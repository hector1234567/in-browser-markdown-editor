import Button from "../components/button";
import DocumentItem from "../components/document-item";
import { useFiles } from "../hooks/useFiles";

type MenuProps = {
  setText: (text: string) => void;
  setName: (text: string) => void;
};

export default function Menu({ setText, setName }: MenuProps) {
  const { addFile, getAllFiles } = useFiles();

  async function loadDocument() {
    try {
      if (!window.showOpenFilePicker)
        return alert("Your browser doesn't support File System Access API.");

      const [handle] = await window.showOpenFilePicker();
      const file = await handle.getFile();

      const content = await file.text();
      setText(content);
      setName(file.name);

      await addFile(content, file.name);
    } catch (e) {
      console.error(e);
      alert("File is invalid");
    }
  }

  return (
    <nav className="flex h-full flex-col">
      <h2 className="mb-7.25 text-sm font-semibold tracking-widest text-slate-400 uppercase">
        My documents
      </h2>
      <Button onClick={loadDocument}>+ New Document</Button>

      <ul className="my-6 flex flex-col gap-6">
        {getAllFiles().map((file) => (
          <li key={file.id}>
            <DocumentItem id={file.id} name={file.name} date={file.date} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
