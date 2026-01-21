
import React from 'react';
import { View } from '../types';

interface BottomNavProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onViewChange }) => {
  // Define inactive color
  const inactiveColor = 'text-indigo-950/40';

  const RouteZeroIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg 
      viewBox="0 0 607.73 607.7" 
      className={className} 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40.77,150.44c27.18-46.42,64.05-83.09,110.67-110.01C198.06,13.47,249.2,0,304.86,0s106.04,13.47,152.43,40.42c46.39,26.92,83.06,63.59,110.01,110.01,26.92,46.36,40.42,97.2,40.42,152.4s-13.5,106.84-40.42,153.42c-26.95,46.62-63.62,83.49-110.01,110.67-46.39,27.17-97.22,40.76-152.43,40.76s-106.8-13.59-153.42-40.76c-46.62-27.18-83.49-64.05-110.67-110.67C13.59,409.68,0,358.5,0,302.84s13.59-106.04,40.77-152.4M413.54,488.07c31.81-17.88,56.66-42.95,74.57-75.22,17.88-32.24,26.84-68.91,26.84-110.02s-8.95-76.87-26.84-108.68c-17.91-31.81-42.76-56.66-74.57-74.54-31.81-17.91-68.03-26.86-108.68-26.86s-77.78,8.96-110.01,26.86c-32.27,17.88-57.31,42.73-75.22,74.54-17.88,31.81-26.84,68.03-26.84,108.68s8.96,77.78,26.84,110.02c17.91,32.26,42.95,57.33,75.22,75.22,32.24,17.91,68.94,26.83,110.01,26.83s76.87-8.93,108.68-26.83M510.96,194.16c1.76,3.09,4.75,5.74,8.95,7.96,4.18,2.21,8.5,3.29,12.91,3.29s8.39-1.08,11.94-3.29c3.1-1.77,5.74-4.76,7.96-8.96,2.19-4.2,3.3-8.5,3.3-12.9,0-4-1.11-7.73-3.3-11.28l-6.62-12.59c-2.22-3.99-5.43-7.05-9.61-9.28-4.21-2.21-8.53-3.32-12.93-3.32-6.62,0-12.17,2.56-16.57,7.62-4.41,5.08-6.62,10.94-6.62,17.57,0,3.98,1.11,7.73,3.33,11.28l7.28,13.9Z"/>
    </svg>
  );

  const NavItem = ({ view, icon, label, isMain = false }: { view: View, icon: string, label: string, isMain?: boolean }) => {
    const isActive = currentView === view;

    const renderIcon = () => {
      if (icon === '〇') {
        return (
          <span className={`text-xl font-black leading-none transition-all duration-300 ${isActive ? 'text-primary' : inactiveColor}`}>
            〇
          </span>
        );
      }
      return <span className={`material-symbols-outlined text-2xl ${isActive ? 'text-primary' : inactiveColor}`}>{icon}</span>;
    };

    const renderMainIcon = () => {
      if (view === View.EXPLORE) {
        return (
          <div className="relative flex items-center justify-center -top-3">
             <div className={`transition-all duration-500 flex items-center justify-center ${
               isActive ? 'scale-125 text-primary logo-glow-active' : 'text-slate-900/40 hover:text-slate-900/60'
             }`}>
                <RouteZeroIcon className="w-11 h-11" />
             </div>
          </div>
        );
      }
      return <span className="material-symbols-outlined text-white text-3xl">{icon}</span>;
    };

    return (
      <div 
        className="flex-1 flex flex-col items-center justify-center cursor-pointer relative py-1" 
        onClick={() => onViewChange(view)}
      >
        <div className={`h-8 flex items-center justify-center mb-1 transition-all duration-300 ${isActive && !isMain ? 'scale-110' : ''}`}>
          {isMain ? renderMainIcon() : renderIcon()}
        </div>
        <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${isActive ? 'text-primary' : `${inactiveColor}`}`}>
          {label}
        </span>
        {isActive && (
          <div className="absolute bottom-[-6px] w-1.5 h-1.5 rounded-full bg-primary shadow-sm shadow-primary/40"></div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 px-6 z-[100] pointer-events-none">
      <nav className="max-w-md mx-auto pointer-events-auto bg-white/70 backdrop-blur-3xl border border-white/40 rounded-[40px] h-20 flex items-center justify-around px-4 shadow-[0_12px_48px_rgba(0,0,0,0.12)]">
        <NavItem view={View.DISCOVER} icon="〇" label="发现" />
        <NavItem view={View.TRIP} icon="calendar_month" label="日历" />
        <NavItem view={View.EXPLORE} icon="explore" label="导览" isMain />
        <NavItem view={View.HUB} icon="groups" label="广场" />
        <NavItem view={View.ME} icon="person" label="我的" />
      </nav>
    </div>
  );
};

export default BottomNav;
