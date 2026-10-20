import rawConfig from './client.config.json'

export const siteConfig = {
  brandName: rawConfig?.brand?.name || 'LMS Academy',
  tagline: rawConfig?.brand?.tagline || 'Next-Gen Learning Platform',
  headline: rawConfig?.brand?.headline || 'Empower Your Future With World-Class Skills',
  subheadline: rawConfig?.brand?.subheadline || 'Master in-demand skills through interactive video labs, expert mentorship, and verifiable certifications.',
  colors: rawConfig?.brand?.colors || {
    primary: '#4f46e5',
    secondary: '#06b6d4',
    accent: '#f59e0b',
    background: '#0f172a'
  },
  stats: rawConfig?.brand?.stats || [
    { label: 'Active Students', value: '25,000+' },
    { label: 'Course Rating', value: '4.9 ★★★★★' },
    { label: 'Completion Rate', value: '98.5%' },
    { label: 'Certified Alumni', value: '18,000+' }
  ],
  features: rawConfig?.brand?.features || [
    {
      id: 'f1',
      title: 'Industry-Standard Curriculum',
      description: 'Master practical, career-defining skills created by leading professionals.'
    },
    {
      id: 'f2',
      title: 'High-Performance Video Labs',
      description: 'Stream seamless video lessons with chapter navigation and integrated notes.'
    },
    {
      id: 'f3',
      title: 'Verifiable Digital Credentials',
      description: 'Receive accredited digital certificates upon passing assessments.'
    },
    {
      id: 'f4',
      title: 'Global Peer & Mentor Community',
      description: 'Collaborate with fellow students and get instant answers in discussions.'
    }
  ]
}

export default siteConfig
