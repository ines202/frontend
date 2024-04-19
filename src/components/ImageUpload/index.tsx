import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa6";
import Image from "next/image";
import { UploadFolders, useUploadFiles } from "@/api/upload";

interface IProps {
  uploadedImageURL: (imageURL: string) => void;
  uploadFolder: (typeof UploadFolders)[keyof typeof UploadFolders];

}

const ImageUpload = ({ uploadedImageURL, uploadFolder }: IProps) => {
  const [imageURL, setImageURL] = useState<string | null>(null);

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
    console.log("files: ", files);
    setImageURL(files[0].path);
    uploadedImageURL(files[0].path);
  };

  return (
    <div>
      <div
        id="ImageUpload"
        className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4"
      >
        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
          onChange={handleUploadFiles}
        />
        <div className="flex flex-col items-center justify-center space-y-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
            <FaUpload />
          </span>
          <p className="text-sm">
            <span className="text-primary">Click to upload</span> profile
            picture (PNG or JPG)
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center">
        {imageURL && (
          <div className="relative h-20 w-20 rounded-full border-2 border-purple-500 drop-shadow-2">
            <Image
              src={imageURL}
              fill
              sizes="100%"
              className="absolute rounded-full object-cover p-1"
              alt="profile"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
