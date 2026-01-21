
import React, { useState } from 'react';
import { Stay } from '../types';

interface StayDetailScreenProps {
  stay: Stay;
  onBack: () => void;
}

const StayDetailScreen: React.FC<StayDetailScreenProps> = ({ stay, onBack }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const gallery = stay.gallery || [stay.image];
  
  const amenities = stay.amenities || ['wifi', 'ac_unit', 'local_parking'];

  return (
    <div className="flex flex-col h-full bg-background-dark overflow-y-auto no-scrollbar animate-in slide-in-from-right-10 duration-500">
      {/* Hero Gallery Area */}
      <div className="relative h-[55vh] flex-shrink-0">
        <div className="w-full h-full overflow-hidden">
          {gallery.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === activeImageIdx ? 'opacity-100' : 'opacity-0'}`}
              alt={`${stay.name} - image ${idx + 1}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/20"></div>
        
        {/* Gallery Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {gallery.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveImageIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeImageIdx ? 'w-6 bg-primary shadow-[0_0_8px_rgba(0,224,239,0.8)]' : 'w-1.5 bg-white/40'}`}
            />
          ))}
        </div>

        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-30">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full glass-circle flex items-center justify-center text-slate-900 shadow-xl active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined font-bold">arrow_back</span>
          </button>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full glass-circle flex items-center justify-center text-slate-900 shadow-xl active:scale-90">
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
            <button className="w-10 h-10 rounded-full glass-circle flex items-center justify-center text-pink-500 shadow-xl active:scale-90">
              <span className="material-symbols-outlined text-xl">favorite</span>
            </button>
          </div>
        </div>

        {/* Content Heading Overlay */}
        <div className="absolute bottom-20 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-primary/90 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
              {stay.type}
            </div>
            <div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
               <span className="material-symbols-outlined text-[10px] text-yellow-500 fill-current">star</span>
               <span className="text-[10px] font-black text-slate-900">{stay.rating}</span>
            </div>
          </div>
          <h2 className="text-4xl font-black text-white tracking-tighter drop-shadow-2xl">{stay.name}</h2>
        </div>
      </div>

      <div className="px-6 -mt-10 relative z-20 space-y-8 pb-40">
        {/* Quick Info Card */}
        <section className="bg-white rounded-[32px] p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">距离最近路段</span>
             <p className="text-sm font-black text-slate-800 mt-1">1.2km • 斑斓海岸段</p>
          </div>
          <button className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group active:scale-90 transition-all">
             <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">near_me</span>
          </button>
        </section>

        {/* Amenities section */}
        <section>
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">房源设施 • AMENITIES</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-50 shadow-sm flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-2xl">{item}</span>
                </div>
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">
                  {item.replace(/_/g, ' ')}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Description Section */}
        <section>
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">详情介绍</h3>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            {stay.description || '暂无详细描述'}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {stay.tags.map((tag, idx) => (
               <span key={idx} className="text-[10px] font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-xl border border-primary/10">#{tag}</span>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-slate-900 rounded-[32px] p-6 text-white overflow-hidden relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-[11px] font-black text-primary uppercase tracking-widest mb-4">地理位置 • LOCATION</h3>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">location_on</span>
              </div>
              <p className="text-sm font-bold text-white/90 leading-tight">
                {stay.locationDesc || '象山县〇号公路沿线'}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-2xl border-t border-slate-100 z-[110]">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex flex-col">
             <div className="flex items-baseline gap-1">
               <span className="text-2xl font-black text-slate-900">{stay.price.split(' ')[1]}</span>
               <span className="text-[10px] font-black text-slate-400 uppercase">/ night</span>
             </div>
             <p className="text-[9px] font-bold text-primary italic mt-0.5">即将满房，请尽快预定</p>
          </div>
          <button className="bg-cyan-blue-gradient text-white px-10 py-4 rounded-[24px] font-black text-sm shadow-xl shadow-primary/20 active:scale-95 transition-all">
             立即预定 • BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayDetailScreen;
