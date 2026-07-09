import document from "../assets/icon-document.svg";

export default function DocumentInfo() {
  return (
    <div className="flex flex-grow-1 items-center gap-2 border-l border-slate-400 px-6">
      <img src={document} alt="Document Info" className="" />
      <form className="flex w-full max-w-100 shrink flex-col">
        <label htmlFor="document-name" className="text-[10px] text-slate-400">
          Document Name
        </label>
        <input
          id="document-name"
          className="self-stretch p-0 text-xs outline-0 focus:border-b focus:border-white"
        />
      </form>
    </div>
  );
}
