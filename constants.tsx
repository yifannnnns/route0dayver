
import { CommunityCircle, POI, RoadEvent, RoadSegment, RoadBook, Stay } from './types';

export const COMMUNITIES: CommunityCircle[] = [
  {
    id: 'main-hub',
    name: '主枢纽',
    subtitle: '〇号广场',
    icon: 'explore',
    image: 'https://images.unsplash.com/photo-1506466010722-395ee2bef877?auto=format&fit=crop&q=80&w=1000',
    type: 'main',
    size: 'w-48 h-48'
  },
  {
    id: 'sunset',
    name: '日落摄影',
    icon: 'photo_camera',
    image: 'https://images.unsplash.com/photo-1472120482482-d42104454e81?auto=format&fit=crop&q=80&w=400',
    type: 'satellite',
    position: { top: '5%', left: '10%' },
    size: 'w-28 h-28'
  },
  {
    id: 'cycling',
    name: '海岸骑行',
    icon: 'directions_bike',
    image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&q=80&w=400',
    type: 'satellite',
    position: { top: '10%', right: '12%' },
    size: 'w-32 h-32'
  },
  {
    id: 'seafood',
    name: '海鲜食客',
    icon: 'restaurant',
    image: 'https://images.unsplash.com/photo-1559739511-e9404f553331?auto=format&fit=crop&q=80&w=400',
    type: 'satellite',
    position: { bottom: '10%', left: '8%' },
    size: 'w-32 h-32'
  },
  {
    id: 'vanlife',
    name: '公路旅居',
    icon: 'airport_shuttle',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=400',
    type: 'satellite',
    position: { bottom: '5%', right: '15%' },
    size: 'w-24 h-24'
  }
];

export const POIS: POI[] = [
  { id: '1', name: '宁波轨道交通接驳点', category: 'transit', lat: 29.5800, lng: 121.7800, description: '快到象山第一站，接驳公路自驾之旅。', tags: ['低碳', '便捷'] },
  
  // 驿站服务 - 斑斓海岸段
  { 
    id: 'srv1', 
    name: '塔头旺·二级驿站', 
    category: 'service', 
    lat: 29.5750, 
    lng: 121.7820, 
    description: '提供骑行补给、洗手间、简餐及应急医疗。这里是公路漫游的重要补给站，设施完备。', 
    tags: ['二级驿站', '补给'],
    image: 'https://images.unsplash.com/photo-1528642466221-e37b8a5ea90d?auto=format&fit=crop&w=800'
  },
  { 
    id: 'srv2', 
    name: '沪港·三级驿站', 
    category: 'service', 
    lat: 29.5300, 
    lng: 121.7900, 
    description: '小型景观驿站，提供饮用水及观景休憩。坐落于海滨，景色宜人。', 
    tags: ['三级驿站', '观景'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800'
  },
  { 
    id: 'srv3', 
    name: '海口村·二级驿站', 
    category: 'service', 
    lat: 29.4950, 
    lng: 121.8400, 
    description: '全功能服务驿站，支持电动汽车充电及农产品展示。连接村落与公路。', 
    tags: ['二级驿站', '充电'],
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800'
  },

  // 斑斓海岸 - 黄避岙乡西岸
  { id: 'bl1', name: '沐光海太空舱露营地', category: 'stay', lat: 29.5720, lng: 121.7850, description: '位于西沪港北端，全景玻璃舱坐拥完美内湾海景。', tags: ['露营', '星空'] },
  { id: 'bl2', name: '四季青藤度假酒店', category: 'stay', lat: 29.5650, lng: 121.7820, description: '高品质海景客房，紧贴西岸彩色公路。', tags: ['度假', '高阶'] },
  { id: 'bl11', name: '海米木木亲子庄园', category: 'stay', lat: 29.5580, lng: 121.7810, description: '西沪港畔的亲子乐园，生态与互动的完美结合。', tags: ['亲子', '研学'] },
  { id: 'bl10', name: '艇好玩帆船营地', category: 'stay', lat: 29.5500, lng: 121.7800, description: '西沪港内湾水域平稳，是帆船初学者的天堂。', tags: ['运动', '极限'] },
  { id: 'bl12', name: '落日咖啡', category: 'food', lat: 29.5420, lng: 121.7830, description: '黄避岙西岸最佳日落位，看夕阳坠入西沪港。', tags: ['日落', '景观'] },
  { id: 'bl3', name: '斑斓海岸艺术中心', category: 'scenery', lat: 29.5350, lng: 121.7880, description: '由旧船厂改造的艺术空间，连接过去与未来的海岸美学。', tags: ['艺术', '人文'] },
  { id: 'bl4', name: '黄鱼咖啡', category: 'food', lat: 29.5280, lng: 121.7950, description: '极具本土特色的咖啡驿站。', tags: ['咖啡', '网红'] },
  { id: 'bl5', name: '南铂酒店', category: 'stay', lat: 29.5180, lng: 121.8050, description: '轻奢海景酒店。', tags: ['舒适', '临海'] },
  { id: 'bl6', name: '集野咖啡', category: 'food', lat: 29.5100, lng: 121.8150, description: '隐身于海岸礁石旁的木质咖啡屋。', tags: ['手冲', '休闲'] },
  { id: 'bl7', name: '西夏王和文饭店', category: 'food', lat: 29.5000, lng: 121.8300, description: '西沪港特产海鲜汇聚地。', tags: ['海鲜', '老店'] },
  { id: 'bl8', name: '西渔渔家', category: 'food', lat: 29.4900, lng: 121.8500, description: '体验地道渔民生活，品尝现捞海货。', tags: ['特色', '农家乐'] },
  { id: 'bl9', name: '大樟树农家饭店', category: 'food', lat: 29.4800, lng: 121.8700, description: '西岸公路尽头的千年守候。', tags: ['地标', '家常'] }
];

export const EVENTS: RoadEvent[] = [
  { 
    id: 'e1', 
    title: '公路落日音乐会：海浪与萨克斯', 
    date: '05.20', 
    time: '18:30 - 20:00',
    location: '〇号广场 - 观日平台', 
    type: 'music', 
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400',
    price: '免费',
    isHot: true,
    slotsLeft: 12,
    participants: 456
  }
];

export const ROAD_SEGMENTS: RoadSegment[] = [
  { 
    id: 'rs1', 
    name: '斑斓海岸段', 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800', 
    description: '西沪内湾，彩色印记',
    fullIntro: '黄避岙乡西岸沿线（西沪港段）是〇号公路最出名的“彩色”路段，这里的西沪港海岸线蜿蜒优美。',
    length: '18.5 KM',
    duration: '40 MIN',
    highlights: ['西沪港内湾', '黄避岙西岸彩色路', '斑斓艺术中心', '落日灯塔'],
    gallery: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&w=400',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&w=400'
    ],
    pathData: "M10 40 Q 25 10, 40 40 T 70 40 T 90 20"
  },
  { 
    id: 'rs2', 
    name: '风车奇遇段', 
    image: 'https://images.unsplash.com/photo-1466611653911-95282fc365d5?auto=format&fit=crop&w=800', 
    description: '遇一群同好，无限灵感',
    fullIntro: '当巨大的白色风车在山脊线上缓缓转动。',
    length: '12.8 KM',
    duration: '30 MIN',
    highlights: ['山脊风车阵', '落日摄影台'],
    gallery: ['https://images.unsplash.com/photo-1414490929659-9a12b7e31907?auto=format&w=400']
  },
  { 
    id: 'rs3', 
    name: '跃动山海段', 
    image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=800', 
    description: '撒一回欢儿，无限活力',
    fullIntro: '穿梭在险峻的山体与开阔的海面之间。',
    length: '15.7 KM',
    duration: '35 MIN',
    highlights: ['S型山海弯', '半边山沙滩']
  },
  { 
    id: 'rs4', 
    name: '渔光古城段', 
    image: 'https://images.unsplash.com/photo-1559739511-e9404f553331?auto=format&fit=crop&w=800', 
    description: '赴一场渔光，无限烟火',
    fullIntro: '石浦渔港的百年风情在这里延续。',
    length: '4.3 KM',
    duration: '15 MIN',
    highlights: ['石浦中街', '中国渔村']
  }
];

export const ROAD_BOOKS: RoadBook[] = [
  { 
    id: 'rb1', 
    title: '〇号公路官方完整指南', 
    author: '象山文旅', 
    type: 'official', 
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400',
    intro: '由象山官方文旅局深度策划。',
    points: [
      { id: 'p1', name: '起点：〇号广场', description: '公路漫游的零公里处。', image: 'https://images.unsplash.com/photo-1506466010722-395ee2bef877?auto=format&w=200', coordinate: { x: 20, y: 30 } },
      { id: 'p2', name: '第一站：斑斓海岸', description: '最出片的彩色公路段。', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&w=200', coordinate: { x: 45, y: 40 } }
    ]
  }
];

export const ROAD_STAYS: Stay[] = [
  {
    id: 'stay-0',
    name: '〇感青年旅舍',
    type: 'hostel',
    image: 'https://i.pinimg.com/736x/87/46/52/8746529731454641d8e1f5793081a293.jpg',
    price: '¥ 99 起',
    rating: '4.9',
    tags: ['社交', '极简'],
    description: '〇感青年旅舍致力于为全球数字游民提供最具活力的社交空间。位于〇号公路起点，这里不仅是住宿，更是灵感的碰撞地。',
    amenities: ['wifi', 'coffee', 'local_laundry_service', 'groups'],
    locationDesc: '象山县丹东街道零号广场北侧',
    gallery: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&w=600',
      'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&w=600'
    ]
  },
  {
    id: 'bl1',
    name: '沐光海太空舱露营地',
    type: 'camping',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=400',
    price: '¥ 599 起',
    rating: '4.8',
    tags: ['海景', '星空'],
    description: '全景玻璃太空舱，让你在西沪港的潮汐声中入眠。每个舱位均配备智能化控制系统，提供极致的未来主义露营体验。',
    amenities: ['wifi', 'ac_unit', 'shower', 'wb_sunny'],
    locationDesc: '象山县黄避岙乡塔头旺村西侧海岸',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&w=600',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&w=600'
    ]
  },
  {
    id: 'bl2',
    name: '四季青藤度假酒店',
    type: 'hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400',
    price: '¥ 880 起',
    rating: '4.7',
    tags: ['度假', '全景'],
    description: '四季青藤以优雅的园林设计和无可挑剔的海景房著称。酒店紧邻斑斓海岸彩色公路，是追求生活品质者的理想之选。',
    amenities: ['pool', 'spa', 'restaurant', 'local_parking'],
    locationDesc: '象山县黄避岙乡彩色公路段中点',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&w=600',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&w=600'
    ]
  },
  {
    id: 'bl5',
    name: '南铂酒店',
    type: 'hotel',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&w=400',
    price: '¥ 1200 起',
    rating: '4.9',
    tags: ['奢华', '临海'],
    description: '南铂酒店重新定义了象山的奢华避世。临海而建的无边泳池与东海连成一线，提供顶级私人管家服务。',
    amenities: ['pool', 'gym', 'valet_parking', 'room_service'],
    locationDesc: '象山县黄避岙乡南铂角',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&w=600',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&w=600'
    ]
  },
  {
    id: 'bl10',
    name: '艇好玩帆船营地',
    type: 'camping',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400',
    price: '¥ 450 起',
    rating: '4.6',
    tags: ['运动', '潮酷'],
    description: '专为水上运动爱好者打造的集合营地。这里提供帐篷住宿与专业帆船培训，让你在〇号公路上不仅是路过，更是征服。',
    amenities: ['sailing', 'waves', 'fireplace', 'directions_bike'],
    locationDesc: '象山县黄避岙乡西沪港帆船基地',
    gallery: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&w=600',
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&w=600'
    ]
  },
  {
    id: 'bl11',
    name: '海米木木亲子庄园',
    type: 'bnb',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400',
    price: '¥ 680 起',
    rating: '4.8',
    tags: ['亲子', '研学'],
    description: '海米木木是家庭旅行的最佳选择。庄园内设有有机农场、儿童手工室及自然教育课室，让孩子在旅行中学习与成长。',
    amenities: ['family_restroom', 'child_care', 'grass', 'set_meal'],
    locationDesc: '象山县黄避岙乡海口村庄园路1号',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=600',
      'https://images.unsplash.com/photo-1505691722218-26986d2039a4?auto=format&w=600'
    ]
  }
];
