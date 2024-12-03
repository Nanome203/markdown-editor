import React from "react";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import "highlight.js/styles/github-dark.css";

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
  console.log(defaultSchema.attributes);
  console.log({ ...defaultSchema, attributes: { "*": ["className"] } });
  return (
    <div className="basis-1/2">
      <h1 className="text-center text-5xl italic">Preview</h1>
      <div className="scrollbar scrollbar-track-transparent scrollbar-thumb-white h-[88vh] overflow-scroll scroll-smooth pl-5">
        <Markdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          rehypePlugins={[
            rehypeHighlight,
            rehypeRaw,
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
