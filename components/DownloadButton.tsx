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
        <div className="inline-flex items-center">
          <svg
            className="mr-1 h-4 w-4 md:h-6 md:w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4q.425 0 .713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.712T19 15q.425 0 .713.288T20 16v2q0 .825-.587 1.413T18 20z"
            />
          </svg>
          <span>{t("download")}</span>
        </div>
      </button>
    </div>
  );
};

export default DownloadButton;
