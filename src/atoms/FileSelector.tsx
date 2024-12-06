import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
interface Props {
  onSelected: React.Dispatch<React.SetStateAction<string>>;
}
const FileSelector: React.FC<Props> = ({ onSelected }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const reader = new FileReader();
    reader.onload = () => {
      onSelected(reader.result as string);
    };
    reader.readAsText(event.target.files[0]);
    event.target.value = "";
  };

  return (
    <div>
      <input
        type="file"
        accept=".md"
        hidden
        ref={fileInputRef}
        onChange={handleSelectedFile}
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-solid border-white bg-transparent px-5 py-2 font-bold text-white hover:bg-white hover:text-black active:bg-transparent active:text-white"
      >
        <FontAwesomeIcon icon={faMarkdown} className="text-2xl" />
        Select markdown file
      </button>
    </div>
  );
};

export default FileSelector;
