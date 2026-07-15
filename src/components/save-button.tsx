import iconSave from "../assets/icon-save.svg";
import Button from "./button";

type SaveButtonProps = {
  text: string;
  name: string;
};

export default function SaveButton({ text, name }: SaveButtonProps) {
  async function saveFile() {
    if (!window.showOpenFilePicker) return;

    const handle = await window.showSaveFilePicker({
      suggestedName: name,
      types: [
        {
          description: "Markdown file.",
          accept: {
            "text/plain": [".md"],
          },
        },
      ],
    });
    const writable = await handle.createWritable();
    await writable.write(text);
    await writable.close();
  }

  return (
    <Button onClick={() => saveFile()}>
      <img src={iconSave} />
      <span className="ml-2 hidden text-sm font-bold text-nowrap md:block">
        Save Changes
      </span>
    </Button>
  );
}
