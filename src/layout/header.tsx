import DeleteButton from "../components/delete-button";
import DocumentInfo from "../components/document-info";
import MenuButton from "../components/menu-button";
import SaveButton from "../components/save-button";

type HeaderProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  return (
    <header className="text-neutral-0 flex h-14 items-center bg-slate-800 font-sans">
      <MenuButton isOpen={isMenuOpen} toggleOpen={toggleMenu} />
      <span className="sp mx-6 text-sm font-semibold tracking-[5px] uppercase">
        Markdown
      </span>
      <DocumentInfo />
      <div className="align-center mr-3 ml-auto flex shrink-0 gap-2">
        <DeleteButton />
        <SaveButton />
      </div>
    </header>
  );
}
