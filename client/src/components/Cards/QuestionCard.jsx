import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from "react-icons/lu";
import AIResponsePreview from "../../pages/InterviewPrep/components/AIResponsePreview";

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight + 10);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-xl mb-4 overflow-hidden py-4 px-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100/70 group">
      <div className="flex items-start justify-between cursor-pointer">
        <div className="flex items-start gap-3.5">
          <span className="text-xs md:text-[15px] font-semibold text-gray-400 leading-[18px] select-none">
            Q
          </span>

          <h3
            className="text-xs md:text-[14px] font-medium text-gray-800 mr-0 md:mr-20 hover:text-indigo-700 transition-colors duration-200"
            onClick={toggleExpand}
          >
            {question}
          </h3>
        </div>

        <div className="flex items-center justify-end ml-4 relative">
          <div className={`flex ${isExpanded ? "md:flex" : "md:hidden group-hover:flex"} transition-opacity duration-300`}>
            <button
              className="flex items-center gap-2 text-xs text-indigo-800 font-medium bg-indigo-50 px-3 py-1 mr-2 rounded border border-indigo-50 hover:border-indigo-200 hover:bg-indigo-100 active:scale-95 transition"
              onClick={onTogglePin}
            >
              {isPinned ? <LuPinOff size={14} /> : <LuPin size={14} />}
            </button>

            <button
              className="flex items-center gap-2 text-cyan-800 px-3 py-1 mr-2 rounded border border-cyan-50 hover:border-cyan-200 hover:bg-cyan-50 active:scale-95 transition"
              onClick={() => {
                setIsExpanded(true);
                onLearnMore();
              }}
            >
              <LuSparkles size={14} />
              <span className="hidden md:block">Learn More</span>
            </button>
          </div>

          <button
            className="text-gray-400 hover:text-gray-500 cursor-pointer transition-colors"
            onClick={toggleExpand}
          >
            <LuChevronDown
              size={20}
              className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: `${height}px` }}
      >
        <div
          ref={contentRef}
          className="mt-4 text-gray-700 bg-gray-50 px-5 py-3 rounded-lg shadow-inner"
        >
          <AIResponsePreview content={answer} />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
