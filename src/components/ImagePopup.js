import React, { useEffect } from "react";
import toast from "react-hot-toast";

const ImagePopup = ({ image, onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleDownload = async () => {
    try {
      const response = await fetch(image.urls.full); // Fetch the full size image URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'react-image-generator.jpg');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      
      toast.success("Image downloaded successfully");
    } catch (error) {
      console.error('Error downloading image:', error);
      toast.error("Failed to download image");
    }
  };

  return (
    <div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center z-50 overflow-auto"
    >
      <div className="
      bg-white
      p-6 rounded-lg 
      shadow-lg
      "
      >
        <div className="
        flex
        justify-center
        items-center
        mb-4

        ">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={handleDownload}
          >
            Download
          </button> 
          <button
            className="ml-8 bg-red-500 hover:bg-red-700 text-white transition duration-300 ease-in-out rounded p-2"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="text-center mt-4 h-3/4">
          <img src={image.urls.small} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;

