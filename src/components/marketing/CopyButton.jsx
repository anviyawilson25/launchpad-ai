import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";

function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white px-4 py-2 rounded-lg transition-all duration-300"
    >
      {copied ? <FaCheck /> : <FaRegCopy />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default CopyButton;