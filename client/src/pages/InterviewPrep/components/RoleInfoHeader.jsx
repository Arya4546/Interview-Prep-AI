import React from 'react'

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
}) => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[40vw] md:w-[30vw] h-full flex items-center justify-center">
        <div className="w-16 h-16 bg-lime-400 blur-[65px] animate-blob1" />
        <div className="w-16 h-16 bg-teal-400 blur-[65px] animate-blob2" />
        <div className="w-16 h-16 bg-cyan-300 blur-[45px] animate-blob3" />
        <div className="w-16 h-16 bg-fuchsia-200 blur-[65px] animate-blob1" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-6 md:px-0 py-12 pl-6">


        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-900">{role}</h2>
          <p className="text-sm text-gray-700 mt-1">{topicsToFocus}</p>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              Experience: {experience} {experience == 1 ? 'year' : 'years'}
            </span>
            <span className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              {questions} Q&A
            </span>
            <span className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              Last Updated: {lastUpdated}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoleInfoHeader
