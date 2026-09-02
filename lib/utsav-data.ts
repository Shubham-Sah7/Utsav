export interface PujaItem {
  id: string;
  title: string;
  deity: string;
  templeName: string;
  location: string;
  category: 'career' | 'wealth' | 'health' | 'protection' | 'peace' | 'family';
  categoryLabel: string;
  date: string;
  tithi: string;
  startingPrice: number;
  devoteesBooked: number;
  benefits: string[];
  imageUrl: string;
  badge?: string;
  isPopular?: boolean;
  isUpcoming?: boolean;
}

export interface TempleItem {
  id: string;
  name: string;
  deity: string;
  location: string;
  state: string;
  pujasAvailable: number;
  imageUrl: string;
  description: string;
  significance: string;
  badge?: string;
}

export interface DevoteeReview {
  id: string;
  name: string;
  location: string;
  pujaName: string;
  templeName: string;
  rating: number;
  date: string;
  comment: string;
  avatarUrl?: string;
  hasVideoProof?: boolean;
  hasPrasadPhoto?: boolean;
  videoThumbnail?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: 'Panchang' | 'Gyan' | 'Mantra' | 'Festival' | 'Temple';
  readTime: string;
  date: string;
  summary: string;
  imageUrl: string;
  author: string;
}

export interface IntentionCategory {
  id: string;
  name: string;
  hindiName: string;
  icon: string;
  description: string;
  color: string;
  bgGradient: string;
  pujaCount: number;
}

export const PUJA_CATEGORIES = [
  { id: 'all', label: 'All Pujas', count: 24 },
  { id: 'career', label: 'Career & Business', count: 6 },
  { id: 'wealth', label: 'Wealth & Prosperity', count: 5 },
  { id: 'health', label: 'Health & Long Life', count: 4 },
  { id: 'protection', label: 'Protection & Rahu/Ketu', count: 4 },
  { id: 'peace', label: 'Inner Peace & Moksha', count: 3 },
  { id: 'family', label: 'Family & Marriage', count: 2 },
];

export const INTENTION_CATEGORIES: IntentionCategory[] = [
  {
    id: 'wealth',
    name: 'Wealth & Prosperity',
    hindiName: 'धन एवं समृद्धि',
    icon: 'Coins',
    description: 'Invoke Goddess Lakshmi & Lord Kuber for financial stability & abundance.',
    color: 'amber',
    bgGradient: 'from-amber-50 to-orange-50 border-amber-200/60',
    pujaCount: 8,
  },
  {
    id: 'career',
    name: 'Career & Success',
    hindiName: 'करियर एवं सफलता',
    icon: 'Briefcase',
    description: 'Seek blessings of Lord Ganesha & Lord Hanuman for job growth & exam success.',
    color: 'orange',
    bgGradient: 'from-orange-50 to-amber-50 border-orange-200/60',
    pujaCount: 6,
  },
  {
    id: 'health',
    name: 'Health & Longevity',
    hindiName: 'स्वास्थ्य एवं दीर्घायु',
    icon: 'HeartPulse',
    description: 'Mahamrityunjaya Puja at Mahakaleshwar for healing and protection from ill-health.',
    color: 'rose',
    bgGradient: 'from-rose-50 to-red-50 border-rose-200/60',
    pujaCount: 5,
  },
  {
    id: 'protection',
    name: 'Protection & Dosha Shanti',
    hindiName: 'सुरक्षा एवं दोष शांति',
    icon: 'ShieldCheck',
    description: 'Neutralize Rahu-Ketu, Shani Sade Sati & Evil Eye with powerful Tantra Pujas.',
    color: 'red',
    bgGradient: 'from-red-50 to-orange-50 border-red-200/60',
    pujaCount: 7,
  },
  {
    id: 'peace',
    name: 'Peace & Harmony',
    hindiName: 'मानसिक शांति एवं सद्भाव',
    icon: 'Sparkles',
    description: 'Remove anxiety, mental stress & bring domestic harmony with Rudrabhishek.',
    color: 'emerald',
    bgGradient: 'from-emerald-50 to-teal-50 border-emerald-200/60',
    pujaCount: 4,
  },
  {
    id: 'family',
    name: 'Marriage & Children',
    hindiName: 'विवाह एवं संतान',
    icon: 'Users',
    description: 'Mangal Dosha Shanti & Santan Gopal Puja for happy married life & progeny.',
    color: 'purple',
    bgGradient: 'from-purple-50 to-pink-50 border-purple-200/60',
    pujaCount: 4,
  },
];

export const FEATURED_PUJAS: PujaItem[] = [
  {
    id: '1',
    title: 'Special 1008 Archana & Bilva Patra Abhishekam',
    deity: 'Lord Shiva (Kashi Vishwanath)',
    templeName: 'Kashi Vishwanath Temple',
    location: 'Varanasi, Uttar Pradesh',
    category: 'peace',
    categoryLabel: 'Peace & Moksha',
    date: 'Pradosh Vrat - Sep 05, 2026',
    tithi: 'Trayodashi Tithi',
    startingPrice: 851,
    devoteesBooked: 4820,
    benefits: [
      'Personalized Sankalp with Name & Gotra',
      'Original Kashi Vishwanath sacred Bhasma & Prasad delivered',
      'HD Video proof of Archana with Pandit resolution',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    badge: 'Special Pradosh Puja',
    isPopular: true,
    isUpcoming: true,
  },
  {
    id: '2',
    title: '51,000 Mahamrityunjaya Jaap & Bhasma Aarti Seva',
    deity: 'Lord Mahakal',
    templeName: 'Mahakaleshwar Jyotirlinga',
    location: 'Ujjain, Madhya Pradesh',
    category: 'health',
    categoryLabel: 'Health & Long Life',
    date: 'Somwar Special - Sep 08, 2026',
    tithi: 'Ekadashi Tithi',
    startingPrice: 1250,
    devoteesBooked: 6150,
    benefits: [
      'Special Kavach for protection against chronic diseases',
      'Dry fruit Prasad & Mahakal Raksha Sutra by courier',
      'Full video clip sent within 48 hours',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    badge: 'High Demand',
    isPopular: true,
  },
  {
    id: '3',
    title: 'Siddha Baglamukhi Pitambara Shatru Samhara Yajna',
    deity: 'Goddess Baglamukhi',
    templeName: 'Baglamukhi Peeth',
    location: 'Datia, Madhya Pradesh',
    category: 'protection',
    categoryLabel: 'Protection & Victory',
    date: 'Navami Tithi - Sep 11, 2026',
    tithi: 'Shukla Navami',
    startingPrice: 1501,
    devoteesBooked: 2940,
    benefits: [
      'Removes legal litigation & enemy obstacles',
      'Yellow Haldi Siddha Prasad & Raksha Thread included',
      'Private Sankalp by senior Veda Pandits',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80',
    badge: 'Tantra Peeth',
    isPopular: false,
    isUpcoming: true,
  },
  {
    id: '4',
    title: 'Ashta Lakshmi Dhan Varsha Yajna & Kuber Puja',
    deity: 'Goddess Lakshmi & Lord Kuber',
    templeName: 'Mahalakshmi Temple',
    location: 'Kolhapur, Maharashtra',
    category: 'wealth',
    categoryLabel: 'Wealth & Business',
    date: 'Shukravar Special - Sep 12, 2026',
    tithi: 'Dhan Yoga Tithi',
    startingPrice: 1100,
    devoteesBooked: 3890,
    benefits: [
      'Attracts new business opportunities & wealth retention',
      'Silver Coin Laxmi Yantra & Siddha Kuber Prasad',
      'Personalized Naam-Gotra recitations',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    badge: 'Wealth & Prosperity',
    isPopular: true,
  },
  {
    id: '5',
    title: 'Mangal Dosha Shanti & Bhat Puja',
    deity: 'Lord Mangaldev',
    templeName: 'Mangalnath Temple',
    location: 'Ujjain, Madhya Pradesh',
    category: 'family',
    categoryLabel: 'Marriage & Family',
    date: 'Bhaumvar - Sep 15, 2026',
    tithi: 'Chaturthi Tithi',
    startingPrice: 1350,
    devoteesBooked: 1870,
    benefits: [
      'Removes delay in marriage & marital discord',
      'Red Kumkum & Mangal Yantra delivered',
      'Detailed horoscope remedies shared via email',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    badge: 'Kundali Remedy',
  },
  {
    id: '6',
    title: 'Special Kamakhya Devi Tantrokt Kumkum Archana',
    deity: 'Goddess Kamakhya',
    templeName: 'Kamakhya Shaktipeeth',
    location: 'Guwahati, Assam',
    category: 'protection',
    categoryLabel: 'Shakti Peeth Seva',
    date: 'Amavasya Special - Sep 18, 2026',
    tithi: 'Amavasya Tithi',
    startingPrice: 2100,
    devoteesBooked: 4120,
    benefits: [
      'Authentic Shaktipeeth blessings for desire fulfillment',
      'Sacred Rakt Vastra & Sindoor Prasad',
      'Recorded ritual video link via WhatsApp',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    badge: '51 Shaktipeeth',
    isPopular: true,
  },
];

export const FEATURED_TEMPLES: TempleItem[] = [
  {
    id: 'kashi',
    name: 'Kashi Vishwanath Temple',
    deity: 'Lord Shiva',
    location: 'Varanasi',
    state: 'Uttar Pradesh',
    pujasAvailable: 12,
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    description: 'One of the most sacred 12 Jyotirlingas situated on the banks of holy Ganga.',
    significance: 'Spiritual liberation & destruction of karmic sins',
    badge: '12 Jyotirlinga',
  },
  {
    id: 'mahakal',
    name: 'Mahakaleshwar Jyotirlinga',
    deity: 'Lord Shiva (Mahakal)',
    location: 'Ujjain',
    state: 'Madhya Pradesh',
    pujasAvailable: 15,
    imageUrl: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    description: 'The Dakshinamukhi Jyotirlinga famous worldwide for Bhasma Aarti and Akal Mrityu protection.',
    significance: 'Conqueror of time & death',
    badge: 'Aarti Dham',
  },
  {
    id: 'kamakhya',
    name: 'Kamakhya Shaktipeeth',
    deity: 'Goddess Kamakhya',
    location: 'Guwahati',
    state: 'Assam',
    pujasAvailable: 8,
    imageUrl: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80',
    description: 'The pinnacle of 51 Shaktipeeths where divine feminine energy resides.',
    significance: 'Tantra Siddhi & desire fulfillment',
    badge: 'Shaktipeeth',
  },
  {
    id: 'badrinath',
    name: 'Badrinath Dham',
    deity: 'Lord Vishnu',
    location: 'Chamoli',
    state: 'Uttarakhand',
    pujasAvailable: 6,
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'Holy shrine among Char Dham located in the pristine Himalayas.',
    significance: 'Vaikuntha on Earth',
    badge: 'Char Dham',
  },
];

export const DEVOTEE_REVIEWS: DevoteeReview[] = [
  {
    id: 'rev-1',
    name: 'Rajesh Sharma',
    location: 'Bengaluru, Karnataka',
    pujaName: '1008 Bilva Patra Archana',
    templeName: 'Kashi Vishwanath Temple',
    rating: 5,
    date: '2 days ago',
    comment:
      'We booked the Pradosh Puja for my father who was facing health complications. The pandit ji distinctly announced our family Gotra during Sankalp in the video. Received the sacred Prasad and Bhasma in beautiful packaging within 4 days.',
    hasVideoProof: true,
    hasPrasadPhoto: true,
  },
  {
    id: 'rev-2',
    name: 'Meenakshi Sundaram',
    location: 'Chennai, Tamil Nadu',
    pujaName: 'Mahamrityunjaya Jaap',
    templeName: 'Mahakaleshwar Temple, Ujjain',
    rating: 5,
    date: '1 week ago',
    comment:
      'Living in South India, it was difficult to personally visit Ujjain. Utsav made it feel like we were present right inside the sanctum. High quality video recording and authentic Prasad. Truly blessed service!',
    hasVideoProof: true,
    hasPrasadPhoto: true,
  },
  {
    id: 'rev-3',
    name: 'Vikram & Sunita Singh',
    location: 'Gurugram, Haryana',
    pujaName: 'Ashta Lakshmi Dhan Varsha Yajna',
    templeName: 'Mahalakshmi Temple, Kolhapur',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'The entire experience was seamless and pure. The Sankalp video sent on WhatsApp brought tears of devotion to our eyes. Prasad contained silver coin yantra as promised.',
    hasVideoProof: true,
    hasPrasadPhoto: false,
  },
];

export const DHARMIK_GYAN_ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'Why Pradosh Vrat is Sacred for Lord Shiva Worshippers: Vidhi & Benefits',
    category: 'Panchang',
    readTime: '4 min read',
    date: 'Sep 01, 2026',
    summary: 'Discover the cosmic significance of Pradosh Kaal and how worshipping Mahadev during this window dissolves karmic burdens.',
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80',
    author: 'Pandit Acharya Ved Prakash',
  },
  {
    id: 'art-2',
    title: 'Complete Hanuman Chalisa Meaning & Verse-by-Verse Spiritual Breakdown',
    category: 'Gyan',
    readTime: '7 min read',
    date: 'Aug 28, 2026',
    summary: 'Understand the hidden esoteric meanings of Goswami Tulsidas compositions and why regular recitation removes fear.',
    imageUrl: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Smita Tripathi',
  },
  {
    id: 'art-3',
    title: 'Secrets of Kamakhya Shaktipeeth: The Mystical Center of Divine Energy',
    category: 'Temple',
    readTime: '6 min read',
    date: 'Aug 24, 2026',
    summary: 'An insightful look into Nilachal Hill shrine, Tantra traditions, and why millions seek blessings here annually.',
    imageUrl: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=600&q=80',
    author: 'Utsav Editorial Board',
  },
];

export const TODAY_PANCHANG = {
  dateStr: 'Tuesday, 01 September 2026',
  vikramSamvat: '2083 Ananda Samvat',
  tithi: 'Bhadrapada Krishna Paksha Chaturthi',
  nakshatra: 'Ashwini Nakshatra (Till 04:12 PM)',
  yoga: 'Vriddhi Yoga',
  rahukaal: '03:30 PM - 05:00 PM',
  auspiciousMuhurat: 'Abhijit Muhurat: 11:55 AM - 12:45 PM',
  sunriseSunset: 'Sunrise: 06:04 AM | Sunset: 06:38 PM',
};
