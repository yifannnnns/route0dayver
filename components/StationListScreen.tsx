
import React, { useState, useEffect, useRef } from 'react';
import { POIS } from '../constants';
import { POI } from '../types';

interface StationListScreenProps {
  onBack: () => void;
  onStationClick: (station: POI) => void;
}

const StationListScreen: React.FC<StationListScreenProps> = ({ onBack, onStationClick }) => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  // 过滤出斑斓海岸段的指定驿站（塔头旺、沪港、海口村）
  const banlanStations = POIS.filter(poi => 
    poi.category === 'service' && 
    (poi.name.includes('塔头旺') || poi.name.includes('沪港') || poi.name.includes('海口村'))
  );

  // 初始化与销毁地图
  useEffect(() => {
    let map: any = null;

    if (viewMode === 'map' && mapContainerRef.current) {
      const TMap = (window as any).TMap;
      if (TMap) {
        const center = new TMap.LatLng(29.5350, 121.8100);
        
        map = new TMap.Map(mapContainerRef.current, {
          center: center,
          zoom: 13,
          mapStyleId: 'style1', 
          control: { scale: false, zoom: false }
        });

        mapInstanceRef.current = map;

        // 创建标记图层
        new TMap.MultiMarker({
          id: 'station-markers',
          map: map,
          styles: {
            'station-style': new TMap.MarkerStyle({
              width: 34,
              height: 42,
              anchor: { x: 17, y: 42 },
              src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker_blue.png'
            })
          },
          geometries: banlanStations.map(station => ({
            id: station.id,
            styleId: 'station-style',
            position: new TMap.LatLng(station.lat, station.lng),
            properties: { title: station.name }
          }))
        });
      }
    }

    // Cleanup: 当 viewMode 切换或组件卸载时，显式销毁地图实例
    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.destroy();
        } catch (e) {
          console.error('Map destroy error:', e);
        }
        mapInstanceRef.current = null;
      }
    };
  }, [viewMode]);

  return (
    <div className="flex flex-col h-full bg-background-dark overflow-hidden animate-in slide-in-from-right-10 duration-500">
      {/* 顶部标题栏 */}
      <div className="px-6 pt-12 pb-4 flex items-center justify-between bg-white/90 backdrop-blur-xl z-50 border-b border-slate-100/50">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-900 shadow-sm active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined font-bold text-primary">arrow_back</span>
          </button>
          <div>
            <h2 className="text-xl font-black tracking-tighter text-slate-900">驿站服务</h2>
            <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">Service Grid</p>
          </div>
        </div>

        {/* 视图切换开关 */}
        <div className="flex bg-slate-100 p-1 rounded-2xl">
          <button 
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-[10px] font-black transition-all ${viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-slate-400'}`}
          >
            <span className="material-symbols-outlined text-sm">format_list_bulleted</span>
            列表
          </button>
          <button 
            onClick={() => setViewMode('map')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-[10px] font-black transition-all ${viewMode === 'map' ? 'bg-white text-primary shadow-sm' : 'text-slate-400'}`}
          >
            <span className="material-symbols-outlined text-sm">map</span>
            地图
          </button>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden bg-background-dark">
        {/* 列表模式：直接渲染内容，确保不包含地图容器 */}
        {viewMode === 'list' && (
          <div className="absolute inset-0 overflow-y-auto no-scrollbar pb-32 px-6 pt-6 space-y-6 animate-in fade-in duration-500">
            {/* 状态指示卡片 */}
            <div className="bg-cyan-blue-gradient p-5 rounded-[28px] text-white shadow-xl shadow-primary/20 flex items-center justify-between">
              <div>
                 <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">公路服务状态</p>
                 <h3 className="text-lg font-black tracking-tight">斑斓海岸段 · 补给响应中</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                 <span className="material-symbols-outlined animate-pulse text-white">sensors</span>
              </div>
            </div>

            {/* 驿站清单 */}
            <div className="space-y-5">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">站点列表</h3>
                <span className="text-[9px] font-bold text-primary italic">详情已更新</span>
              </div>
              {banlanStations.map((station) => {
                const isLevel2 = station.tags.some(t => t.includes('二级'));
                return (
                  <div 
                    key={station.id} 
                    onClick={() => onStationClick(station)}
                    className="p-5 rounded-[28px] bg-white border border-slate-100 shadow-sm flex flex-col gap-4 group hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer active:scale-[0.98]"
                  >
                    <div className="flex items-start justify-between">
                       <div className="flex items-center gap-3">
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isLevel2 ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'}`}>
                           <span className="material-symbols-outlined text-2xl">
                             {isLevel2 ? 'villa' : 'deck'}
                           </span>
                         </div>
                         <div>
                            <h4 className="text-base font-black text-slate-900 group-hover:text-primary transition-colors">{station.name}</h4>
                            <div className={`mt-0.5 inline-block px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${isLevel2 ? 'bg-orange-500 text-white' : 'bg-blue-500 text-white'}`}>
                              {station.tags.find(t => t.includes('级'))}
                            </div>
                         </div>
                       </div>
                       <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-3">
                       <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-medium">
                         {station.description}
                       </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* 底部占位 */}
            <div className="h-20"></div>
          </div>
        )}

        {/* 地图模式：仅在 map 模式下渲染地图容器 */}
        {viewMode === 'map' && (
          <div className="absolute inset-0 animate-in fade-in duration-500">
            <div ref={mapContainerRef} className="w-full h-full" />
            
            {/* 地图悬浮提示 */}
            <div className="absolute bottom-32 left-6 right-6 z-10">
              <div className="bg-slate-900/95 backdrop-blur-2xl rounded-[28px] p-5 border border-white/10 flex items-center gap-4 shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-inner">
                  <span className="material-symbols-outlined text-2xl">explore</span>
                </div>
                <div>
                   <p className="text-white text-sm font-black tracking-tight">发现附近的补给站</p>
                   <p className="text-white/50 text-[10px] font-medium mt-0.5 uppercase tracking-widest">Explore nearby stations</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StationListScreen;
