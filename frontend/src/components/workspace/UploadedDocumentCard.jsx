export default function UploadedDocumentCard({ document }) {
  if (!document) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

        <h2 className="text-xl font-bold mb-4">
          📄 Uploaded Document
        </h2>

        <div className="text-slate-500 text-center py-10">
          No document uploaded yet.
        </div>

      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold">
            📄 Uploaded Document
          </h2>

          <p className="text-slate-400 mt-1">
            Active document for AI
          </p>

        </div>

        <div className="text-green-400 font-semibold">
          ✅ Indexed
        </div>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">
            File Name
          </p>

          <p className="mt-2 font-semibold break-all">
            {document.filename}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">
            Chunks
          </p>

          <p className="mt-2 text-indigo-400 font-bold">
            {document.chunks}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">
            File Size
          </p>

          <p className="mt-2">
            {document.size}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">
            Uploaded
          </p>

          <p className="mt-2">
            {document.time}
          </p>
        </div>

      </div>

    </div>
  );
}