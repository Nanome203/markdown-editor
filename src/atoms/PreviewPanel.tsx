import React from "react";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "highlight.js/styles/github-dark.css";
import "katex/dist/katex.min.css";

type Props = {
  code: string | undefined;
};

const customSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    "*": [...defaultSchema.attributes!["*"], "className"],
    code: ["className"],
  },
};
const PreviewPanel: React.FC<Props> = ({ code }) => {
  return (
    <div className="basis-1/2 px-5">
      <h1 className="text-center text-5xl italic">Preview</h1>
      <div className="h-[88vh] overflow-scroll scroll-smooth scrollbar scrollbar-track-transparent scrollbar-thumb-white">
        <Markdown
          remarkPlugins={[remarkGfm, remarkBreaks, remarkMath]}
          rehypePlugins={[
            rehypeHighlight,
            rehypeRaw,
            rehypeKatex,
            [rehypeSanitize, customSchema],
          ]}
          className="font-sans text-lg"
        >
          {code}
        </Markdown>
      </div>
    </div>
  );
};

export default PreviewPanel;
