export const dummyCourses = [
  {
    id: 'course-1',
    category: 'CLOUD & ARCHITECTURE',
    title: 'Enterprise Cloud Architecture & Distributed Systems',
    description: 'Master high-availability system design, Kubernetes cluster orchestration, microservices patterns, and enterprise cloud reliability engineering.',
    shortDescription: 'Master enterprise cloud, microservices patterns, and distributed scaling.',
    price: '18,999',
    salePrice: '12,999',
    difficulty: 'Advanced',
    duration: '120 hours',
    totalLessons: 48,
    level: ['Intermediate', 'Advanced'],
    thumbnail: '/courses/architecture.png',
    isNew: true,
    tags: ['Cloud', 'Kubernetes', 'Microservices', 'System Design'],
    mentorName: 'Alex Rivera, Lead Cloud Architect',
  },
  {
    id: 'course-2',
    category: 'SOFTWARE ENGINEERING',
    title: 'Full-Stack Distributed Systems with React 19 & Node.js',
    description: 'Comprehensive coverage of modern asynchronous event-driven backends, database sharding, caching architectures, and reactive React 19 frontend interfaces.',
    shortDescription: 'Build enterprise-grade full-stack distributed systems with reactive UI.',
    price: '14,999',
    salePrice: '9,999',
    difficulty: 'Intermediate',
    duration: '90 hours',
    totalLessons: 36,
    level: ['Beginner', 'Intermediate'],
    thumbnail: '/courses/motion.png',
    isNew: true,
    tags: ['Full-Stack', 'React 19', 'Node.js', 'System Architecture'],
    mentorName: 'Sarah Jenkins, Principal Engineer',
  },
  {
    id: 'course-3',
    category: 'AI & DATA SYSTEMS',
    title: 'Autonomous AI Agents & Large Language Model Orchestration',
    description: 'Build production-ready multi-agent swarms, RAG knowledge graph retrieval engines, vector databases (Qdrant), and autonomous tool-calling pipelines.',
    shortDescription: 'Build multi-agent workflows, vector RAG, and production LLM systems.',
    price: '21,999',
    salePrice: '15,499',
    difficulty: 'Advanced',
    duration: '85 hours',
    totalLessons: 42,
    level: ['Advanced'],
    thumbnail: '/courses/curator.png',
    isNew: true,
    tags: ['AI Agents', 'LLM', 'Vector DB', 'RAG'],
    mentorName: 'Dr. Michael Chen, AI Research Lead',
  },
  {
    id: 'course-4',
    category: 'CYBERSECURITY',
    title: 'Zero-Trust Cybersecurity & Cloud Infrastructure Defense',
    description: 'Deep dive into zero-trust networks, automated penetration testing, cryptographic identity management, container runtime security, and compliance.',
    shortDescription: 'Enterprise zero-trust network defense and automated vulnerability testing.',
    price: '16,999',
    salePrice: '11,499',
    difficulty: 'Advanced',
    duration: '70 hours',
    totalLessons: 32,
    level: ['Intermediate', 'Advanced'],
    thumbnail: '/courses/typography.png',
    isNew: false,
    tags: ['Cybersecurity', 'Zero-Trust', 'Pen-Testing', 'DevSecOps'],
    mentorName: 'Elena Rostova, CISO Advisor',
  },
  {
    id: 'course-5',
    category: 'DATA ENGINEERING',
    title: 'Real-Time Streaming Pipelines with Kafka & Apache Spark',
    description: 'Design fault-tolerant real-time stream processing engines, distributed telemetry pipelines, delta lake storage, and high-throughput data pipelines.',
    shortDescription: 'High-throughput real-time stream processing with Kafka and PySpark.',
    price: '13,999',
    salePrice: '8,999',
    difficulty: 'Intermediate',
    duration: '60 hours',
    totalLessons: 28,
    level: ['Intermediate'],
    thumbnail: '/courses/narrative.png',
    isNew: false,
    tags: ['Kafka', 'Spark', 'Streaming', 'Data Engineering'],
    mentorName: 'David Kumar, Data Platform Architect',
  },
  {
    id: 'course-6',
    category: 'DEVOPS & PLATFORM',
    title: 'GitOps CI/CD Automation & Infrastructure as Code (Terraform)',
    description: 'Automate multi-region deployments with Terraform, GitHub Actions, ArgoCD, automated rollback monitoring, and zero-downtime canary rollouts.',
    shortDescription: 'Automated GitOps pipelines, Terraform IaC, and Kubernetes GitOps.',
    price: '11,999',
    salePrice: '7,499',
    difficulty: 'Intermediate',
    duration: '50 hours',
    totalLessons: 24,
    level: ['Beginner', 'Intermediate'],
    thumbnail: '/courses/pricing.png',
    isNew: true,
    tags: ['DevOps', 'Terraform', 'GitOps', 'CI/CD'],
    mentorName: 'Marcus Vance, Principal DevOps Lead',
  }
];

export const testSeriesData = [
  {
    id: 'test-1',
    title: 'Vedic Astrology Fundamentals & Kundli Reading Mock',
    category: 'Vedic Astrology',
    questionsCount: 20,
    durationMinutes: 25,
    difficulty: 'Intermediate',
    rating: 4.9,
    attempts: '18.4k',
    badge: 'National Quiz',
    description: 'Comprehensive test covering the 12 Houses, Zodiac Signs, planetary aspects, and basic Kundli analysis techniques.',
    questions: [
      {
        question: 'Which house in a Vedic birth chart is known as the house of Longevity, Sudden Transformations, and Occult knowledge (Ayur Bhava)?',
        options: ['6th House', '8th House', '10th House', '12th House'],
        correctIndex: 1,
        explanation: 'The 8th House governs longevity (Ayushya), sudden events, occult sciences, inheritance, and transformations.'
      },
      {
        question: 'Which planet is regarded as the significator (Karaka) for Wealth and General Prosperity in Vedic astrology?',
        options: ['Saturn', 'Jupiter (Guru)', 'Mars', 'Rahu'],
        correctIndex: 1,
        explanation: 'Jupiter (Guru/Brihaspati) is the prime natural significator of wealth, fortune, and higher wisdom.'
      },
      {
        question: 'The Lagna (1st house) of a horoscope represents which vital aspect of life?',
        options: ['Physical Body, Vitality and Personality', 'Expenditure and Foreign travel', 'Spouse and Partnerships', 'Higher Education'],
        correctIndex: 0,
        explanation: 'The 1st House or Lagna defines the self, physical constitution, vitality, mental disposition, and overall approach to life.'
      },
      {
        question: 'In Vedic Astrology, which planet rules over communication, speech, logic, and commercial trade?',
        options: ['Mercury (Budh)', 'Venus (Shukra)', 'Sun (Surya)', 'Moon (Chandra)'],
        correctIndex: 0,
        explanation: 'Mercury (Budh) governs speech, intellect, commerce, accounting, and mathematical skills.'
      },
      {
        question: 'What is a Mahadasha in the Vimshottari Dasha system?',
        options: ['A daily transit', 'A major planetary operating period influencing a segment of life', 'An eclipse phase', 'A lunar eclipse timing'],
        correctIndex: 1,
        explanation: 'Vimshottari Dasha assigns specific multi-year periods to each planet, during which that planets qualities and house rulership become active.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Vastu Shastra Directional Energy Assessment',
    category: 'Vastu Shastra',
    questionsCount: 15,
    durationMinutes: 20,
    difficulty: 'Intermediate',
    rating: 4.8,
    attempts: '12.1k',
    badge: 'High Yield',
    description: 'Focused test covering the 16 Vastu zones, element balancing (Panchatatva), and practical home remedies.',
    questions: [
      {
        question: 'Which direction in Vastu Shastra represents the Water element and should ideally be kept light, clean, and open?',
        options: ['North-East (Ishan)', 'South-West (Nairutya)', 'South-East (Agneya)', 'North-West (Vayavya)'],
        correctIndex: 0,
        explanation: 'North-East (Ishan) is the sacred zone representing the Water element and divine energy flow.'
      },
      {
        question: 'Which zone in a home or office is ideal for the master bedroom and master suite to ensure family stability and authority?',
        options: ['North-East', 'South-East', 'South-West', 'North-West'],
        correctIndex: 2,
        explanation: 'South-West (Nairutya) represents the Earth element (stability, grounding, and leadership authority).'
      },
      {
        question: 'The kitchen stove and fire element should ideally be positioned in which directional zone?',
        options: ['North-East', 'South-East (Agneya)', 'North', 'West'],
        correctIndex: 1,
        explanation: 'South-East is ruled by Lord Agni (Fire), making it the natural place for cooking stoves and heat appliances.'
      }
    ]
  },
  {
    id: 'test-3',
    title: 'Planetary Remedies & Astrological Upay Speed Quiz',
    category: 'Planetary Remedies',
    questionsCount: 20,
    durationMinutes: 25,
    difficulty: 'Beginner to Medium',
    rating: 4.9,
    attempts: '14.8k',
    badge: 'Remedies Mapped',
    description: 'Practical knowledge on daily lifestyle remedies for Rahu, Saturn, Venus, and Mars without superstition.',
    questions: [
      {
        question: 'According to Dr. Yogesh Sharma, what is the best daily habit to pacify negative Rahu vibrations?',
        options: [
          'Wearing costly gemstones without consulting',
          'Keeping bathrooms, gadgets, and bedroom clutter-free with disciplined routines',
          'Performing fearful rituals',
          'Avoiding social interaction'
        ],
        correctIndex: 1,
        explanation: 'Rahu thrives on confusion and clutter. Cleanliness in personal spaces and electronics directly stabilizes Rahu.'
      },
      {
        question: 'Honoring and treating workers, drivers, and cleaning helpers with dignity and fair pay is the supreme remedy for:',
        options: ['Saturn (Shani)', 'Mars (Mangal)', 'Sun (Surya)', 'Jupiter (Guru)'],
        correctIndex: 0,
        explanation: 'Saturn represents the labor force and justice. Serving and respecting helpers directly brings Shanis grace.'
      },
      {
        question: 'Which planet is strengthened by regular morning sunlight exposure, respect for father figures, and maintaining high self-integrity?',
        options: ['Sun (Surya)', 'Moon (Chandra)', 'Venus (Shukra)', 'Rahu'],
        correctIndex: 0,
        explanation: 'The Sun represents the soul, father, authority, and vitality. Early sunlight and integrity directly strengthen Sun energy.'
      }
    ]
  }
];

export const buyBooksData = [
  {
    id: 'book-1',
    title: 'Astro-Vastu Handbook: Harmonizing Home & Destiny',
    category: 'Astro-Vastu',
    author: 'Dr. Yogesh Sharma',
    format: 'eBook (PDF) + Directional Compass Guide',
    pages: 340,
    fileSize: '16.4 MB',
    rating: 4.9,
    reviewsCount: 380,
    price: '₹499',
    originalPrice: '₹999',
    discount: '50% OFF',
    coverImage: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?w=600&auto=format&fit=crop&q=80',
    description: 'Exhaustive topic-by-topic handbook covering non-destructive Vastu principles, 16 directional zones, and birth chart energy alignment with practical daily remedies.',
    highlights: [
      'Complete 16-zone Vastu energy breakdown',
      '50+ High-yield visual remedy charts without demolition',
      'Case studies on solving financial blockages and sleep disorders',
      'Kundli and Vastu integration frameworks by Dr. Yogesh Sharma'
    ],
    sampleExcerpt: 'Chapter 3: The North-East Ishan Principle — How keeping this zone pure and uncluttered activates mental clarity and divine intuition.'
  },
  {
    id: 'book-2',
    title: 'Vedic Kundli Decoding: A Practical Modern Guide',
    category: 'Vedic Astrology',
    author: 'Dr. Yogesh Sharma',
    format: 'eBook (PDF) + 12 Houses Chart',
    pages: 410,
    fileSize: '24.8 MB',
    rating: 5.0,
    reviewsCount: 512,
    price: '₹549',
    originalPrice: '₹1,199',
    discount: '54% OFF',
    coverImage: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&auto=format&fit=crop&q=80',
    description: 'Structured handbook explaining birth chart interpretation, planetary strengths, Mahadasha analysis, and predictive techniques for real-world life choices.',
    highlights: [
      'Detailed analysis of all 12 houses and 9 planets',
      'Vimshottari Dasha timeline decoding for career and marriage',
      'Debunking astrological superstitions and fear-based predictions',
      'Practical daily remedies tailored for each zodiac sign'
    ],
    sampleExcerpt: 'Chapter 7: Career & the 10th House — Evaluating natural planetary strengths and timing promotions through transit analysis.'
  },
  {
    id: 'book-3',
    title: 'Rahu, Ketu & Shani: Turning Planetary Challenges into Strengths',
    category: 'Planetary Remedies',
    author: 'Dr. Yogesh Sharma',
    format: 'eBook (PDF) + Daily Upay Checklists',
    pages: 380,
    fileSize: '19.2 MB',
    rating: 4.9,
    reviewsCount: 420,
    price: '₹699',
    originalPrice: '₹1,499',
    discount: '53% OFF',
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=80',
    description: 'The definitive guide to understanding shadow and karmic planets. Learn why challenges arise and how simple, doable daily practices turn them into blessings.',
    highlights: [
      'Demystifying Sade Sati, Dhaiya, and Rahu Mahadasha',
      'Practical, non-superstitious remedies for mental stress and delays',
      'Ethical and behavioral karma corrections',
      'Step-by-step checklists for daily peace and progress'
    ],
    sampleExcerpt: 'Chapter 4: Rahus Role in Innovation — Harnessing the intense desire of Rahu to fuel creativity, modern technology, and strategic thinking.'
  }
];
