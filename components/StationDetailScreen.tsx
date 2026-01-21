
import React from 'react';
import { POI } from '../types';

interface StationDetailScreenProps {
  station: POI;
  onBack: () => void;
}

const StationDetailScreen: React.FC<StationDetailScreenProps> = ({ station, onBack }) => {
  const isLevel2 = station.tags.some(t => t.includes('二级'));
  
  const getFeatures = () => {
    if (isLevel2) {
      return [
        { icon: 'local_parking', label: '机动车停车场' },
        { icon: 'directions_bike', label: '自行车租赁' },
        { icon: 'wc', label: '基础卫生间' }
      ];
    }
    return [
      { icon: 'delete', label: '垃圾桶' },
      { icon: 'park', label: '景观小品' }
    ];
  };

  const features = getFeatures();

  return (
    <div className="flex flex-col h-full bg-background-dark overflow-y-auto no-scrollbar pb-32 animate-in slide-in-from-right-10 duration-500">
      {/* Hero Section */}
      <div className="relative h-[45vh] flex-shrink-0">
        <img 
          src={station.image || 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=800'} 
          className="w-full h-full object-cover" 
          alt={station.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
        
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 w-10 h-10 rounded-full glass-circle flex items-center justify-center text-slate-900 z-50 shadow-xl active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined font-bold">arrow_back</span>
        </button>

        <div className="absolute bottom-10 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${isLevel2 ? 'bg-orange-500 text-white' : 'bg-blue-500 text-white'}`}>
              {station.tags.find(t => t.includes('级'))}
            </div>
            <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white border border-white/30">
               斑斓海岸段
            </div>
          </div>
          <h2 className="text-4xl font-black text-white tracking-tighter drop-shadow-2xl">{station.name}</h2>
        </div>
      </div>

      <div className="px-6 -mt-4 relative z-20 space-y-8">
        {/* Features / Functions Section */}
        <section className="bg-white rounded-[32px] p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">settings_suggest</span>
            驿站功能配置 • AMENITIES
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                  <span className="material-symbols-outlined text-lg">{feature.icon}</span>
                </div>
                <span className="text-[11px] font-black text-slate-700">{feature.label}</span>
              </div>
            ))}
            {/* Added a consistent one for both */}
            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                  <span className="material-symbols-outlined text-lg">bolt</span>
                </div>
                <span className="text-[11px] font-black text-slate-700">移动补给</span>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="px-2">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">详情介绍</h3>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            {station.description} 驿站不仅是过路者的休憩之所，更是〇号公路文化的展示窗口。在这里，您可以体验象山独特的海岸美学。
          </p>
        </section>

        {/* Location Section */}
        <section className="bg-slate-900 rounded-[32px] p-6 text-white overflow-hidden relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-[11px] font-black text-primary uppercase tracking-widest mb-4">地理位置 • LOCATION</h3>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white/90">象山县黄避岙乡斑斓海岸段</p>
                <p className="text-[10px] text-white/50 font-medium mt-1">
                  经度: {station.lng.toFixed(4)} / 纬度: {station.lat.toFixed(4)}
                </p>
              </div>
            </div>
            <button className="w-full bg-primary text-slate-900 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all">
              <span className="material-symbols-outlined">near_me</span>
              一键开启导航
            </button>
          </div>
        </section>

        {/* Standard Info */}
        <div className="pt-4 pb-12 text-center">
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em]">
             Route Zero • Standardized Service Station
          </p>
        </div>
      </div>
    </div>
  );
};

export default StationDetailScreen;
