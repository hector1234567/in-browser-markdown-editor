import document from "../assets/icon-document.svg";
import { formatDateFromTimestamp } from "../utils/dateFunctions";

type DocumentItemProps = {
  name: string;
  date: number;
  id?: number;
};

export default function DocumentItem({ name, date, id }: DocumentItemProps) {
  return (
    <div
      className="group flex grow cursor-pointer items-center gap-4"
      data-id={id}
    >
      <img src={document} alt="Document Info" className="" />
      <div className="flex w-full max-w-100 shrink flex-col">
        <span className="cursor-pointer text-[10px] text-slate-400">
          {formatDateFromTimestamp(date)}
        </span>
        <span className="text-neutral-0 text-xs group-hover:text-orange-500">
          {name}
        </span>
      </div>
    </div>
  );
}
