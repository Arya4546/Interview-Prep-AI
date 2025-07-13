import React, { useState, useRef } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({
  image,
  setImage,
  preview,
  setPreview
}) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const previewLink = URL.createObjectURL(file);
      setPreviewUrl(previewLink);
      if (setPreview) setPreview(previewLink);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if (setPreview) setPreview(null);
  };

  const openFilePicker = () => inputRef.current.click();

  return (
    <div className="flex flex-col items-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div
          onClick={openFilePicker}
          className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-dashed border-amber-300 bg-amber-50 flex items-center justify-center text-amber-500 cursor-pointer shadow-sm hover:shadow-md transition hover:scale-105"
        >
          <LuUser size={38} />
          <span className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF9324] to-[#FCD760] flex items-center justify-center text-white shadow-md">
            <LuUpload size={18} />
          </span>
        </div>
      ) : (
        <div className="relative">
          <img
            src={preview || previewUrl}
            alt="Profile"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-md border-2 border-amber-200"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white shadow-md hover:scale-105 transition"
          >
            <LuTrash size={18} />
          </button>
        </div>
      )}

      <p className="text-sm text-gray-500 mt-2">
        {image ? "Tap trash to remove" : "Tap to upload your photo"}
      </p>
    </div>
  );
};

export default ProfilePhotoSelector;
