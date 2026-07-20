import { FaFilePdf, FaFileWord } from "react-icons/fa";

function DownloadButtons() {
  const handlePDF = () => {
    alert("PDF download will be connected after backend integration.");
  };

  const handleWord = () => {
    alert("Word download will be connected after backend integration.");
  };

  return (
    <div className="flex gap-3 flex-wrap">
      <button
        onClick={handlePDF}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 hover:scale-105 text-white px-4 py-2 rounded-lg transition-all duration-300"
      >
        <FaFilePdf />
        Download PDF
      </button>

      <button
        onClick={handleWord}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-4 py-2 rounded-lg transition-all duration-300"
      >
        <FaFileWord />
        Download Word
      </button>
    </div>
  );
}

export default DownloadButtons;