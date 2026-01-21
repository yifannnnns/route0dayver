
import React, { useState, useMemo } from 'react';
import { EVENTS } from '../constants';
import { RoadEvent } from '../types';

const CalendarScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'my'>('upcoming');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [bookedEvents, setBookedEvents] = useState<string[]>([]);
  const [showToast, setShowToast] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  // Monthly Calendar Logic
  const [viewDate, setViewDate] = useState(new Date(2024, 4, 1)); // Default to May 2024 for demo data
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2024, 4, 20));

  const calendarData = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    // Padding for days before the 1st
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: null, date: null, dateId: null, hasEvents: false });
    }
    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateObj = new Date(year, month, i);
      const dateId = `${(month + 1).toString().padStart(2, '0')}.${i.toString().padStart(2, '0')}`;
      const hasEvents = EVENTS.some(e => e.date === dateId);
      days.push({ day: i, date: dateObj, dateId, hasEvents });
    }
    
    // Padding for days after the end of month to complete the week
    const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
    for (let i = 1; i < 7 - lastDayOfMonth; i++) {
      days.push({ day: null, date: null, dateId: null, hasEvents: false });
    }

    return days;
  }, [viewDate]);

  // Logic to show only the selected week when collapsed
  const displayedDays = useMemo(() => {
    if (isExpanded) return calendarData;

    // Find the index of the selected date in calendarData
    const selectedIdx = calendarData.findIndex(d => 
      d.date?.toDateString() === selectedDate.toDateString()
    );

    if (selectedIdx === -1) {
      // Fallback if selected date isn't in current month view
      return calendarData.slice(0, 7);
    }

    // Determine the start of the week (multiple of 7)
    const weekStartIdx = Math.floor(selectedIdx / 7) * 7;
    return calendarData.slice(weekStartIdx, weekStartIdx + 7);
  }, [calendarData, isExpanded, selectedDate]);

  const filteredEvents = useMemo(() => {
    const dateStr = `${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}.${selectedDate.getDate().toString().padStart(2, '0')}`;
    
    let list = activeTab === 'upcoming' 
      ? EVENTS 
      : EVENTS.filter(e => bookedEvents.includes(e.id));
    
    // Filter by selected date
    list = list.filter(e => e.date === dateStr);
    
    if (activeCategory !== 'all') {
      list = list.filter(e => e.type === activeCategory);
    }
    
    return list;
  }, [activeTab, activeCategory, bookedEvents, selectedDate]);

  const changeMonth = (offset: number) => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
  };

  const handleGoToToday = () => {
    const today = new Date();
    setSelectedDate(today);
    setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
  };

  const handleBook = (e: RoadEvent) => {
    if (bookedEvents.includes(e.id)) return;
    setBookedEvents([...bookedEvents, e.id]);
    setShowToast(`预约成功：${e.title}`);
    setTimeout(() => setShowToast(null), 3000);
  };

  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  return (
    <div className="flex flex-col h-full bg-background-dark relative animate-in fade-in duration-500 overflow-hidden">
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-slate-900 text-white rounded-full font-black text-sm shadow-2xl flex items-center gap-2 animate-in slide-in-from-top-4">
          <span className="material-symbols-outlined text-base text-primary">check_circle</span>
          {showToast}
        </div>
      )}

      {/* Header Sticky Section */}
      <div className="flex-shrink-0 pt-6 bg-white/70 backdrop-blur-xl z-50 border-b border-slate-100 transition-all duration-500 ease-in-out">
        <div className="px-6 flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-black tracking-tighter text-slate-900">〇感日历</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mt-1">Roaming Calendar</p>
          </div>
          <div className="flex bg-slate-100 rounded-2xl p-1">
            <button 
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all ${activeTab === 'upcoming' ? 'bg-white text-primary shadow-sm' : 'text-slate-400'}`}
            >
              探索
            </button>
            <button 
              onClick={() => setActiveTab('my')}
              className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all ${activeTab === 'my' ? 'bg-white text-primary shadow-sm' : 'text-slate-400'}`}
            >
              我的 {bookedEvents.length > 0 && `(${bookedEvents.length})`}
            </button>
          </div>
        </div>

        {/* Monthly Calendar View */}
        <div className="px-6 pb-2 transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => changeMonth(-1)} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400">
               <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-slate-900 tracking-widest uppercase">
                {viewDate.getFullYear()}年 {viewDate.getMonth() + 1}月
              </span>
              <button 
                onClick={handleGoToToday}
                className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-md hover:bg-primary/20 transition-all active:scale-90"
              >
                今日
              </button>
            </div>
            <button onClick={() => changeMonth(1)} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400">
               <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-2 mb-2 text-center">
            {weekDays.map(d => (
              <span key={d} className="text-[10px] font-black text-slate-300 uppercase">{d}</span>
            ))}
          </div>

          <div className={`grid grid-cols-7 gap-y-1 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[300px]' : 'max-h-[44px]'}`}>
            {displayedDays.map((data, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center h-10 relative">
                {data.day && (
                  <button
                    onClick={() => data.date && setSelectedDate(data.date)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all relative z-10 ${
                      selectedDate.toDateString() === data.date?.toDateString()
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-110'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {data.day}
                    {data.hasEvents && (
                      <div className={`absolute -bottom-1 w-1 h-1 rounded-full ${selectedDate.toDateString() === data.date?.toDateString() ? 'bg-white' : 'bg-primary'}`}></div>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mt-2">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-10 h-6 flex items-center justify-center text-slate-300 hover:text-primary transition-colors"
            >
              <span className={`material-symbols-outlined text-xl transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>

        {/* Categories Chips */}
        <div className="px-6 flex gap-2 overflow-x-auto no-scrollbar pb-4 mt-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${activeCategory === cat.id ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-slate-50 border-slate-100 text-slate-400'}`}
            >
              <span className="material-symbols-outlined text-[14px]">{cat.icon}</span>
              <span className="text-[10px] font-bold">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main List */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 pt-6 space-y-6">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
             {selectedDate.getMonth() + 1}月{selectedDate.getDate()}日 的活动
           </span>
           <div className="h-[1px] flex-1 bg-slate-100"></div>
        </div>

        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Event Image */}
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={event.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={event.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-[12px] text-primary">schedule</span>
                  <span className="text-[10px] font-black text-slate-900">{event.time}</span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${event.type === 'music' ? 'bg-primary' : event.type === 'sport' ? 'bg-blue-500' : 'bg-pink-500'}`}></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{event.type}</span>
                  </div>
                  <p className="text-primary font-black text-base">{event.price}</p>
                </div>
                <h3 className="text-lg font-black mb-2 leading-tight tracking-tight text-slate-900 group-hover:text-primary transition-colors">{event.title}</h3>
                <div className="flex items-center gap-1 text-slate-400 mb-6">
                   <span className="material-symbols-outlined text-[14px]">location_on</span>
                   <span className="text-[10px] font-bold">{event.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                     {[...Array(3)].map((_, i) => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                         <img src={`https://i.pravatar.cc/100?u=${event.id}${i}`} className="w-full h-full object-cover" />
                       </div>
                     ))}
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[8px] font-black text-slate-400">+{event.participants}</div>
                  </div>
                  
                  {bookedEvents.includes(event.id) ? (
                    <button className="bg-slate-100 text-slate-400 border border-slate-200 px-6 py-2 rounded-2xl text-[10px] font-black uppercase flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">check_circle</span> 已预约
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleBook(event)}
                      className="bg-primary text-white px-6 py-2 rounded-2xl text-[10px] font-black uppercase shadow-lg shadow-primary/20 transition-all active:scale-95"
                    >
                      立即预约
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
             <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                <span className="material-symbols-outlined text-3xl text-slate-200">event_busy</span>
             </div>
             <div>
                <p className="text-sm font-bold text-slate-300 uppercase tracking-widest">当日暂无活动</p>
                <p className="text-[10px] text-slate-400 mt-1">换个日期看看其他惊喜吧</p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const categories = [
  { id: 'all', label: '全部', icon: 'dashboard' },
  { id: 'music', label: '音乐', icon: 'music_note' },
  { id: 'market', label: '集市', icon: 'shopping_bag' },
  { id: 'sport', label: '运动', icon: 'fitness_center' },
  { id: 'culture', label: '文化', icon: 'museum' },
];

export default CalendarScreen;
