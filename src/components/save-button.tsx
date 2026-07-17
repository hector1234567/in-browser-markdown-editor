import { useState } from "react";
import iconSave from "../assets/icon-save.svg";
import { useFiles } from "../hooks/useFiles";
import Button from "./button";
import Modal from "../layout/modal";

type SaveButtonProps = {
  text: string;
  name: string;
  index?: IDBValidKey;
};

export default function SaveButton({ text, name, index }: SaveButtonProps) {
  const { updateFile, addFile } = useFiles();
  const [showModal, setShowModal] = useState(false);

  function saveChanges() {
    if (index) {
      updateFile(text, name, index);
    } else {
      addFile(text, name);
    }
    setShowModal(true);
  }

  async function saveFile() {
    setShowModal(false);
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
    <>
      <Button onClick={saveChanges}>
        <img src={iconSave} />
        <span className="ml-2 hidden text-sm font-bold text-nowrap md:block">
          Save Changes
        </span>
      </Button>
      {showModal ? (
        <Modal closeModal={() => setShowModal(false)}>
          <h2 className="dark:text-neutral-0 mb-4 font-serif text-[20px] font-bold text-neutral-950">
            Changes Saved
          </h2>
          <p className="mb-5 text-[14px] leading-7 text-slate-400 dark:text-slate-300">
            Do you want to save the document in the file sistem?
          </p>
          <Button onClick={saveFile}>Save Document</Button>
        </Modal>
      ) : null}
    </>
  );
}
