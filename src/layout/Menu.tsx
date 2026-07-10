import Button from "../components/button";
import DocumentItem from "../components/document-item";

export default function Menu() {
  return (
    <nav className="flex h-full flex-col">
      <h2 className="mb-7.25 text-sm font-semibold tracking-widest text-slate-400 uppercase">
        My documents
      </h2>
      <Button onClick={() => alert("Click")}>+ New Document</Button>

      <ul className="my-6 flex flex-col gap-6">
        <li>
          <DocumentItem />
        </li>
        <li>
          <DocumentItem />
        </li>
        <li>
          <DocumentItem />
        </li>
      </ul>
    </nav>
  );
}
