"use client";

import { useState } from "react";

const CopyURLButton = () => {
  const [isCopied, setIsCopied] = useState(false);

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
      className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
    >
      {isCopied ? (
        <>
          <svg
            className="mr-2 inline-block h-6 w-6 text-green-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          コピーしました
        </>
      ) : (
        <>
          <svg
            className="mr-2 inline-block h-6 w-6 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          URLをコピー
        </>
      )}
    </button>
  );
};

export default CopyURLButton;
