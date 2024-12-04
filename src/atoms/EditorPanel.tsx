import { Editor } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import React, { useRef, useState } from "react";
import FileSelector from "./FileSelector";
import SaveFileButton from "./SaveFileButton";
interface Props {
  code?: string;
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const EditorPanel: React.FC<Props> = ({ code, onChange }) => {
  const [fontSize, setFontSize] = useState(17);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    readOnly: false,
    minimap: {
      enabled: false,
    },
    fontSize: fontSize,
    renderLineHighlight: "none",
    scrollbar: {
      verticalScrollbarSize: 7,
    },
    wordWrap: "on",
  };
  return (
    <div className="basis-1/2 px-5">
      <h1 className="text-center text-5xl italic">Markdown Editor</h1>
      <div className="mb-5 flex items-center justify-center gap-5 font-['Roboto']">
        <button
          onClick={() => {
            onChange("");
            editorRef.current!.focus();
          }}
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
            className="ml-2 w-fit rounded-xl border-none border-white bg-white p-3 outline-none"
          />
        </div>
        <FileSelector onSelected={onChange} />
        <SaveFileButton code={code} />
      </div>
      <Editor
        height="80%"
        defaultLanguage="markdown"
        value={code}
        theme="vs-dark"
        onMount={(e) => {
          editorRef.current = e;
          e.focus();
        }}
        onChange={(value) => onChange(value)}
        options={options}
      />
    </div>
  );
};

export default EditorPanel;
