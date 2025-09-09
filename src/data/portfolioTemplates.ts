export interface PortfolioTemplate {
  id: string;
  name: string;
  category: 'modern' | 'creative' | 'developer' | 'business' | 'minimal' | 'artistic' | 'corporate' | 'startup' | 'academic' | 'futuristic';
  preview: string;
  description: string;
  features: string[];
  technologies: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  layout: 'single-page' | 'multi-section' | 'parallax' | 'grid' | 'masonry' | 'timeline' | 'card-based' | 'split-screen';
  animations: string[];
  seoOptimized: boolean;
}

export const portfolioTemplates: PortfolioTemplate[] = [
  {
    id: 'pixelport-portfolio',
    name: 'PixelPort Pro',
    category: 'creative',
    preview: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Pixel-perfect portfolio with stunning visual effects and animations',
    features: ['Pixel Grid Layout', 'Interactive Animations', 'Project Showcase', 'Contact Forms', 'SEO Optimized'],
    technologies: ['React', 'Three.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    colors: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      accent: '#45B7D1',
      background: '#F8F9FA',
      text: '#2C3E50'
    },
    layout: 'grid',
    animations: ['Pixel Transitions', 'Hover Effects', 'Scroll Animations', 'Loading Animations'],
    seoOptimized: true
  },
  {
    id: 'neowave-portfolio',
    name: 'NeoWave Studio',
    category: 'futuristic',
    preview: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Futuristic wave-inspired portfolio with dynamic backgrounds',
    features: ['Wave Animations', 'Particle Systems', 'Dynamic Backgrounds', 'Smooth Scrolling', 'Mobile Responsive'],
    technologies: ['Vue.js', 'WebGL', 'Canvas API', 'CSS3 Animations', 'Progressive Web App'],
    colors: {
      primary: '#667EEA',
      secondary: '#764BA2',
      accent: '#F093FB',
      background: '#0F0F23',
      text: '#FFFFFF'
    },
    layout: 'parallax',
    animations: ['Wave Effects', 'Particle Systems', 'Morphing Shapes', 'Color Transitions'],
    seoOptimized: true
  },
  {
    id: 'aurastack-portfolio',
    name: 'AuraStack Digital',
    category: 'developer',
    preview: 'https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Layered portfolio with glowing aura effects for developers',
    features: ['Layered Design', 'Glow Effects', 'Code Snippets', 'Tech Stack Display', 'GitHub Integration'],
    technologies: ['Next.js', 'TypeScript', 'Styled Components', 'Framer Motion', 'Vercel'],
    colors: {
      primary: '#00D4FF',
      secondary: '#5B73FF',
      accent: '#9F7AEA',
      background: '#0A0A0A',
      text: '#FFFFFF'
    },
    layout: 'card-based',
    animations: ['Glow Effects', 'Card Animations', 'Typing Effects', 'Code Highlighting'],
    seoOptimized: true
  },
  {
    id: 'glintlab-portfolio',
    name: 'GlintLab Research',
    category: 'academic',
    preview: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Laboratory-inspired portfolio for researchers and scientists',
    features: ['Research Focus', 'Publication List', 'Lab Equipment', 'Data Visualization', 'Academic CV'],
    technologies: ['React', 'D3.js', 'Chart.js', 'LaTeX Integration', 'Academic APIs'],
    colors: {
      primary: '#718096',
      secondary: '#4A5568',
      accent: '#ED8936',
      background: '#FFFFFF',
      text: '#2D3748'
    },
    layout: 'timeline',
    animations: ['Data Animations', 'Chart Transitions', 'Lab Equipment', 'Research Flow'],
    seoOptimized: true
  },
  {
    id: 'craftfolio-portfolio',
    name: 'Craftfolio Artisan',
    category: 'artistic',
    preview: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Handcrafted aesthetic portfolio for artists and creators',
    features: ['Artistic Gallery', 'Handcrafted Design', 'Portfolio Showcase', 'Artist Bio', 'Exhibition History'],
    technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Image Optimization', 'PWA'],
    colors: {
      primary: '#D69E2E',
      secondary: '#B7791F',
      accent: '#F6E05E',
      background: '#FFFAF0',
      text: '#2D3748'
    },
    layout: 'masonry',
    animations: ['Brush Strokes', 'Paint Effects', 'Gallery Transitions', 'Artistic Reveals'],
    seoOptimized: true
  },
  {
    id: 'skytrail-portfolio',
    name: 'SkyTrail Explorer',
    category: 'business',
    preview: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Sky-inspired portfolio for travel and aviation professionals',
    features: ['Sky Theme', 'Travel Map', 'Journey Timeline', 'Cloud Effects', 'Weather Integration'],
    technologies: ['React', 'Mapbox', 'Weather API', 'Cloud Animations', 'Responsive Design'],
    colors: {
      primary: '#3182CE',
      secondary: '#2C5282',
      accent: '#63B3ED',
      background: '#EBF8FF',
      text: '#2D3748'
    },
    layout: 'split-screen',
    animations: ['Cloud Movements', 'Flight Paths', 'Weather Effects', 'Sky Transitions'],
    seoOptimized: true
  },
  {
    id: 'vantaport-portfolio',
    name: 'VantaPort Dynamic',
    category: 'modern',
    preview: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Dynamic animated portfolio with Vanta.js backgrounds',
    features: ['Animated Backgrounds', 'Interactive Elements', 'Modern Design', 'Performance Optimized', 'Dark Mode'],
    technologies: ['React', 'Vanta.js', 'Three.js', 'GSAP', 'Webpack'],
    colors: {
      primary: '#805AD5',
      secondary: '#6B46C1',
      accent: '#9F7AEA',
      background: '#1A202C',
      text: '#F7FAFC'
    },
    layout: 'single-page',
    animations: ['Vanta Effects', 'Particle Systems', 'Geometric Shapes', 'Color Morphing'],
    seoOptimized: true
  },
  {
    id: 'codexgrid-portfolio',
    name: 'CodexGrid Developer',
    category: 'developer',
    preview: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Grid-based portfolio perfect for developers and engineers',
    features: ['Code Grid Layout', 'Syntax Highlighting', 'Project Cards', 'Tech Stack', 'GitHub Stats'],
    technologies: ['Svelte', 'TypeScript', 'Prism.js', 'GitHub API', 'Netlify'],
    colors: {
      primary: '#1A202C',
      secondary: '#2D3748',
      accent: '#4FD1C7',
      background: '#171923',
      text: '#E2E8F0'
    },
    layout: 'grid',
    animations: ['Code Typing', 'Grid Animations', 'Terminal Effects', 'Matrix Rain'],
    seoOptimized: true
  },
  {
    id: 'devloom-portfolio',
    name: 'DevLoom Weaver',
    category: 'developer',
    preview: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Woven pattern portfolio for full-stack developers',
    features: ['Woven Patterns', 'Full-Stack Showcase', 'Technology Web', 'Interactive Cards', 'Skill Visualization'],
    technologies: ['Angular', 'RxJS', 'D3.js', 'Node.js', 'MongoDB'],
    colors: {
      primary: '#38B2AC',
      secondary: '#319795',
      accent: '#4FD1C7',
      background: '#F0FFF4',
      text: '#2D3748'
    },
    layout: 'multi-section',
    animations: ['Weaving Effects', 'Thread Animations', 'Pattern Reveals', 'Skill Webs'],
    seoOptimized: true
  },
  {
    id: 'coderipple-portfolio',
    name: 'CodeRipple Innovation',
    category: 'startup',
    preview: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Ripple effect portfolio for innovative developers and startups',
    features: ['Ripple Effects', 'Innovation Timeline', 'Startup Metrics', 'Team Showcase', 'Investor Deck'],
    technologies: ['React', 'Framer Motion', 'Chart.js', 'Stripe Integration', 'Firebase'],
    colors: {
      primary: '#667EEA',
      secondary: '#764BA2',
      accent: '#A78BFA',
      background: '#FFFFFF',
      text: '#1A202C'
    },
    layout: 'timeline',
    animations: ['Ripple Effects', 'Wave Propagation', 'Growth Charts', 'Innovation Flow'],
    seoOptimized: true
  }
];

export const getPortfolioTemplateById = (id: string) => {
  return portfolioTemplates.find(template => template.id === id);
};

export const getPortfolioTemplatesByCategory = (category: string) => {
  return portfolioTemplates.filter(template => template.category === category);
};