export const services = [
  {
    id: 'srv-001',
    name: 'Premium Oil Change Service',
    description: 'Synthetic oil replacement with filter change and fluid top-up checks.',
    duration: '45 min',
    price: 89,
    category: 'Maintenance',
    popularity: 91,
    issues: ['Poor Fuel Economy', 'Overheating'],
  },
  {
    id: 'srv-002',
    name: 'Brake System Inspection',
    description: 'Full brake pad, disc, and safety inspection with performance report.',
    duration: '60 min',
    price: 120,
    category: 'Safety',
    popularity: 88,
    issues: ['Brake Noise', 'Vibration'],
  },
  {
    id: 'srv-003',
    name: 'Wheel Alignment & Balancing',
    description: 'Precision alignment and balancing for smoother handling and tire life.',
    duration: '50 min',
    price: 110,
    category: 'Tires',
    popularity: 84,
    issues: ['Vibration', 'Uneven Tire Wear'],
  },
  {
    id: 'srv-004',
    name: 'Engine Diagnostics Scan',
    description: 'Advanced scanner-based diagnostic with issue summary and recommendations.',
    duration: '35 min',
    price: 75,
    category: 'Diagnostics',
    popularity: 95,
    issues: ['Engine Light', 'Overheating', 'Poor Fuel Economy'],
  },
  {
    id: 'srv-005',
    name: 'Detailing Wash & Interior Care',
    description: 'Exterior deep wash plus interior vacuum, polish, and odor refresh.',
    duration: '90 min',
    price: 165,
    category: 'Detailing',
    popularity: 79,
    issues: ['Detailing'],
  },
  {
    id: 'srv-006',
    name: 'Battery & Electrical Check',
    description: 'Battery health test, alternator check, and electrical system review.',
    duration: '40 min',
    price: 80,
    category: 'Diagnostics',
    popularity: 90,
    issues: ['Battery Drain', 'Engine Light'],
  },
];

export const serviceCategories = ['All', 'Maintenance', 'Safety', 'Tires', 'Diagnostics', 'Detailing'];

export const serviceIssues = [
  'All Issues',
  'Engine Light',
  'Brake Noise',
  'Battery Drain',
  'Vibration',
  'Poor Fuel Economy',
  'Overheating',
  'Uneven Tire Wear',
  'Detailing',
];

export const serviceSortOptions = ['Recommended', 'Fastest', 'Price: Low to High'];
