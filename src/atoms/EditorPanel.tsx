import { Editor } from "@monaco-editor/react";
import React from "react";
interface Props {
  code?: string;
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const EditorPanel: React.FC<Props> = ({ code, onChange }) => {
  return (
    <div className="basis-1/2">
      <h1 className="pl-5 text-center text-5xl italic">Editor</h1>

      <Editor
        height="90vh"
        defaultLanguage="markdown"
        defaultValue={code}
        theme="vs-dark"
        onChange={(value) => onChange(value)}
        options={{
          readOnly: false,
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
};

export default EditorPanel;
