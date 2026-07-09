import iconMenu from "../assets/icon-menu.svg";
import iconClose from "../assets/icon-close.svg";

type MenuButtonProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export default function MenuButton({ isOpen, toggleOpen }: MenuButtonProps) {
  return (
    <button
      className="cursor-pointer self-stretch bg-slate-700 px-4 hover:bg-orange-600"
      onClick={toggleOpen}
    >
      {isOpen ? (
        <img src={iconClose} alt="Close Menu" className="w-5.75" />
      ) : (
        <img src={iconMenu} alt="Open Menu" className="w-5.75" />
      )}
    </button>
  );
}
