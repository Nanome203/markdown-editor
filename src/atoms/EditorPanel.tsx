import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
interface Props {
  code?: string;
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const EditorPanel: React.FC<Props> = ({ code, onChange }) => {
  const [fontSize, setFontSize] = useState(15);
  return (
    <div className="basis-1/2 pr-5">
      <h1 className="text-center text-5xl italic">Editor</h1>
      <div className="m-5 flex items-center justify-center gap-5">
        <button
          onClick={() => onChange("")}
          className="cursor-pointer rounded-xl border-2 border-solid border-white bg-transparent px-5 py-3 font-bold text-white hover:bg-white hover:text-black active:bg-transparent active:text-white"
        >
          Clear
        </button>
        <div>
          <label htmlFor="font-size-input" className="text-xl">
            Font size:
          </label>
          <input
            type="number"
            id="font-size-input"
            defaultValue={fontSize}
            onChange={(e) => {
              setFontSize(parseInt(e.target.value));
            }}
            className="ml-2 w-fit rounded-xl border-solid border-white bg-transparent p-2 text-white outline-none"
          />
        </div>
      </div>
      <Editor
        height="80%"
        defaultLanguage="markdown"
        value={code}
        theme="vs-dark"
        onChange={(value) => onChange(value)}
        options={{
          readOnly: false,
          minimap: {
            enabled: false,
          },
          fontSize: fontSize,
        }}
      />
    </div>
  );
};

export default EditorPanel;
