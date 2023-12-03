"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";

const DownloadButton: FC<{ imageSrc: string; fileName: string }> = ({
  imageSrc,
  fileName,
}) => {
  const t = useTranslations("DownloadButton");
  const handleDownload = async () => {
    const image = await fetch(imageSrc);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center">
      <button
        className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100 md:text-base"
        onClick={() => void handleDownload()}
      >
        <div className="inline-flex items-center ">
          <svg
            className="mr-2 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>{t("download")}</span>
        </div>
      </button>
    </div>
  );
};

export default DownloadButton;
