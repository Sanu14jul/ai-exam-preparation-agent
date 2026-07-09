import UploadBox from "./UploadBox";
import UploadProgress from "./UploadProgress";
import UploadHistory from "./UploadHistory";

export default function UploadPage({
  file,
  loading,
  progress,
  message,
  onFileChange,
  onUpload,
}) {
  return (
    <div className="space-y-8">

      <UploadBox
        file={file}
        onFileChange={onFileChange}
        onUpload={onUpload}
        loading={loading}
      />

      <UploadProgress
        loading={loading}
        progress={progress}
      />

      <UploadHistory
        message={message}
      />

    </div>
  );
}