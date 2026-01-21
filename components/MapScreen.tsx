
import React, { useState, useEffect, useRef } from 'react';
import { POIS } from '../constants';
import { POI } from '../types';

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

const createThemedMarker = (color: string, iconPath: string) => {
  const svg = `
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <circle cx="20" cy="20" r="14" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="1" filter="url(#glow)"/>
      <circle cx="20" cy="20" r="10" fill="${color}" stroke="white" stroke-width="1.5"/>
      <path d="${iconPath}" fill="white" transform="translate(11, 11) scale(0.7)"/>
    </svg>
  `.trim();
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const ICON_PATHS = {
  scenery: "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z",
  food: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z",
  transit: "M12 2c-4.42 0-8 .5-8 4v10.5c0 .83.67 1.5 1.5 1.5h1v2c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2h4v2c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2h1c.83 0 1.5-.67 1.5-1.5V6c0-3.5-3.58-4-8-4z",
  service: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
  stay: "M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm11-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"
};

const BANLAN_ROUTE = [
  [29.580, 121.785], [29.570, 121.782], [29.560, 121.780], [29.550, 121.780],
  [29.540, 121.785], [29.530, 121.790], [29.520, 121.800], [29.510, 121.815],
  [29.500, 121.835], [29.490, 121.855], [29.480, 121.875], [29.470, 121.890]
];

const MapScreen: React.FC = () => {
  const [selectedPOI, setSelectedPOI] = useState<POI | null>(null);
  const [activeTheme, setActiveTheme] = useState<string>('all');
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const layersRef = useRef<{ markers: any, polyline: any } | null>(null);

  const themes = [
    { id: 'all', label: '全部圈子', icon: 'apps' },
    { id: 'scenery', label: '景点', icon: 'photo_camera' },
    { id: 'food', label: '餐饮', icon: 'restaurant' },
    { id: 'stay', label: '住宿', icon: 'bed' },
    { id: 'transit', label: '交通', icon: 'subway' }
  ];

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      const TMap = (window as any).TMap;
      if (!TMap) return;

      const center = new TMap.LatLng(29.5350, 121.8100);
      
      mapInstanceRef.current = new TMap.Map(mapContainerRef.current, {
        center: center,
        zoom: 12,
        pitch: 0,
        mapStyleId: 'style2', 
        viewMode: '2D',
        control: { scale: false, zoom: false }
      });

      const markerLayer = new TMap.MultiMarker({
        id: 'marker-layer',
        map: mapInstanceRef.current,
        styles: {
          'scenery': new TMap.MarkerStyle({ width: 32, height: 32, anchor: { x: 16, y: 16 }, src: createThemedMarker('#00E0EF', ICON_PATHS.scenery) }),
          'food': new TMap.MarkerStyle({ width: 32, height: 32, anchor: { x: 16, y: 16 }, src: createThemedMarker('#FFA000', ICON_PATHS.food) }),
          'transit': new TMap.MarkerStyle({ width: 32, height: 32, anchor: { x: 16, y: 16 }, src: createThemedMarker('#3B82F6', ICON_PATHS.transit) }),
          'service': new TMap.MarkerStyle({ width: 32, height: 32, anchor: { x: 16, y: 16 }, src: createThemedMarker('#10B981', ICON_PATHS.service) }),
          'stay': new TMap.MarkerStyle({ width: 32, height: 32, anchor: { x: 16, y: 16 }, src: createThemedMarker('#8B5CF6', ICON_PATHS.stay) })
        },
        geometries: []
      });

      const polylineLayer = new TMap.MultiPolyline({
        id: 'road-0-network',
        map: mapInstanceRef.current,
        styles: {
          'banlan-route': new TMap.PolylineStyle({ 
            color: '#EDB94D', 
            width: 8, 
            lineCap: 'round', 
            borderColor: 'rgba(237, 185, 77, 0.3)', 
            borderWidth: 4 
          })
        },
        geometries: [
          {
            id: 'banlan-path',
            styleId: 'banlan-route',
            paths: BANLAN_ROUTE.map(p => new TMap.LatLng(p[0], p[1]))
          }
        ]
      });

      markerLayer.on('click', (evt: any) => {
        const poi = POIS.find(p => p.id === evt.geometry.id);
        if (poi) {
          setSelectedPOI(poi);
          mapInstanceRef.current.panTo(new (window as any).TMap.LatLng(poi.lat, poi.lng));
        }
      });

      layersRef.current = { markers: markerLayer, polyline: polylineLayer };
    }
  }, []);

  useEffect(() => {
    if (layersRef.current?.markers) {
      const filteredPOIs = activeTheme === 'all' 
        ? POIS 
        : POIS.filter(poi => poi.category === activeTheme);

      const geometries = filteredPOIs.map(poi => ({
        id: poi.id,
        styleId: poi.category,
        position: new (window as any).TMap.LatLng(poi.lat, poi.lng),
        properties: { title: poi.name }
      }));

      layersRef.current.markers.setGeometries(geometries);
    }
  }, [activeTheme]);

  return (
    <div className="flex flex-col h-full bg-[#040810] relative animate-in fade-in duration-700 overflow-hidden text-slate-900">
      <div ref={mapContainerRef} className="absolute inset-0 z-0 brightness-[0.7]" />
      
      {/* 顶部标题与筛选栏 - Width restored to inset-x-0, height/spacing remains reduced */}
      <div className="absolute inset-x-0 top-0 z-50 pt-5 px-6 flex flex-col gap-4">
        <div className="flex items-center">
          <div className="text-[#06ddec] drop-shadow-[0_2px_12px_rgba(6,221,236,0.4)]">
            <RoadZeroFullLogo className="h-8 w-auto" />
          </div>
        </div>

        <div className="flex gap-2.5 overflow-x-auto no-scrollbar">
          {themes.map(theme => (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(theme.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-full text-[10px] font-black transition-all border ${
                activeTheme === theme.id 
                  ? 'bg-primary text-slate-900 border-primary shadow-[0_0_15px_rgba(0,224,239,0.5)]' 
                  : 'bg-slate-900/50 backdrop-blur-xl text-slate-300 border-white/10 shadow-lg'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{theme.icon}</span>
              {theme.label}
            </button>
          ))}
        </div>
      </div>

      {/* 底部信息卡片 */}
      <div className="absolute inset-x-0 bottom-28 z-50 px-6">
        {!selectedPOI ? (
          <div className="bg-[#0b0e1a]/90 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 flex items-center justify-between shadow-2xl">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[11px] font-black text-white/90 uppercase tracking-[0.2em]">黄避岙 · 西沪港内湾同步中</span>
              </div>
              <p className="text-[11px] text-slate-400 font-bold">漫游象山：实时同步路况与气象数据</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-white leading-none">24°C</p>
              <p className="text-[9px] font-black text-primary uppercase tracking-widest mt-1">微风</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[32px] p-6 shadow-2xl animate-in slide-in-from-bottom-10 ring-1 ring-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1 text-slate-900">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center bg-slate-100 text-primary`}>
                    <span className="material-symbols-outlined text-sm">
                      {selectedPOI.category === 'stay' ? 'bed' : selectedPOI.category === 'food' ? 'restaurant' : 'push_pin'}
                    </span>
                  </div>
                  <h3 className="font-black text-xl tracking-tight">{selectedPOI.name}</h3>
                </div>
                <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase ml-10">
                  {selectedPOI.category} • {selectedPOI.tags.join(' / ')}
                </p>
              </div>
              <button onClick={() => setSelectedPOI(null)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 hover:text-slate-600 transition-colors">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed font-medium">
               {selectedPOI.description}
            </p>
            <div className="flex gap-3">
              <button className="flex-[2] bg-cyan-blue-gradient text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-primary/30 active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-base">navigation</span> 开始导航
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapScreen;
