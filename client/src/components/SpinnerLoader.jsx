import React from 'react';

const SpinnerLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerLoader;
