import DeleteButton from "../components/delete-button";
import DocumentInfo from "../components/document-info";
import MenuButton from "../components/menu-button";
import SaveButton from "../components/save-button";

type HeaderProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  text: string;
  name: string;
  setName: (name: string) => void;
  deleteDocument: () => void;
};

export function Header({
  isMenuOpen,
  toggleMenu,
  text,
  name,
  setName,
  deleteDocument,
}: HeaderProps) {
  return (
    <header className="text-neutral-0 flex h-14 items-center bg-slate-800 font-sans">
      <MenuButton isOpen={isMenuOpen} toggleOpen={toggleMenu} />
      <h1 className="sp mx-6 text-sm font-semibold tracking-[4px] uppercase">
        Markdown
      </h1>
      <DocumentInfo name={name} setName={setName} />
      <div className="align-center mr-3 ml-auto flex shrink-0 gap-2">
        <DeleteButton deleteDocument={deleteDocument} documentName={name} />
        <SaveButton text={text} name={name} />
      </div>
    </header>
  );
}
