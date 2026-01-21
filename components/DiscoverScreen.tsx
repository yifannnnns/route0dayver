
import React from 'react';
import { ROAD_SEGMENTS, ROAD_BOOKS, ROAD_STAYS } from '../constants';
import { RoadBook, RoadSegment, Stay } from '../types';

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

interface DiscoverScreenProps {
  onRoadBookClick: (book: RoadBook) => void;
  onRoadSegmentClick: (segment: RoadSegment) => void;
  onStationClick: () => void;
  onStayAllClick: () => void;
  onStayClick: (stay: Stay) => void;
}

const DiscoverScreen: React.FC<DiscoverScreenProps> = ({ 
  onRoadBookClick, 
  onRoadSegmentClick, 
  onStationClick,
  onStayAllClick,
  onStayClick
}) => {
  const featuredSegment = ROAD_SEGMENTS.find(s => s.id === 'rs1');
  const otherSegments = ROAD_SEGMENTS.filter(s => s.id !== 'rs1');

  // Only show first 4 stays on the home discover screen
  const homeStays = ROAD_STAYS.slice(0, 4);

  const convenienceServices = [
    { name: '驿站', icon: 'storefront', action: onStationClick },
    { name: '补给', icon: 'local_mall' },
    { name: '维修', icon: 'build' },
    { name: '充电', icon: 'ev_station' },
    { name: '医疗', icon: 'medical_services' },
  ];

  const sports = [
    { name: '海上帆船', icon: 'sailing', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&w=400' },
    { name: '环岛骑行', icon: 'directions_bike', image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&w=400' },
    { name: '冲浪体验', icon: 'surfing', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&w=400' },
    { name: '海边露营', icon: 'camping', image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=400' },
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto no-scrollbar pb-32 animate-in fade-in duration-700">
      {/* Header section adjusted to match HubScreen style */}
      <div className="px-6 pt-4 mb-8">
        <h1 className="text-3xl font-black tracking-tighter text-slate-900">发现</h1>
        <p className="text-slate-500 text-sm font-medium italic">漫游〇号公路，发现不期而遇的惊喜</p>
      </div>

      {/* 1. 十大特色环线 */}
      <section className="mb-8">
        <div className="px-6 flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900">
            <RouteZeroIcon className="w-6 h-6 text-[#06ddec] drop-shadow-[0_2px_8px_rgba(6,221,236,0.3)]" />
            十大特色环线
          </h2>
        </div>
        
        {featuredSegment && (
          <div className="px-6 mb-6">
            <div 
              onClick={() => onRoadSegmentClick(featuredSegment)}
              className="rounded-[32px] overflow-hidden relative shadow-xl border border-white transition-all h-64 shadow-primary/20 ring-2 ring-primary/20 cursor-pointer active:scale-[0.98]"
            >
              <img src={featuredSegment.image} className="w-full h-full object-cover" alt={featuredSegment.name} />
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-12 opacity-40">
                 <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path 
                      d={featuredSegment.pathData || "M10 50 Q 50 10, 90 50 T 10 50"} 
                      fill="none" 
                      stroke="#06ddec" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      className="route-glow"
                    />
                 </svg>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-5 left-6 right-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white font-black text-2xl mb-1 leading-tight">
                      {featuredSegment.name}
                    </p>
                    <p className="text-white/90 text-sm font-bold mb-3 italic drop-shadow-sm">
                      {featuredSegment.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#06ddec] text-sm">distance</span>
                      <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider">{featuredSegment.length}</p>
                      <span className="w-1 h-1 rounded-full bg-white/30 mx-1"></span>
                      <span className="material-symbols-outlined text-[#06ddec] text-sm">schedule</span>
                      <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider">{featuredSegment.duration}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md border border-primary/50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-5 left-6 bg-[#06ddec] text-slate-900 px-3 py-1 rounded-full shadow-lg">
                <p className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse"></span>
                  首先上线
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="px-6 flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {otherSegments.map(s => (
            <div key={s.id} className="flex-shrink-0 flex flex-col items-center gap-1.5 opacity-40 grayscale cursor-not-allowed group">
              <div className="w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center overflow-hidden relative transition-all group-hover:scale-105">
                 <img src={s.image} className="w-full h-full object-cover" alt={s.name} />
                 <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[12px] text-white/90 font-bold">lock</span>
                 </div>
              </div>
              <span className="text-[8px] font-black text-slate-400 whitespace-nowrap tracking-tight uppercase">{s.name.replace('段', '')}</span>
            </div>
          ))}
          <div className="flex-shrink-0 w-8 h-12 flex items-center justify-center">
             <span className="material-symbols-outlined text-slate-300 text-sm">more_horiz</span>
          </div>
        </div>
      </section>

      {/* 2. 路书推荐 */}
      <section className="mb-8 px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900">
            <span className="material-symbols-outlined text-[#06ddec]">menu_book</span>
            路书推荐
          </h2>
          <div className="flex gap-2">
            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">官方</span>
            <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-bold">小众</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {ROAD_BOOKS.map(book => (
            <div 
              key={book.id} 
              onClick={() => onRoadBookClick(book)}
              className="flex gap-4 p-3 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 transition-all cursor-pointer group active:scale-[0.98] shadow-sm hover:shadow-xl"
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative">
                <img src={book.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <h3 className="text-sm font-bold mb-1 text-slate-900 group-hover:text-primary transition-colors">{book.title}</h3>
                  <p className="text-[10px] text-slate-400">作者：{book.author}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`self-start text-[9px] font-black uppercase tracking-widest ${book.type === 'official' ? 'text-[#06ddec]' : 'text-secondary'}`}>
                    {book.type === 'official' ? 'Official Guide' : 'Deep Niche'}
                  </span>
                  <span className="material-symbols-outlined text-[#06ddec] text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 便民服务 */}
      <section className="mb-8 px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900">
            <span className="material-symbols-outlined text-[#06ddec]">support_agent</span>
            便民服务
          </h2>
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">提供全方位保障</span>
        </div>
        
        <div className="grid grid-cols-5 gap-3">
          {convenienceServices.map((service, idx) => (
            <div 
              key={idx} 
              onClick={service.action}
              className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 bg-white group-hover:border-primary/20 transition-all">
                <span className="material-symbols-outlined text-xl text-slate-600 group-hover:text-[#06ddec] transition-colors">{service.icon}</span>
              </div>
              <span className="text-[10px] font-bold text-slate-500 group-hover:text-[#06ddec] transition-colors">{service.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 特色住宿 */}
      <section className="mb-8 px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900">
            <span className="material-symbols-outlined text-[#06ddec]">bed</span>
            特色住宿
          </h2>
          <button 
            onClick={onStayAllClick}
            className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-[#06ddec] transition-colors"
          >
            查看全部
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {homeStays.map(stay => (
            <div 
              key={stay.id} 
              onClick={() => onStayClick(stay)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 group cursor-pointer hover:border-primary/40 transition-all shadow-md hover:shadow-xl"
            >
              <div className="h-32 relative overflow-hidden">
                <img src={stay.image} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt={stay.name} />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-1.5 py-0.5 rounded-lg flex items-center gap-1 shadow-sm">
                   <span className="material-symbols-outlined text-[10px] text-yellow-500 fill-current">star</span>
                   <span className="text-[9px] font-black text-slate-900">{stay.rating}</span>
                </div>
                <div className="absolute bottom-2 left-2 bg-[#06ddec] text-slate-900 px-2 py-0.5 rounded-lg text-[8px] font-black uppercase shadow-sm">
                  {stay.type === 'camping' ? '露营' : stay.type === 'hotel' ? '酒店' : stay.type === 'bnb' ? '民宿' : '青旅'}
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-bold mb-1 line-clamp-1 text-slate-900 group-hover:text-[#06ddec] transition-colors">{stay.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#06ddec] text-[10px] font-black">{stay.price}</span>
                  <div className="flex gap-1">
                    {stay.tags.slice(0, 1).map((tag, idx) => (
                      <span key={idx} className="text-[8px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-md">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 户外运动 */}
      <section className="mb-12 px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900">
            <span className="material-symbols-outlined text-[#06ddec]">fitness_center</span>
            户外运动
          </h2>
          <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-[#06ddec]">探索更多</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {sports.map((sport, idx) => (
            <div key={idx} className="flex-shrink-0 w-32 h-44 rounded-3xl overflow-hidden relative shadow-md group cursor-pointer active:scale-95 transition-transform">
              <img src={sport.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={sport.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex flex-col items-center text-center">
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-1 border border-white/20">
                  <span className="material-symbols-outlined text-white text-[16px]">{sport.icon}</span>
                </div>
                <span className="text-[10px] font-black text-white uppercase tracking-wider leading-tight">{sport.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DiscoverScreen;
