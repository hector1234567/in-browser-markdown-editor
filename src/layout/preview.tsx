import ReactMarkdown, { type Components } from "react-markdown";

type PreviewProps = {
  markdownText: string;
};

export default function Preview({ markdownText }: PreviewProps) {
  const customMarkdown: Components = {
    h1: ({ children }) => (
      <h1 className="mb-4 text-3xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-6 mb-3 text-2xl font-semibold">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-base leading-relaxed text-gray-700">{children}</p>
    ),
    a: ({ children, href }) => (
      <a href={href} className="text-blue-600 underline hover:text-blue-800">
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 list-disc space-y-1 pl-6">{children}</ul>
    ),
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm text-pink-600">
        {children}
      </code>
    ),
  };

  return (
    <div className="h-full w-full border-l-1 border-neutral-200">
      <div className="bg-neutral-100 px-4 py-3 text-slate-400">
        <h2 className="text-[14px] font-semibold tracking-[3px] uppercase">
          Preview
        </h2>
      </div>
      <div className="bg-neutral-0 h-full px-4 py-3">
        <ReactMarkdown components={customMarkdown}>
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
}
