import iconSave from "../assets/icon-save.svg";
import Button from "./button";

type SaveButtonProps = {
  text: string;
  name: string;
};

export default function SaveButton({ text, name }: SaveButtonProps) {
  async function saveFile() {
    try {
      if (!window.showOpenFilePicker)
        return alert("Your browser doesn't support File System Access API.");

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
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log("Error");
      }
    }
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
