import { useState } from "react";
import workspaceService from "../../services/workspaceService";

export default function PDFUpload({ setUploadInfo }) {

    const [selectedFile, setSelectedFile] = useState(null);

    const [uploading, setUploading] = useState(false);

    const [message, setMessage] = useState("");

    function formatFileSize(bytes) {

        if (!bytes) return "0 KB";

        const kb = bytes / 1024;

        if (kb < 1024) {

            return `${kb.toFixed(1)} KB`;

        }

        return `${(kb / 1024).toFixed(2)} MB`;

    }

    function handleFileChange(event) {

        const file = event.target.files[0];

        if (!file) return;

        if (file.type !== "application/pdf") {

            setMessage("❌ Please choose a PDF.");

            return;

        }

        setSelectedFile(file);

        setMessage("");

    }

    async function handleUpload() {

        if (!selectedFile) {

            setMessage("Please choose a PDF.");

            return;

        }

        try {

            setUploading(true);

            const response =
                await workspaceService.uploadPDF(
                    selectedFile
                );

            setUploadInfo({

                filename:
                    response.data.filename,

                chunks:
                    response.data.chunks,

                size:
                    formatFileSize(
                        selectedFile.size
                    ),

                time:
                    new Date().toLocaleTimeString(),

            });

            setMessage(
                "✅ PDF uploaded successfully."
            );

        }

        catch (error) {

            console.error(error);

            setMessage("❌ Upload failed.");

        }

        finally {

            setUploading(false);

        }

    }

    return (

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">

            <h2 className="text-2xl font-bold">

                📄 Upload Study Material

            </h2>

            <p className="text-slate-400 mt-2">

                Upload PDF notes, books and PYQs.

            </p>

            <div className="mt-6 border-2 border-dashed border-slate-700 rounded-2xl p-8 text-center">

                <input

                    type="file"

                    accept=".pdf"

                    onChange={handleFileChange}

                    className="block mx-auto"

                />

                {

                    selectedFile && (

                        <div className="mt-5 text-green-400">

                            📄 {selectedFile.name}

                        </div>

                    )

                }

                <button

                    onClick={handleUpload}

                    disabled={uploading}

                    className="mt-6 bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl disabled:opacity-50"

                >

                    {

                        uploading

                            ? "Uploading..."

                            : "Upload PDF"

                    }

                </button>

                {

                    message && (

                        <div className="mt-5">

                            {message}

                        </div>

                    )

                }

            </div>

        </div>

    );

}