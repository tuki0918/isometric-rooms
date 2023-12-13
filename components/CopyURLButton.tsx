"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const CopyURLButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const t = useTranslations("CopyURLButton");

  const copyURLToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={() => void copyURLToClipboard()}
      className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100 md:text-base"
    >
      {isCopied ? (
        <>
          <svg
            className="mr-1 inline-block h-4 w-4 text-green-500 md:h-6 md:w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275z"
            />
          </svg>
          {t("copied")}
        </>
      ) : (
        <>
          <svg
            className="mr-1 inline-block h-4 w-4 text-gray-500 md:h-6 md:w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 17q-2.075 0-3.537-1.463T2 12q0-2.075 1.463-3.537T7 7h3q.425 0 .713.288T11 8q0 .425-.288.713T10 9H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h3q.425 0 .713.288T11 16q0 .425-.288.713T10 17zm2-4q-.425 0-.712-.288T8 12q0-.425.288-.712T9 11h6q.425 0 .713.288T16 12q0 .425-.288.713T15 13zm5 4q-.425 0-.712-.288T13 16q0-.425.288-.712T14 15h3q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-3q-.425 0-.712-.288T13 8q0-.425.288-.712T14 7h3q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17z"
            />
          </svg>
          {t("copy")}
        </>
      )}
    </button>
  );
};

export default CopyURLButton;
