import ReactMarkdown, { type Components } from "react-markdown";

type PreviewProps = {
  markdownText: string;
};

export default function Preview({ markdownText }: PreviewProps) {
  const customMarkdown: Components = {
    h1: ({ children }) => (
      <h1 className="dark:text-neutral-0 mb-5 font-serif text-[32px] leading-snug font-bold text-slate-700">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="dark:text-neutral-0 mb-5 font-serif text-[28px] leading-snug font-light text-slate-700">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="dark:text-neutral-0 mb-5 font-serif text-[24px] leading-snug font-bold text-slate-700">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="dark:text-neutral-0 mb-5 font-serif text-[20px] leading-snug font-bold text-slate-700">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="dark:text-neutral-0 mb-5 font-serif text-[16px] leading-snug font-bold text-slate-700">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="mb-5 font-serif text-[14px] leading-snug font-bold text-orange-600 dark:text-orange-400">
        {children}
      </h6>
    ),
    p: ({ children }) => (
      <p className="mb-5 font-serif text-[14px] leading-7 text-slate-400 dark:text-slate-300">
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-orange-600 underline hover:text-orange-400 dark:text-orange-400 dark:hover:text-orange-600"
      >
        {children}
      </a>
    ),
    ol: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-6 font-serif text-[14px] leading-6 font-normal text-slate-400 dark:text-slate-300 [&>li]:pl-2">
        {children}
      </ol>
    ),
    ul: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-6 font-serif text-[14px] leading-6 font-normal text-slate-400 marker:text-orange-600 dark:text-slate-300 dark:marker:text-orange-400 [&>li]:pl-2">
        {children}
      </ul>
    ),
    code: ({ children }) => (
      <code className="dark:text-neutral-0 font-mono text-[14px] font-semibold text-slate-700">
        {children}
      </code>
    ),
    blockquote: ({ children }) => (
      <blockquote className="dark:[&>p]:text-neutral-0 mb-5 rounded-sm border-l-3 border-orange-600 bg-neutral-100 px-5 py-6 font-bold dark:border-orange-400 dark:bg-slate-800 [&>p]:mb-0 [&>p]:text-slate-700">
        {children}
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre className="mb-5 rounded-sm bg-neutral-100 p-6 font-bold dark:bg-slate-800">
        {children}
      </pre>
    ),
  };

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto border-l border-neutral-200 dark:border-slate-500">
      <div className="bg-neutral-100 px-4 py-3 text-slate-400 dark:bg-slate-950">
        <h2 className="text-[14px] font-semibold tracking-[3px] uppercase">
          Preview
        </h2>
      </div>
      <div className="bg-neutral-0 h-full px-4 py-3 dark:bg-neutral-950">
        <ReactMarkdown components={customMarkdown}>
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
}
