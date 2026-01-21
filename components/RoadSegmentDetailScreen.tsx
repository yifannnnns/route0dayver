
import React from 'react';
import { RoadSegment } from '../types';

interface RoadSegmentDetailScreenProps {
  segment: RoadSegment;
  onBack: () => void;
}

const RoadSegmentDetailScreen: React.FC<RoadSegmentDetailScreenProps> = ({ segment, onBack }) => {
  // Check if this is the "Banlan Coast" segment to apply the special theme color
  const isBanlanCoast = segment.id === 'rs1';
  const themeColor = isBanlanCoast ? '#EDB94D' : '#00E0EF';
  const themeRgb = isBanlanCoast ? '237, 185, 77' : '0, 224, 239';
  const gradient = isBanlanCoast 
    ? 'linear-gradient(135deg, #EDB94D 0%, #D97706 100%)' 
    : 'linear-gradient(135deg, #00E0EF 0%, #3B82F6 100%)';

  return (
    <div className="flex flex-col h-full bg-background-dark overflow-y-auto no-scrollbar pb-32 animate-in slide-in-from-right-10 duration-500">
      {/* Hero Atmosphere Area */}
      <div className="relative h-[60vh] flex-shrink-0">
        <img 
          src={segment.image} 
          className="w-full h-full object-cover" 
          alt={segment.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
        
        {/* Navigation Overlays */}
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 w-10 h-10 rounded-full glass-circle flex items-center justify-center text-slate-900 z-50 shadow-xl active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined font-bold">arrow_back</span>
        </button>

        <div className="absolute bottom-12 left-6 right-6">
          <div className="flex items-center gap-2 mb-3">
             <span className="w-8 h-[2.5px]" style={{ backgroundColor: themeColor }}></span>
             <span className="text-xs font-black uppercase tracking-[0.3em] drop-shadow-sm" style={{ color: themeColor }}>Route Zero</span>
          </div>
          <h2 className="text-5xl font-black mb-2 leading-tight tracking-tighter text-white drop-shadow-2xl">{segment.name}</h2>
          <p className="text-xl font-bold text-white/90 italic mb-6 drop-shadow-lg">{segment.description}</p>
          
          {/* Quick Stats Chips */}
          <div className="flex gap-3">
             <div className="bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-sm font-bold" style={{ color: themeColor }}>distance</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">{segment.length || '---'}</span>
             </div>
             <div className="bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-sm font-bold" style={{ color: themeColor }}>schedule</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">{segment.duration || '---'}</span>
             </div>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-6 relative z-20 space-y-12">
        {/* 1. Intro Content */}
        <section className="px-2">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2" style={{ color: themeColor }}>
             <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }}></span>
             特色介绍 • INTRODUCTION
          </h3>
          <p className="text-base text-slate-700 leading-relaxed font-medium">
            {segment.fullIntro || segment.description}
          </p>
        </section>

        {/* 2. Highlights List */}
        {segment.highlights && (
          <section className="px-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2" style={{ color: themeColor }}>
               <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }}></span>
               沿途主要景点 • KEY SPOTS
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {segment.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-3xl shadow-sm hover:border-opacity-40 transition-all group" style={{ borderColor: i === 0 ? themeColor : undefined }}>
                  <span className="font-black text-xs opacity-50" style={{ color: themeColor }}>0{i+1}</span>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-opacity-100 transition-colors" style={{ color: activeThemeColor(i, themeColor) }}>{h}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Gallery Carousel */}
        {segment.gallery && (
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2 px-2" style={{ color: themeColor }}>
               <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }}></span>
               实拍氛围 • ATMOSPHERE
            </h3>
            <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2">
              {segment.gallery.map((img, i) => (
                <div key={i} className="flex-shrink-0 w-72 h-48 rounded-[32px] overflow-hidden shadow-xl border-4 border-white group">
                  <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery" />
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Action CTA */}
        <div className="pt-4 pb-12">
           <button 
             className="w-full text-white py-5 rounded-[28px] font-black text-sm shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-3"
             style={{ 
               background: gradient,
               boxShadow: `0 10px 25px rgba(${themeRgb}, 0.3)` 
             }}
           >
             <span className="material-symbols-outlined font-bold">navigation</span>
             开启导航 • START NAVIGATION
           </button>
           <p className="text-center mt-6 text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em]">
             Sustainable Tourism • Enjoy The Loop
           </p>
        </div>
      </div>
    </div>
  );
};

// Helper for hover state logic in highlights (simplified)
function activeThemeColor(index: number, color: string) {
    return index === 0 ? color : undefined;
}

export default RoadSegmentDetailScreen;
