import { useState } from "react";
import Modal from "../layout/modal";
import Button from "./button";

type DeleteButtonProps = {
  deleteDocument: () => void;
  documentName: string;
};

export default function DeleteButton({
  deleteDocument,
  documentName,
}: DeleteButtonProps) {
  const [showModal, setShowModal] = useState(false);

  function confirmDeletion() {
    deleteDocument();
    setShowModal(false);
  }

  return (
    <>
      <button
        className="group cursor-pointer rounded-sm p-2.5"
        onClick={() => setShowModal(true)}
      >
        <svg
          className="fill-slate-400 transition-colors group-hover:fill-orange-400"
          width="18"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
        </svg>
      </button>
      {showModal ? (
        <Modal closeModal={() => setShowModal(false)}>
          <h2 className="mb-4 font-serif text-[20px] font-bold text-neutral-950">
            Delete this document?
          </h2>
          <p className="mb-5 text-[14px] leading-7 text-slate-400">
            Are you sure you want to delete the <strong>{documentName}</strong>{" "}
            document and its contents? This action cannot be reversed.
          </p>
          <Button onClick={confirmDeletion}>Confirm & Delete</Button>
        </Modal>
      ) : null}
    </>
  );
}
