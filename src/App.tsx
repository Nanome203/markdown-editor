import { useState } from "react";
import EditorPanel from "./atoms/EditorPanel";
import PreviewPanel from "./atoms/PreviewPanel";

function App() {
  const [code, setCode] = useState<string | undefined>("");
  return (
    <div className="fixed left-0 top-0 flex size-full bg-black text-white">
      <EditorPanel code={code} onChange={setCode} />
      <PreviewPanel code={code} />
    </div>
  );
}

export default App;
