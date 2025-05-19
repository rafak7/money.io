import React from 'react';

interface IPhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

const IPhoneMockup: React.FC<IPhoneMockupProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: '300px' }}>
      {/* iPhone frame */}
      <div className="relative border-[14px] border-black rounded-[40px] h-[600px] w-full overflow-hidden shadow-xl bg-white">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-[30px] w-[180px] mx-auto bg-black rounded-b-[20px] flex items-center justify-center z-50">
          <div className="w-[10px] h-[10px] rounded-full bg-gray-600 absolute right-[40px]"></div>
          <div className="w-[50px] h-[6px] rounded-full bg-gray-800 absolute"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-gray-600 absolute left-[40px]"></div>
        </div>
        
        {/* Screen Content */}
        <div className="h-full w-full overflow-y-auto bg-gray-100 pt-[32px] px-2">
          {children}
        </div>
        
        {/* Home Bar */}
        <div className="absolute bottom-1 inset-x-0 h-[4px] w-[100px] mx-auto bg-gray-800 rounded-full"></div>
        
        {/* Side Button */}
        <div className="absolute right-[-14px] top-[100px] h-[60px] w-[3px] bg-gray-700 rounded-r-sm"></div>
        
        {/* Volume Buttons */}
        <div className="absolute left-[-14px] top-[100px] h-[35px] w-[3px] bg-gray-700 rounded-l-sm"></div>
        <div className="absolute left-[-14px] top-[150px] h-[35px] w-[3px] bg-gray-700 rounded-l-sm"></div>
      </div>
    </div>
  );
};

export default IPhoneMockup; 