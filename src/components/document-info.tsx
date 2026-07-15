import document from "../assets/icon-document.svg";

type DocumentInfoProps = {
  name: string;
  setName: (name: string) => void;
};

export default function DocumentInfo({ name, setName }: DocumentInfoProps) {
  return (
    <div className="flex grow items-center gap-4 border-l border-slate-400 px-6">
      <img src={document} alt="Document Info" className="" />
      <form className="flex w-full max-w-100 shrink flex-col">
        <label
          htmlFor="document-name"
          className="cursor-pointer text-[10px] text-slate-400"
        >
          Document Name
        </label>
        <input
          onChange={(ev) => setName(ev.target.value)}
          id="document-name"
          className="self-stretch p-0 text-xs outline-0 focus:border-b focus:border-white"
          value={name}
        />
      </form>
    </div>
  );
}
