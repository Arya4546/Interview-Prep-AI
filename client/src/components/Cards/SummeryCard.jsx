import React from 'react';
import { LuTrash2 } from 'react-icons/lu';
import { getInitials } from '../../utils/helper';

const SummeryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      className='relative bg-white border border-gray-200 rounded-xl p-2 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group'
      onClick={onSelect}
    >
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

      <div
        className='relative rounded-lg p-4 transition-transform duration-300 group-hover:scale-[1.01]'
        style={{
          background: colors?.bgcolor || '#E8F7F2', 
        }}
      >
        <div className='flex items-start'>
          <div className='flex-shrink-0 w-12 h-12 bg-white rounded-md flex items-center justify-center mr-4 shadow-sm border border-gray-200'>
            <span className='text-lg font-semibold text-black'>
              {getInitials(role)}
            </span>
          </div>

          <div className='flex-grow'>
            <h2 className='text-[17px] font-semibold text-black mb-1'>{role}</h2>
            <p className='text-xs text-gray-700'>{topicsToFocus}</p>
          </div>
        </div>

        <button
          className='hidden group-hover:flex items-center gap-2 text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 hover:bg-rose-100 transition absolute top-2 right-2'
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <LuTrash2 size={14} />
        </button>
      </div>

      <div className='px-3 pb-3 relative'>
        <div className='flex flex-wrap items-center gap-2 mt-4'>
          <div className='text-[10px] font-medium text-gray-800 px-3 py-1 border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition'>
            Experience: {experience} {experience === 1 ? 'Year' : 'Years'}
          </div>
          <div className='text-[10px] font-medium text-gray-800 px-3 py-1 border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition'>
            {questions} Q&A
          </div>
          <div className='text-[10px] font-medium text-gray-800 px-3 py-1 border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition'>
            Last Updated: {lastUpdated}
          </div>
        </div>
        <p className='text-[12px] text-gray-600 font-normal mt-3'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default SummeryCard;
