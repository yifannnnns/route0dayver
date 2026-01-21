
import React from 'react';

interface HeaderProps {
  location: string;
  onSearch: () => void;
  onNotify: () => void;
}

const RoadZeroFullLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg 
    viewBox="0 0 376.99 90.5" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="_图层_1-2" data-name="图层 1">
      <g>
        <path fill="currentColor" d="M0,45.15C0,20.91,19.47,1.53,43.91,1.53s43.63,19.38,43.63,43.63-19.38,43.91-43.63,43.91S0,69.59,0,45.15ZM74.17,45.15c0-16.8-13.46-30.26-30.26-30.26s-30.55,13.46-30.55,30.26,13.56,30.55,30.55,30.55,30.26-13.56,30.26-30.55ZM78.47,30.64c1.34-.86,2.2-3.25,1.15-4.77l-.95-1.81c-.95-1.72-3.34-2.29-4.87-1.43-1.53,1.05-2.2,3.25-1.24,4.87l1.05,2c.86,1.43,3.25,2.1,4.87,1.15Z"/>
        <path fill="currentColor" d="M184.15,50.6h-57.28v5.35h27.97c8.88,0,17.28,8.31,17.28,17.28s-8.4,17.28-17.28,17.28h-40.38v-11.46h40.38c2.58,0,5.82-3.25,5.82-5.82s-3.25-5.82-5.82-5.82h-40.38v-16.8h-20.05v-11.93h89.74v11.93ZM106.16,17.57c0-9.07,8.5-17.57,17.47-17.57h31.22c8.97,0,17.57,8.5,17.57,17.57s-8.59,17.47-17.57,17.47h-31.22c-8.97,0-17.47-8.5-17.47-17.47ZM160.95,17.57c0-2.77-3.44-6.11-6.11-6.11h-31.22c-2.67,0-6.01,3.34-6.01,6.11s3.34,6.01,6.01,6.01h31.22c2.67,0,6.11-3.34,6.11-6.01Z"/>
        <path fill="currentColor" d="M212.79,0h12.89c0,27.78-16.32,50.5-37.71,50.5v-12.89c13.17,0,24.82-16.23,24.82-37.61ZM227.3,36.37h12.89c0,18.81-10.69,33.22-23.39,39.04h24.92c-.29-1.05-.38-2.2-.38-3.25,0-8.21,7.54-15.75,15.75-15.75s15.75,7.54,15.75,15.75-7.54,15.66-15.75,15.66h-52.31v-22.53c10.02,0,22.53-11.74,22.53-28.93ZM245.82,0h12.89c0,21.38,11.55,37.61,24.72,37.61v12.89c-21.38,0-37.61-22.72-37.61-50.5ZM261.38,72.17c0-1.91-2.39-4.3-4.3-4.3s-4.3,2.39-4.3,4.3c0,1.72,2.48,4.2,4.3,4.2s4.3-2.48,4.3-4.2Z"/>
        <path fill="currentColor" d="M297.85,38.38v33.79c0,5.54.76,6.97,3.82,7.26v-46.59c-7.73-1.05-14.32-8.31-14.32-16.13,0-8.4,7.73-16.32,16.23-16.32h6.78c8.5,0,16.32,7.92,16.32,16.32,0,7.83-6.68,15.08-14.42,16.13v11.07h11.07v10.6h-11.07v24.92h11.07v10.6h-20.43c-8.97,0-15.66-4.39-15.66-17.85v-33.79h10.6ZM316.08,16.71c0-2.48-3.15-5.73-5.73-5.73h-6.78c-2.58,0-5.63,3.25-5.63,5.73s3.05,5.63,5.63,5.63h6.78c2.58,0,5.73-3.05,5.73-5.63ZM326.2,71.98c0-9.36,8.69-18.14,18.04-18.14h12.41c9.36,0,18.14,8.78,18.14,18.14s-8.78,18.04-18.14,18.04h-12.41c-9.36,0-18.04-8.69-18.04-18.04ZM328.49,20.33V.1h10.6v5.06l33.89.1c2,13.56-3.91,25.68-12.98,34.56,6.01,2.58,12.22,4.1,16.99,4.1v10.6c-7.45,0-17.28-2.67-26.25-7.45-7.54,4.68-16.04,7.45-23.58,7.45v-10.6c4.3,0,9.07-1.24,13.65-3.44-5.63-4.68-10.12-10.41-12.12-16.9h11.46c2.1,4.01,5.82,7.73,10.12,10.79,5.82-4.96,10.41-11.36,11.93-18.52l-23.1-.1v4.58h-10.6ZM364.2,71.98c0-3.44-4.11-7.54-7.54-7.54h-12.41c-3.44,0-7.45,4.1-7.45,7.54s4.01,7.45,7.45,7.45h12.41c3.44,0,7.54-4.01,7.54-7.45Z"/>
      </g>
    </g>
  </svg>
);

const Header: React.FC<HeaderProps> = ({ location, onSearch, onNotify }) => {
  return (
    <header className="flex items-center justify-between px-6 pt-6 pb-2 bg-transparent z-50">
      <div className="flex items-center gap-3">
        {location && (
          <>
            <span className="font-extrabold text-xl tracking-tighter text-slate-900">{location}</span>
            <div className="h-4 w-[1px] bg-slate-300 mx-1"></div>
          </>
        )}
        <div className="text-[#06ddec] drop-shadow-[0_2px_12px_rgba(6,221,236,0.4)]">
           <RoadZeroFullLogo className="h-7 w-auto" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={onSearch}
          className="w-7 h-7 rounded-full bg-white backdrop-blur-md border border-slate-200 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors"
        >
          <span className="material-symbols-outlined text-[#06ddec] text-base">search</span>
        </button>
        <button 
          onClick={onNotify}
          className="w-7 h-7 rounded-full bg-white backdrop-blur-md border border-slate-200 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors"
        >
          <span className="material-symbols-outlined text-[#06ddec] text-base">notifications</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
