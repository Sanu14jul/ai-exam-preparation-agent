import { useWorkspace } from "../../context/WorkspaceContext";

export default function UploadedDocumentCard() {

    const { uploadInfo } = useWorkspace();

    if (!uploadInfo) {

        return (

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center text-slate-500">

                📄 No document uploaded yet.

            </div>

        );

    }

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <div className="flex justify-between">

                <div>

                    <h2 className="text-xl font-bold">

                        📄 Active Document

                    </h2>

                    <p className="text-slate-400">

                        Ready for AI

                    </p>

                </div>

                <div className="text-green-400">

                    ✅ Indexed

                </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-slate-800 rounded-xl p-4">

                    <p className="text-slate-400 text-sm">

                        File

                    </p>

                    <p className="mt-2 break-all">

                        {uploadInfo.filename}

                    </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-4">

                    <p className="text-slate-400 text-sm">

                        Chunks

                    </p>

                    <p className="mt-2 text-indigo-400">

                        {uploadInfo.chunks}

                    </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-4">

                    <p className="text-slate-400 text-sm">

                        Size

                    </p>

                    <p className="mt-2">

                        {uploadInfo.size}

                    </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-4">

                    <p className="text-slate-400 text-sm">

                        Uploaded

                    </p>

                    <p className="mt-2">

                        {uploadInfo.time}

                    </p>

                </div>

            </div>

        </div>

    );

}