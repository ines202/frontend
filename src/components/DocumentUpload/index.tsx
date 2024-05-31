import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa6";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { UploadFolders, useUploadFiles } from "@/api/upload";

interface IProps {
  uploadedDocumentURL: (documentURL: string) => void;
  uploadFolder: (typeof UploadFolders)[keyof typeof UploadFolders];
  hideSuccess?: boolean;
  documentUploaded: boolean;
  setDocumentUploaded: (uploaded: boolean) => void;
}

const DocumentUpload = ({
  uploadedDocumentURL,
  uploadFolder,
  hideSuccess = false,
  documentUploaded,
  setDocumentUploaded
}: IProps) => {
  const [documentURL, setDocumentURL] = useState<string | null>(null);

  // Mutations
  const { mutateAsync: uploadFiles } = useUploadFiles();

  // Handlers
  const handleUploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files) return;
    const myFiles = Array.from(e.target.files);
    const { files } = await uploadFiles({
      files: myFiles,
      folder: uploadFolder,
    });
    setDocumentURL(files[0].path);
    uploadedDocumentURL(files[0].path);
    setDocumentUploaded(true); // Update the state to reflect that a document has been uploaded
  };

  return (
    <div>
      <div
        id="DocumentUpload"
        className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4"
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
          onChange={handleUploadFiles}
          required
        />
        <div className="flex flex-col items-center justify-center space-y-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
            <FaUpload />
          </span>
          <p className="text-sm">
            <span className="text-primary">Click to upload</span> your document
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-sm text-red">
          The document must contain proof to activate your account.
        </p>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
          {documentURL && !hideSuccess && (
            <>
              <p className="text-base font-semibold">Document uploaded</p>
              <HiOutlineDocumentArrowUp className="text-2xl" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
