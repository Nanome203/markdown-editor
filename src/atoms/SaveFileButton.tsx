import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  code?: string;
}
const SaveFileButton: React.FC<Props> = ({ code }) => {
  const saveFile = () => {
    if (code === "" || code === undefined) {
      alert("Editor is empty. Download aborted");
      return;
    }
    const blob = new Blob([code], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "your-markdown.md";
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div>
      <button
        onClick={saveFile}
        className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-solid border-white bg-transparent px-5 py-2 font-bold text-white hover:bg-white hover:text-black active:bg-transparent active:text-white"
      >
        <FontAwesomeIcon icon={faDownload} className="text-2xl" />
        Download markdown file
      </button>
    </div>
  );
};

export default SaveFileButton;
