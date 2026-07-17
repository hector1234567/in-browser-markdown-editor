import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
};

const Modal = ({ closeModal, children }: ModalProps) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line react-hooks/refs
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) return;
    modalRoot.appendChild(elRef.current!);
    return () => {
      modalRoot.removeChild(elRef.current!);
    };
  }, []);
  return createPortal(
    <div className="absolute top-0 left-0 flex h-dvh w-screen items-center justify-center bg-[#00000053] dark:bg-[#7c818782]">
      <div className="absolute h-full w-full" onClick={closeModal}></div>
      <div className="bg-neutral-0 z-10 max-w-85.75 rounded-sm p-6 dark:bg-slate-950">
        {children}
      </div>
    </div>,
    // eslint-disable-next-line react-hooks/refs
    elRef.current,
  );
};

export default Modal;
