import { createPortal } from "react-dom";

interface PopupProps {
    onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ onClose }) => {
    return createPortal(
        <div className="fixed inset-0 z-50 bg-white dark:bg-black">
            <div className="bg-white dark:bg-gray-900 p-6 w-[100vw] h-[100vh]">
                <h2 className="text-lg font-bold mb-4">Welcome to Home Page</h2>
                <p>This is a special popup for the home page only.</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>,
        document.body // This renders the popup outside the normal DOM hierarchy
    );
};