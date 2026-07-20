import { history } from "../data/marketingDummyData";

function History() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] p-10">

        <div className="text-center mb-10">
             <h1 className="text-4xl font-bold text-white">
                 Marketing History
            </h1>

            <p className="text-gray-300 mt-3">
                 View and manage your previously generated AI marketing content.
            </p>
        </div>

      <div className="grid md:grid-cols-2 gap-6">

        {history.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white">
              {item.business}
            </h2>

            <p className="text-gray-300 mt-2">
              <strong>Content Type:</strong> {item.type}
            </p>

            <p className="text-gray-300">
              <strong>Generated On:</strong> {item.date}
            </p>

            <div className="flex gap-3 mt-6">
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white transition">
                View
              </button>

              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition">
                Download
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default History;