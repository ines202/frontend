import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa6";
import Image from "next/image";
import { useUploadFiles } from "@/api/upload";

interface IProps {
  uploadedImageURL: (imageURL: string) => void;
}

const ImageUpload = ({ uploadedImageURL }: IProps) => {
  const [imageURL, setImageURL] = useState<string | null>(null);

  // Mutations
  const { mutateAsync: uploadFiles } = useUploadFiles();

  // Handlers
  const handleUploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files) return;
    const myFiles = Array.from(e.target.files);
    const { files } = await uploadFiles(myFiles);
    console.log("files: ", files);
    setImageURL(files[0].path);
    uploadedImageURL(files[0].path);
  };

  return (
    <div>
      <div
        id="ImageUpload
    "
        className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5"
      >
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
          onChange={handleUploadFiles}
        />
        <div className="flex flex-col items-center justify-center space-y-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
            <FaUpload />
          </span>
          <p>
            <span className="text-primary">Click to upload</span> or drag and
            drop
          </p>
          <p className="mt-1.5">PNG or JPG</p>
          <p>(max, 800 X 800px)</p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div className="relative h-20 w-20 rounded-full border-2 border-purple-500 drop-shadow-2">
          {imageURL && (
            <Image
              src={imageURL}
              width={80}
              height={80}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              alt="profile"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
