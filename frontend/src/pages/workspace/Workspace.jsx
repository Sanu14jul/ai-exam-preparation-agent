import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import { WorkspaceProvider } from "../../context/WorkspaceContext";

import WorkspaceHeader from "../../components/workspace/WorkspaceHeader";
import ChatHistory from "../../components/workspace/ChatHistory";
import PDFUpload from "../../components/workspace/PDFUpload";
import UploadedDocumentCard from "../../components/workspace/UploadedDocumentCard";
import WorkspaceChat from "../../components/workspace/WorkspaceChat";
import NotesPanel from "../../features/notes/NotesPanel";

export default function Workspace() {
  return (
    <WorkspaceProvider>
      <DashboardLayout>
        <div className="max-w-7xl mx-auto py-8">

          <WorkspaceHeader />

          <div className="grid grid-cols-12 gap-6 mt-8">

            <div className="col-span-3">
              <ChatHistory />
            </div>

            <div className="col-span-9 space-y-6">

              <PDFUpload />

              <UploadedDocumentCard />

              <WorkspaceChat />
              <NotesPanel />

            </div>

          </div>

        </div>
      </DashboardLayout>
    </WorkspaceProvider>
  );
}