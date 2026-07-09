import { CloudUpload, FileText } from "lucide-react";

export default function UploadCard({
  file,
  onFileChange,
  onUpload,
  loading,
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-xl p-10">

      <div className="flex flex-col items-center">

        <CloudUpload
          size={72}
          className="text-blue-500 mb-5"
        />

        <h2 className="text-3xl font-bold text-white">
          Upload Study Material
        </h2>

        <p className="text-slate-400 mt-2 mb-8">
          Upload PDF notes for AI-powered learning
        </p>

        {/* Hidden Input */}
        <input
          id="pdf-upload"
          type="file"
          accept=".pdf"
          onChange={onFileChange}
          className="hidden"
        />

        {/* Custom Button */}
        <label
          htmlFor="pdf-upload"
          className="
            cursor-pointer
            bg-blue-600
            hover:bg-blue-700
            transition
            px-8
            py-3
            rounded-xl
            text-white
            font-semibold
            shadow-lg
          "
        >
          📂 Browse PDF
        </label>

        {file && (
          <div className="mt-8 w-full bg-slate-800 rounded-xl p-5 border border-slate-700">

            <div className="flex items-center gap-4">

              <FileText
                size={40}
                className="text-red-500"
              />

              <div>

                <p className="text-white font-semibold">
                  {file.name}
                </p>

                <p className="text-slate-400 text-sm">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>

              </div>

            </div>

          </div>
        )}

        <button
          onClick={onUpload}
          disabled={loading}
          className="
            mt-8
            w-full
            bg-green-600
            hover:bg-green-700
            transition
            rounded-xl
            py-4
            font-semibold
            text-lg
            text-white
            disabled:opacity-50
          "
        >
          {loading ? "Uploading..." : "Upload PDF"}
        </button>

      </div>

    </div>
  );
}