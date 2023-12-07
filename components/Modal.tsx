import { FC } from "react";

const Modal: FC<{
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="m-4 w-full max-w-screen-lg">
        <div className="mt-2">{children}</div>
        {onClose && (
          <div className="my-8 flex flex-row items-center justify-center">
            <button
              onClick={onClose}
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100 md:text-base"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
