import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import UploadPage from "./UploadPage";

import { uploadPDF } from "../../services/uploadService";

export default function Upload() {

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [progress, setProgress] =
    useState(0);

  const handleFileChange = (e) => {

    const selectedFile =
      e.target.files[0];

    if (!selectedFile) return;

    if (
      selectedFile.type !==
      "application/pdf"
    ) {
      setMessage(
        "Please select a PDF."
      );
      return;
    }

    setFile(selectedFile);

    setMessage("");

  };

  const handleUpload =
    async () => {

      if (!file) return;

      try {

        setLoading(true);

        setProgress(15);

        const interval =
          setInterval(() => {

            setProgress((prev) =>
              prev >= 90
                ? prev
                : prev + 10
            );

          }, 300);

        const response =
          await uploadPDF(file);

        clearInterval(interval);

        setProgress(100);

        setMessage(
          response.message
        );

        setFile(null);

      } catch {

        setMessage(
          "Upload failed."
        );

      } finally {

        setLoading(false);

      }

    };

  return (
    <DashboardLayout>

      <div className="max-w-5xl mx-auto py-10">

        <h1 className="text-4xl font-bold text-white mb-2">

          Upload Study Material

        </h1>

        <p className="text-slate-400 mb-8">

          Upload PDFs for AI-powered learning.

        </p>

        <UploadPage
          file={file}
          loading={loading}
          progress={progress}
          message={message}
          onFileChange={handleFileChange}
          onUpload={handleUpload}
        />

      </div>

    </DashboardLayout>
  );

}