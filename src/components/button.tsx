import type { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  expand?: boolean;
};

export default function Button({
  onClick,
  expand = true,
  children,
}: ButtonProps) {
  return (
    <button
      className={`text-neutral-0 flex cursor-pointer justify-center rounded-sm bg-orange-600 p-2.5 font-semibold transition-colors hover:bg-orange-400 ${
        expand ? "w-full" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
