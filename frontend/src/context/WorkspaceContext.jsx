import { createContext, useContext, useState } from "react";

const WorkspaceContext = createContext(null);

export function WorkspaceProvider({ children }) {
  const [uploadInfo, setUploadInfo] = useState(null);

  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      message:
        "👋 Welcome to PrepMind AI!\n\nUpload a PDF and ask me anything.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const [currentDocument, setCurrentDocument] = useState(null);

  const value = {
    uploadInfo,
    setUploadInfo,

    messages,
    setMessages,

    loading,
    setLoading,

    currentDocument,
    setCurrentDocument,
  };

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error(
      "useWorkspace must be used inside WorkspaceProvider"
    );
  }

  return context;
}