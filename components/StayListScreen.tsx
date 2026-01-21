
import React from 'react';
import { ROAD_STAYS } from '../constants';
import { Stay } from '../types';

interface StayListScreenProps {
  onBack: () => void;
  onStayClick: (stay: Stay) => void;
}

const StayListScreen: React.FC<StayListScreenProps> = ({ onBack, onStayClick }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark overflow-y-auto no-scrollbar pb-32 animate-in slide-in-from-right-10 duration-500">
      {/* Header section */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4 sticky top-0 bg-background-dark/80 backdrop-blur-xl z-50">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-900 shadow-sm active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined font-bold text-primary">arrow_back</span>
        </button>
        <div>
          <h2 className="text-2xl font-black tracking-tighter text-slate-900">全部特色住宿</h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-0.5">Where to Stay in Xiangshan</p>
        </div>
      </div>

      <div className="px-6 grid grid-cols-2 gap-4 pt-4">
        {ROAD_STAYS.map(stay => (
          <div 
            key={stay.id} 
            onClick={() => onStayClick(stay)}
            className="bg-white rounded-[32px] overflow-hidden border border-slate-100 group cursor-pointer hover:border-primary/40 transition-all shadow-md hover:shadow-xl"
          >
            <div className="h-36 relative overflow-hidden">
              <img src={stay.image} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt={stay.name} />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-1.5 py-0.5 rounded-lg flex items-center gap-1 shadow-sm">
                 <span className="material-symbols-outlined text-[12px] text-yellow-500 fill-current">star</span>
                 <span className="text-[10px] font-black text-slate-900">{stay.rating}</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-primary text-white px-2 py-0.5 rounded-lg text-[9px] font-black uppercase shadow-sm">
                {stay.type === 'camping' ? '露营' : stay.type === 'hotel' ? '酒店' : stay.type === 'bnb' ? '民宿' : '青旅'}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold mb-1 line-clamp-1 text-slate-900 group-hover:text-primary transition-colors">{stay.name}</h3>
              <div className="flex flex-wrap gap-1 mb-3">
                {stay.tags.map((tag, idx) => (
                  <span key={idx} className="text-[8px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-md">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-slate-50 pt-3 mt-1">
                <span className="text-primary text-xs font-black">{stay.price}</span>
                <span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer hint */}
      <div className="py-12 text-center px-8">
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em]">
          Route Zero • Selection of Unique Stays
        </p>
      </div>
    </div>
  );
};

export default StayListScreen;
