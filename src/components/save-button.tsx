import iconSave from "../assets/icon-save.svg";

export default function SaveButton() {
  return (
    <button className="flex cursor-pointer rounded-sm bg-orange-600 p-2.5 hover:bg-orange-400">
      <img src={iconSave} />
      <span className="ml-2 hidden text-sm font-bold text-nowrap md:block">
        Save Changes
      </span>
    </button>
  );
}
