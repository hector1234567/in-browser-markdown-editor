import iconSave from "../assets/icon-save.svg";
import Button from "./button";

export default function SaveButton() {
  return (
    <Button onClick={() => alert("Save")}>
      <img src={iconSave} />
      <span className="ml-2 hidden text-sm font-bold text-nowrap md:block">
        Save Changes
      </span>
    </Button>
  );
}
