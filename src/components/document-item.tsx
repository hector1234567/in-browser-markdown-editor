import document from "../assets/icon-document.svg";

export default function DocumentItem() {
  return (
    <div className="flex grow items-center gap-4">
      <img src={document} alt="Document Info" className="" />
      <div className="flex w-full max-w-100 shrink flex-col">
        <span className="cursor-pointer text-[10px] text-slate-400">
          01 April 2022
        </span>
        <span className="text-neutral-0 text-xs">untitled-document.md</span>
      </div>
    </div>
  );
}
