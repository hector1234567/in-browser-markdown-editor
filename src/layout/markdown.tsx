import { useRef } from "react";

type MarkdownProps = {
  text: string;
  editText: (text: string) => void;
};

export default function Markdown({ text, editText }: MarkdownProps) {
  const editor = useRef<HTMLTextAreaElement>(null);

  function handleClickDiv() {
    editor.current?.focus();
  }

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      <div className="bg-neutral-100 px-4 py-3 text-slate-400">
        <h2 className="text-[14px] font-semibold tracking-[3px] uppercase">
          Markdown
        </h2>
      </div>
      <div className="bg-neutral-0 h-full px-4 py-3" onClick={handleClickDiv}>
        <textarea
          name="markdown"
          onChange={(ev) => editText(ev.target.value)}
          className="w-full resize-none text-slate-700 focus-visible:outline-0"
          style={{ fieldSizing: "content" }}
          ref={editor}
          value={text}
        />
      </div>
    </div>
  );
}
