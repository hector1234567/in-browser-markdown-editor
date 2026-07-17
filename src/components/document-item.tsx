import { formatDateFromTimestamp } from "../utils/dateFunctions";

type DocumentItemProps = {
  name: string;
  date: number;
  onClick: () => void;
  selected: boolean;
};

export default function DocumentItem({
  name,
  date,
  onClick,
  selected,
}: DocumentItemProps) {
  return (
    <div
      className="group flex grow cursor-pointer items-center gap-4"
      onClick={onClick}
    >
      <svg
        width="14"
        height="16"
        className={`${selected ? "fill-orange-400" : "fill-neutral-0"} shrink-0`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z" />
      </svg>
      <div className="flex w-full max-w-100 shrink flex-col">
        <span className="cursor-pointer text-[10px] text-slate-400">
          {formatDateFromTimestamp(date)}
        </span>
        <span
          className={`text-neutral-0 text-xs group-hover:text-orange-500 ${selected ? "text-orange-400" : "text-neutral-0"}`}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
