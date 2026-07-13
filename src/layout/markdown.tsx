import { useRef } from "react";

type MarkdownProps = {
  text: string;
  editText: (text: string) => void;
};

export default function Markdown({ text, editText }: MarkdownProps) {
  const editor = useRef<HTMLTextAreaElement>(null);

  function handleClickDiv() {
    console.log("Entra");
    editor.current?.focus();
  }

  return (
    <div className="h-full">
      <div className="bg-neutral-100 px-4 py-3 text-slate-400">
        <h2 className="text-[14px] font-semibold tracking-[3px] uppercase">
          Markdown
        </h2>
      </div>
      <div className="bg-neutral-0 h-full px-4 py-3" onClick={handleClickDiv}>
        <textarea
          onChange={(ev) => editText(ev.target.value)}
          className="w-full resize-none text-slate-700 focus-visible:outline-0"
          style={{ fieldSizing: "content" }}
          ref={editor}
        >
          {text}
        </textarea>
      </div>
    </div>
  );
}

// const text = `# Welcome to Markdown

// Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

// ## How to use this?

// 1. Write markdown in the markdown editor window
// 2. See the rendered markdown in the preview window

// ### Features

// - Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
// - Name and save the document to access again later
// - Choose between Light or Dark mode depending on your preference

// > This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).

// #### Headings

// To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.

// ##### Lists

// You can see examples of ordered and unordered lists above.

// ###### Code Blocks

// This markdown editor allows for inline-code snippets, like this: . It also allows for larger code blocks like this:`;
