export interface ResumeTemplate {
  id: string;
  name: string;
  category: 'modern' | 'classic' | 'creative' | 'executive' | 'technical' | 'minimalist' | 'artistic' | 'corporate' | 'startup' | 'academic';
  atsScore: number;
  preview: string;
  description: string;
  features: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
  layout: 'single-column' | 'two-column' | 'three-column' | 'sidebar' | 'header-focus' | 'timeline' | 'grid' | 'asymmetric';
  typography: {
    headingFont: string;
    bodyFont: string;
    fontSize: string;
  };
  // AI Analysis properties
  overallRating: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  jobMatches: string[];
  skillGaps: string[];
  industryTrends: string[];
  salaryInsights: string;
  keywords: string[];
}

export const resumeTemplates: ResumeTemplate[] = [
  // Modern Templates with Unique Designs
  {
    id: 'modern-1',
    name: 'Executive Pro',
    category: 'modern',
    atsScore: 98,
    preview: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Clean, professional design perfect for executives and senior roles',
    features: ['ATS Optimized', 'Clean Layout', 'Professional Typography', 'Skills Section'],
    colors: {
      primary: '#2563EB',
      secondary: '#1E40AF',
      accent: '#3B82F6',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'single-column',
    typography: {
      headingFont: 'Inter',
      bodyFont: 'Inter',
      fontSize: 'medium'
    },
    overallRating: 9.2,
    strengths: ['Excellent ATS compatibility', 'Clean professional layout', 'Strong visual hierarchy', 'Optimized for scanning'],
    weaknesses: ['May be too traditional for creative roles', 'Limited color options'],
    suggestions: ['Add more quantifiable achievements', 'Include industry-specific keywords', 'Consider adding a skills matrix'],
    jobMatches: ['Senior Software Engineer', 'Product Manager', 'Technical Lead', 'Engineering Manager'],
    skillGaps: ['Cloud Architecture', 'DevOps Practices', 'Agile Leadership'],
    industryTrends: ['Remote work optimization', 'AI/ML integration', 'Cloud-first approach'],
    salaryInsights: 'Average salary range: $120K - $180K for senior positions',
    keywords: ['Leadership', 'Strategy', 'Innovation', 'Team Management', 'Technical Excellence']
  },
  {
    id: 'pixelport-1',
    name: 'PixelPort Creative',
    category: 'creative',
    atsScore: 92,
    preview: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Pixel-perfect design with modern aesthetics for digital creators',
    features: ['Pixel Grid Layout', 'Digital Portfolio', 'Interactive Elements', 'Modern Typography'],
    colors: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      accent: '#45B7D1',
      text: '#2C3E50',
      background: '#F8F9FA'
    },
    layout: 'grid',
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Open Sans',
      fontSize: 'medium'
    },
    overallRating: 8.8,
    strengths: ['Visually striking design', 'Perfect for creative portfolios', 'Modern aesthetic appeal', 'Excellent for digital roles'],
    weaknesses: ['Lower ATS score due to creative layout', 'May not work for traditional industries'],
    suggestions: ['Balance creativity with readability', 'Ensure all text is easily scannable', 'Add more structured content sections'],
    jobMatches: ['UI/UX Designer', 'Creative Director', 'Digital Artist', 'Frontend Developer'],
    skillGaps: ['User Research', 'Design Systems', 'Prototyping Tools'],
    industryTrends: ['Design thinking', 'User-centered design', 'Digital transformation'],
    salaryInsights: 'Average salary range: $80K - $130K for creative roles',
    keywords: ['Design', 'Creativity', 'User Experience', 'Visual Design', 'Digital Media']
  },
  {
    id: 'neowave-1',
    name: 'NeoWave Futuristic',
    category: 'modern',
    atsScore: 95,
    preview: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Futuristic wave-inspired design for forward-thinking professionals',
    features: ['Wave Patterns', 'Gradient Backgrounds', 'Modern Icons', 'Fluid Layout'],
    colors: {
      primary: '#667EEA',
      secondary: '#764BA2',
      accent: '#F093FB',
      text: '#2D3748',
      background: '#FFFFFF'
    },
    layout: 'sidebar',
    typography: {
      headingFont: 'Montserrat',
      bodyFont: 'Source Sans Pro',
      fontSize: 'medium'
    },
    overallRating: 9.0,
    strengths: ['Modern and innovative design', 'Excellent for tech-forward companies', 'Strong visual impact', 'Professional yet creative'],
    weaknesses: ['May be too bold for conservative industries', 'Requires careful content organization'],
    suggestions: ['Focus on technical achievements', 'Include innovation metrics', 'Highlight future-thinking projects'],
    jobMatches: ['Innovation Manager', 'Technology Consultant', 'Startup Founder', 'R&D Engineer'],
    skillGaps: ['Emerging Technologies', 'Innovation Management', 'Strategic Planning'],
    industryTrends: ['Digital transformation', 'Innovation culture', 'Future of work'],
    salaryInsights: 'Average salary range: $100K - $160K for innovation roles',
    keywords: ['Innovation', 'Technology', 'Future', 'Strategy', 'Digital Transformation']
  },
  {
    id: 'aurastack-1',
    name: 'AuraStack Dynamic',
    category: 'modern',
    atsScore: 94,
    preview: 'https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Layered design with glowing aura effects for tech professionals',
    features: ['Layered Sections', 'Glow Effects', 'Tech Stack Display', 'Modern Cards'],
    colors: {
      primary: '#00D4FF',
      secondary: '#5B73FF',
      accent: '#9F7AEA',
      text: '#1A202C',
      background: '#F7FAFC'
    },
    layout: 'three-column',
    typography: {
      headingFont: 'Roboto',
      bodyFont: 'Lato',
      fontSize: 'medium'
    },
    overallRating: 8.9,
    strengths: ['Perfect for tech professionals', 'Excellent skill visualization', 'Modern and professional', 'Great for complex skill sets'],
    weaknesses: ['May be overwhelming for non-tech roles', 'Requires careful content organization'],
    suggestions: ['Organize skills by proficiency level', 'Include project impact metrics', 'Add technology stack details'],
    jobMatches: ['Full Stack Developer', 'DevOps Engineer', 'Technical Architect', 'Software Engineer'],
    skillGaps: ['Cloud Platforms', 'Containerization', 'CI/CD Pipelines'],
    industryTrends: ['Cloud-native development', 'Microservices architecture', 'DevOps culture'],
    salaryInsights: 'Average salary range: $110K - $170K for senior tech roles',
    keywords: ['Full Stack', 'Technology', 'Development', 'Architecture', 'DevOps']
  },
  {
    id: 'glintlab-1',
    name: 'GlintLab Research',
    category: 'technical',
    atsScore: 97,
    preview: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Laboratory-inspired design with metallic accents for researchers',
    features: ['Lab Theme', 'Metallic Accents', 'Research Focus', 'Publication List'],
    colors: {
      primary: '#718096',
      secondary: '#4A5568',
      accent: '#ED8936',
      text: '#2D3748',
      background: '#FFFFFF'
    },
    layout: 'two-column',
    typography: {
      headingFont: 'IBM Plex Sans',
      bodyFont: 'IBM Plex Sans',
      fontSize: 'medium'
    },
    overallRating: 9.3,
    strengths: ['Excellent for research roles', 'High ATS compatibility', 'Professional academic appearance', 'Perfect for publications'],
    weaknesses: ['May be too formal for industry roles', 'Limited creative expression'],
    suggestions: ['Include research impact metrics', 'Add collaboration details', 'Highlight innovation in research'],
    jobMatches: ['Research Scientist', 'Data Scientist', 'Academic Researcher', 'R&D Engineer'],
    skillGaps: ['Industry Applications', 'Commercialization', 'Cross-functional Collaboration'],
    industryTrends: ['AI/ML research', 'Data-driven decision making', 'Interdisciplinary research'],
    salaryInsights: 'Average salary range: $90K - $150K for research positions',
    keywords: ['Research', 'Analysis', 'Data', 'Innovation', 'Publications']
  },
  {
    id: 'craftfolio-1',
    name: 'Craftfolio Artisan',
    category: 'artistic',
    atsScore: 90,
    preview: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Handcrafted aesthetic for artists and creative professionals',
    features: ['Handcrafted Look', 'Artistic Elements', 'Portfolio Gallery', 'Creative Typography'],
    colors: {
      primary: '#D69E2E',
      secondary: '#B7791F',
      accent: '#F6E05E',
      text: '#2D3748',
      background: '#FFFAF0'
    },
    layout: 'asymmetric',
    typography: {
      headingFont: 'Crimson Text',
      bodyFont: 'Libre Baskerville',
      fontSize: 'medium'
    },
    overallRating: 8.5,
    strengths: ['Unique artistic appeal', 'Perfect for creative portfolios', 'Handcrafted aesthetic', 'Excellent for artistic roles'],
    weaknesses: ['Lower ATS score', 'May not work for corporate roles', 'Limited professional appeal'],
    suggestions: ['Balance artistry with professionalism', 'Include business impact of creative work', 'Add measurable achievements'],
    jobMatches: ['Art Director', 'Creative Designer', 'Visual Artist', 'Brand Designer'],
    skillGaps: ['Business Strategy', 'Client Management', 'Project Management'],
    industryTrends: ['Creative technology', 'Digital art', 'Brand storytelling'],
    salaryInsights: 'Average salary range: $70K - $120K for creative roles',
    keywords: ['Creativity', 'Design', 'Art', 'Visual', 'Portfolio']
  },
  {
    id: 'skytrail-1',
    name: 'SkyTrail Explorer',
    category: 'modern',
    atsScore: 93,
    preview: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Sky-inspired design with cloud patterns for aviation and travel industry',
    features: ['Sky Theme', 'Cloud Patterns', 'Travel Icons', 'Horizon Layout'],
    colors: {
      primary: '#3182CE',
      secondary: '#2C5282',
      accent: '#63B3ED',
      text: '#2D3748',
      background: '#EBF8FF'
    },
    layout: 'header-focus',
    typography: {
      headingFont: 'Nunito',
      bodyFont: 'Nunito Sans',
      fontSize: 'medium'
    },
    overallRating: 8.7,
    strengths: ['Perfect for travel/aviation industry', 'Professional yet approachable', 'Good ATS compatibility', 'Clean layout'],
    weaknesses: ['Industry-specific design', 'May not work for other sectors'],
    suggestions: ['Include global experience', 'Add language skills', 'Highlight cross-cultural competencies'],
    jobMatches: ['Travel Manager', 'Aviation Professional', 'International Business', 'Tourism Director'],
    skillGaps: ['Digital Marketing', 'Customer Experience', 'Data Analytics'],
    industryTrends: ['Sustainable tourism', 'Digital transformation', 'Customer experience'],
    salaryInsights: 'Average salary range: $75K - $130K for travel/aviation roles',
    keywords: ['Travel', 'Aviation', 'International', 'Customer Service', 'Global']
  },
  {
    id: 'vantaport-1',
    name: 'VantaPort Dynamic',
    category: 'modern',
    atsScore: 95,
    preview: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Dynamic animated background effects for modern professionals',
    features: ['Animated Backgrounds', 'Dynamic Effects', 'Modern Layout', 'Interactive Elements'],
    colors: {
      primary: '#805AD5',
      secondary: '#6B46C1',
      accent: '#9F7AEA',
      text: '#1A202C',
      background: '#F7FAFC'
    },
    layout: 'sidebar',
    typography: {
      headingFont: 'Space Grotesk',
      bodyFont: 'Inter',
      fontSize: 'medium'
    },
    overallRating: 8.9,
    strengths: ['Dynamic and engaging design', 'Perfect for modern tech companies', 'Interactive elements', 'Professional yet creative'],
    weaknesses: ['May be too flashy for conservative industries', 'Requires careful content balance'],
    suggestions: ['Focus on technical achievements', 'Include innovation metrics', 'Highlight dynamic projects'],
    jobMatches: ['Frontend Developer', 'UI/UX Designer', 'Creative Technologist', 'Digital Product Manager'],
    skillGaps: ['Animation Libraries', 'Interactive Design', 'Performance Optimization'],
    industryTrends: ['Interactive experiences', 'Digital innovation', 'User engagement'],
    salaryInsights: 'Average salary range: $90K - $150K for interactive roles',
    keywords: ['Interactive', 'Dynamic', 'Animation', 'User Experience', 'Digital Innovation']
  },
  {
    id: 'codexgrid-1',
    name: 'CodexGrid Developer',
    category: 'technical',
    atsScore: 98,
    preview: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Grid-based layout perfect for developers and engineers',
    features: ['Grid Layout', 'Code Snippets', 'Tech Stack', 'Project Grid'],
    colors: {
      primary: '#1A202C',
      secondary: '#2D3748',
      accent: '#4FD1C7',
      text: '#E2E8F0',
      background: '#171923'
    },
    layout: 'grid',
    typography: {
      headingFont: 'Fira Code',
      bodyFont: 'Source Code Pro',
      fontSize: 'medium'
    },
    overallRating: 9.4,
    strengths: ['Perfect for developers', 'Excellent code visualization', 'High ATS compatibility', 'Professional tech appearance'],
    weaknesses: ['May be too technical for non-tech roles', 'Dark theme may not work for all industries'],
    suggestions: ['Include code snippets', 'Add project impact metrics', 'Highlight technical achievements'],
    jobMatches: ['Software Engineer', 'Full Stack Developer', 'DevOps Engineer', 'Technical Lead'],
    skillGaps: ['Cloud Platforms', 'Containerization', 'CI/CD Pipelines'],
    industryTrends: ['Cloud-native development', 'Microservices', 'DevOps culture'],
    salaryInsights: 'Average salary range: $100K - $180K for senior developers',
    keywords: ['Development', 'Programming', 'Technology', 'Code', 'Software Engineering']
  },
  {
    id: 'devloom-1',
    name: 'DevLoom Weaver',
    category: 'technical',
    atsScore: 96,
    preview: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Woven pattern design for full-stack developers',
    features: ['Woven Patterns', 'Full-Stack Focus', 'Technology Weave', 'Modern Cards'],
    colors: {
      primary: '#38B2AC',
      secondary: '#319795',
      accent: '#4FD1C7',
      text: '#2D3748',
      background: '#F0FFF4'
    },
    layout: 'two-column',
    typography: {
      headingFont: 'Ubuntu',
      bodyFont: 'Ubuntu',
      fontSize: 'medium'
    },
    overallRating: 9.1,
    strengths: ['Perfect for full-stack developers', 'Excellent skill organization', 'Professional appearance', 'Good ATS compatibility'],
    weaknesses: ['May be overwhelming for junior developers', 'Requires careful content organization'],
    suggestions: ['Organize skills by stack', 'Include project impact metrics', 'Add technology proficiency levels'],
    jobMatches: ['Full Stack Developer', 'Software Architect', 'Technical Lead', 'Senior Developer'],
    skillGaps: ['Cloud Architecture', 'System Design', 'Performance Optimization'],
    industryTrends: ['Full-stack development', 'Microservices', 'Cloud platforms'],
    salaryInsights: 'Average salary range: $110K - $170K for full-stack roles',
    keywords: ['Full Stack', 'Development', 'Architecture', 'Technology', 'Software']
  },
  {
    id: 'coderipple-1',
    name: 'CodeRipple Innovation',
    category: 'technical',
    atsScore: 94,
    preview: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Ripple effect design for innovative developers',
    features: ['Ripple Effects', 'Code Animations', 'Dynamic Layout', 'Tech Showcase'],
    colors: {
      primary: '#667EEA',
      secondary: '#764BA2',
      accent: '#A78BFA',
      text: '#1A202C',
      background: '#FFFFFF'
    },
    layout: 'timeline',
    typography: {
      headingFont: 'JetBrains Mono',
      bodyFont: 'Inter',
      fontSize: 'medium'
    },
    overallRating: 8.8,
    strengths: ['Innovative design', 'Perfect for creative developers', 'Dynamic layout', 'Modern aesthetic'],
    weaknesses: ['Lower ATS score due to creative layout', 'May not work for conservative companies'],
    suggestions: ['Balance creativity with professionalism', 'Include innovation metrics', 'Highlight creative solutions'],
    jobMatches: ['Creative Developer', 'Innovation Engineer', 'R&D Developer', 'Startup Developer'],
    skillGaps: ['Innovation Management', 'Creative Problem Solving', 'Emerging Technologies'],
    industryTrends: ['Creative technology', 'Innovation culture', 'Emerging tech'],
    salaryInsights: 'Average salary range: $95K - $150K for innovative roles',
    keywords: ['Innovation', 'Creative', 'Development', 'Technology', 'Emerging Tech']
  },
  // Classic Templates
  {
    id: 'classic-1',
    name: 'Traditional Elite',
    category: 'classic',
    atsScore: 95,
    preview: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Time-tested format preferred by traditional industries',
    features: ['Conservative Design', 'Standard Layout', 'Professional Fonts', 'Industry Standard'],
    colors: {
      primary: '#1F2937',
      secondary: '#374151',
      accent: '#4B5563',
      text: '#111827',
      background: '#FFFFFF'
    },
    layout: 'single-column',
    typography: {
      headingFont: 'Times New Roman',
      bodyFont: 'Times New Roman',
      fontSize: 'medium'
    },
    overallRating: 9.0,
    strengths: ['Excellent for traditional industries', 'High ATS compatibility', 'Professional appearance', 'Industry standard'],
    weaknesses: ['May be too conservative for creative roles', 'Limited visual appeal'],
    suggestions: ['Focus on achievements', 'Include industry-specific keywords', 'Add quantifiable results'],
    jobMatches: ['Finance Professional', 'Legal Professional', 'Healthcare Professional', 'Government Employee'],
    skillGaps: ['Digital Skills', 'Modern Tools', 'Innovation'],
    industryTrends: ['Digital transformation', 'Modernization', 'Technology adoption'],
    salaryInsights: 'Average salary range: $80K - $140K for traditional roles',
    keywords: ['Professional', 'Traditional', 'Industry', 'Experience', 'Leadership']
  },
  {
    id: 'classic-2',
    name: 'Corporate Standard',
    category: 'classic',
    atsScore: 93,
    preview: 'https://images.pexels.com/photos/1181407/pexels-photo-1181407.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Perfect for corporate environments and formal applications',
    features: ['Corporate Style', 'Formal Layout', 'Conservative Colors', 'Professional Appeal'],
    colors: {
      primary: '#1E40AF',
      secondary: '#1D4ED8',
      accent: '#3B82F6',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'single-column',
    typography: {
      headingFont: 'Arial',
      bodyFont: 'Arial',
      fontSize: 'medium'
    },
    overallRating: 8.7,
    strengths: ['Perfect for corporate roles', 'Professional appearance', 'Good ATS compatibility', 'Conservative design'],
    weaknesses: ['May be too formal for creative roles', 'Limited visual appeal'],
    suggestions: ['Focus on corporate achievements', 'Include business impact', 'Add leadership examples'],
    jobMatches: ['Business Analyst', 'Project Manager', 'Corporate Manager', 'Consultant'],
    skillGaps: ['Digital Transformation', 'Innovation', 'Modern Tools'],
    industryTrends: ['Digital transformation', 'Agile methodologies', 'Data-driven decisions'],
    salaryInsights: 'Average salary range: $85K - $140K for corporate roles',
    keywords: ['Corporate', 'Business', 'Management', 'Leadership', 'Strategy']
  },
  // Executive Templates
  {
    id: 'executive-1',
    name: 'Leadership Excellence',
    category: 'executive',
    atsScore: 97,
    preview: 'https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Designed for C-level executives and senior management',
    features: ['Executive Summary', 'Board Experience', 'Strategic Achievements', 'Leadership Focus'],
    colors: {
      primary: '#7C2D12',
      secondary: '#92400E',
      accent: '#D97706',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'header-focus',
    typography: {
      headingFont: 'Merriweather',
      bodyFont: 'Source Sans Pro',
      fontSize: 'large'
    },
    overallRating: 9.5,
    strengths: ['Perfect for executives', 'Excellent leadership focus', 'High ATS compatibility', 'Professional appearance'],
    weaknesses: ['May be too formal for startup roles', 'Requires extensive experience'],
    suggestions: ['Focus on strategic achievements', 'Include board experience', 'Highlight leadership impact'],
    jobMatches: ['CEO', 'CTO', 'CFO', 'VP of Engineering', 'Board Member'],
    skillGaps: ['Digital Innovation', 'Modern Leadership', 'Agile Transformation'],
    industryTrends: ['Digital leadership', 'Innovation culture', 'Agile transformation'],
    salaryInsights: 'Average salary range: $150K - $300K+ for executive roles',
    keywords: ['Leadership', 'Strategy', 'Executive', 'Board', 'Management']
  },
  {
    id: 'executive-2',
    name: 'Board Member Elite',
    category: 'executive',
    atsScore: 98,
    preview: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Distinguished template for board positions',
    features: ['Board Experience', 'Governance Skills', 'Strategic Vision', 'Industry Expertise'],
    colors: {
      primary: '#1E40AF',
      secondary: '#1D4ED8',
      accent: '#60A5FA',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'two-column',
    typography: {
      headingFont: 'Playfair Display',
      bodyFont: 'Lora',
      fontSize: 'large'
    },
    overallRating: 9.6,
    strengths: ['Perfect for board positions', 'Excellent governance focus', 'Highest ATS compatibility', 'Distinguished appearance'],
    weaknesses: ['Requires extensive board experience', 'May be too formal for other roles'],
    suggestions: ['Focus on governance experience', 'Include board achievements', 'Highlight strategic vision'],
    jobMatches: ['Board Member', 'Board Chair', 'Governance Expert', 'Strategic Advisor'],
    skillGaps: ['Digital Governance', 'Modern Board Practices', 'Innovation Leadership'],
    industryTrends: ['Digital governance', 'Modern board practices', 'Innovation leadership'],
    salaryInsights: 'Average compensation: $50K - $200K+ for board positions',
    keywords: ['Board', 'Governance', 'Strategy', 'Leadership', 'Advisory']
  },
  // Minimalist Templates
  {
    id: 'minimalist-1',
    name: 'Clean Slate Pro',
    category: 'minimalist',
    atsScore: 98,
    preview: 'https://images.pexels.com/photos/590024/pexels-photo-590024.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Ultra-minimal design focusing on content',
    features: ['Maximum Readability', 'Clean Lines', 'Perfect Spacing', 'Content Focus'],
    colors: {
      primary: '#000000',
      secondary: '#374151',
      accent: '#6B7280',
      text: '#111827',
      background: '#FFFFFF'
    },
    layout: 'single-column',
    typography: {
      headingFont: 'Helvetica',
      bodyFont: 'Helvetica',
      fontSize: 'medium'
    },
    overallRating: 9.3,
    strengths: ['Maximum readability', 'Perfect ATS compatibility', 'Clean design', 'Content-focused'],
    weaknesses: ['May be too plain for creative roles', 'Limited visual appeal'],
    suggestions: ['Focus on content quality', 'Include quantifiable achievements', 'Ensure perfect formatting'],
    jobMatches: ['Content Writer', 'Editor', 'Researcher', 'Analyst'],
    skillGaps: ['Visual Design', 'Creative Skills', 'Digital Tools'],
    industryTrends: ['Content creation', 'Digital publishing', 'Information design'],
    salaryInsights: 'Average salary range: $60K - $120K for content roles',
    keywords: ['Content', 'Writing', 'Analysis', 'Research', 'Communication']
  },
  {
    id: 'minimalist-2',
    name: 'Essential Minimal',
    category: 'minimalist',
    atsScore: 96,
    preview: 'https://images.pexels.com/photos/590025/pexels-photo-590025.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Essential information with clean, minimal design',
    features: ['Essential Information', 'Clean Design', 'Perfect Spacing', 'Readable Typography'],
    colors: {
      primary: '#374151',
      secondary: '#6B7280',
      accent: '#9CA3AF',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'single-column',
    typography: {
      headingFont: 'Arial',
      bodyFont: 'Arial',
      fontSize: 'medium'
    },
    overallRating: 8.9,
    strengths: ['Excellent readability', 'Good ATS compatibility', 'Clean design', 'Professional appearance'],
    weaknesses: ['May be too simple for complex roles', 'Limited visual impact'],
    suggestions: ['Focus on essential information', 'Include key achievements', 'Ensure perfect formatting'],
    jobMatches: ['Administrative Professional', 'Coordinator', 'Assistant', 'Entry-level Professional'],
    skillGaps: ['Advanced Skills', 'Specialized Knowledge', 'Leadership'],
    industryTrends: ['Administrative efficiency', 'Digital tools', 'Process optimization'],
    salaryInsights: 'Average salary range: $45K - $80K for administrative roles',
    keywords: ['Administrative', 'Coordination', 'Organization', 'Communication', 'Support']
  },
  // Creative Templates
  {
    id: 'creative-1',
    name: 'Creative Genius',
    category: 'creative',
    atsScore: 88,
    preview: 'https://images.pexels.com/photos/590050/pexels-photo-590050.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Artistic template for creative professionals',
    features: ['Artistic Layout', 'Creative Typography', 'Portfolio Integration', 'Visual Elements'],
    colors: {
      primary: '#EC4899',
      secondary: '#DB2777',
      accent: '#FBCFE8',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'asymmetric',
    typography: {
      headingFont: 'Dancing Script',
      bodyFont: 'Lato',
      fontSize: 'medium'
    },
    overallRating: 8.3,
    strengths: ['Unique artistic design', 'Perfect for creative portfolios', 'Visual impact', 'Creative expression'],
    weaknesses: ['Lower ATS score', 'May not work for corporate roles', 'Limited professional appeal'],
    suggestions: ['Balance creativity with readability', 'Include business impact', 'Add measurable achievements'],
    jobMatches: ['Creative Director', 'Art Director', 'Visual Designer', 'Brand Designer'],
    skillGaps: ['Business Strategy', 'Client Management', 'Project Management'],
    industryTrends: ['Creative technology', 'Digital art', 'Brand storytelling'],
    salaryInsights: 'Average salary range: $70K - $130K for creative roles',
    keywords: ['Creativity', 'Design', 'Art', 'Visual', 'Portfolio']
  },
  {
    id: 'creative-2',
    name: 'Visual Artist Pro',
    category: 'creative',
    atsScore: 87,
    preview: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Visual-focused template for artists and designers',
    features: ['Visual Portfolio', 'Artistic Elements', 'Creative Sections', 'Gallery Layout'],
    colors: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#DDD6FE',
      text: '#374151',
      background: '#FEFEFE'
    },
    layout: 'grid',
    typography: {
      headingFont: 'Abril Fatface',
      bodyFont: 'Source Sans Pro',
      fontSize: 'medium'
    },
    overallRating: 8.1,
    strengths: ['Excellent visual appeal', 'Perfect for artists', 'Creative layout', 'Portfolio showcase'],
    weaknesses: ['Low ATS score', 'May not work for business roles', 'Limited text focus'],
    suggestions: ['Include business impact', 'Add measurable achievements', 'Balance visuals with content'],
    jobMatches: ['Visual Artist', 'Graphic Designer', 'Illustrator', 'Digital Artist'],
    skillGaps: ['Business Skills', 'Client Management', 'Marketing'],
    industryTrends: ['Digital art', 'NFTs', 'Creative technology'],
    salaryInsights: 'Average salary range: $60K - $110K for visual artists',
    keywords: ['Visual', 'Art', 'Design', 'Creative', 'Portfolio']
  },
  // Startup Templates
  {
    id: 'startup-1',
    name: 'Startup Founder',
    category: 'startup',
    atsScore: 95,
    preview: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Dynamic template for entrepreneurs and startup founders',
    features: ['Innovation Focus', 'Venture Highlights', 'Growth Metrics', 'Vision Statement'],
    colors: {
      primary: '#F59E0B',
      secondary: '#D97706',
      accent: '#FBBF24',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'asymmetric',
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
      fontSize: 'medium'
    },
    overallRating: 9.0,
    strengths: ['Perfect for entrepreneurs', 'Innovation focus', 'High ATS compatibility', 'Dynamic design'],
    weaknesses: ['May be too bold for corporate roles', 'Requires entrepreneurial experience'],
    suggestions: ['Focus on growth metrics', 'Include innovation achievements', 'Highlight leadership'],
    jobMatches: ['Startup Founder', 'Entrepreneur', 'Innovation Manager', 'Product Manager'],
    skillGaps: ['Corporate Experience', 'Large-scale Management', 'Traditional Business'],
    industryTrends: ['Startup culture', 'Innovation', 'Digital transformation'],
    salaryInsights: 'Variable compensation: equity + salary for startup roles',
    keywords: ['Entrepreneurship', 'Innovation', 'Startup', 'Growth', 'Leadership']
  },
  {
    id: 'startup-2',
    name: 'Disruptor Elite',
    category: 'startup',
    atsScore: 93,
    preview: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Bold design for industry disruptors and innovators',
    features: ['Disruptive Design', 'Innovation Metrics', 'Bold Typography', 'Future Focus'],
    colors: {
      primary: '#EF4444',
      secondary: '#DC2626',
      accent: '#F87171',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'grid',
    typography: {
      headingFont: 'Space Grotesk',
      bodyFont: 'Inter',
      fontSize: 'medium'
    },
    overallRating: 8.8,
    strengths: ['Bold and innovative design', 'Perfect for disruptors', 'High impact', 'Future-focused'],
    weaknesses: ['May be too bold for conservative companies', 'Requires innovation experience'],
    suggestions: ['Focus on disruption metrics', 'Include innovation impact', 'Highlight future vision'],
    jobMatches: ['Innovation Leader', 'Disruptor', 'Change Agent', 'Strategic Innovator'],
    skillGaps: ['Traditional Business', 'Corporate Culture', 'Risk Management'],
    industryTrends: ['Digital disruption', 'Innovation culture', 'Future of work'],
    salaryInsights: 'Average salary range: $100K - $200K for innovation leaders',
    keywords: ['Disruption', 'Innovation', 'Change', 'Future', 'Strategy']
  },
  // Academic Templates
  {
    id: 'academic-1',
    name: 'Research Scholar',
    category: 'academic',
    atsScore: 97,
    preview: 'https://images.pexels.com/photos/590038/pexels-photo-590038.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Perfect for academic and research positions',
    features: ['Publications List', 'Research Focus', 'Academic Achievements', 'Conference Presentations'],
    colors: {
      primary: '#374151',
      secondary: '#1F2937',
      accent: '#9CA3AF',
      text: '#111827',
      background: '#FFFFFF'
    },
    layout: 'two-column',
    typography: {
      headingFont: 'Crimson Text',
      bodyFont: 'Crimson Text',
      fontSize: 'medium'
    },
    overallRating: 9.4,
    strengths: ['Perfect for academic roles', 'Excellent publication display', 'High ATS compatibility', 'Professional academic appearance'],
    weaknesses: ['May be too formal for industry roles', 'Limited creative expression'],
    suggestions: ['Include research impact', 'Add collaboration details', 'Highlight innovation'],
    jobMatches: ['Research Scientist', 'Academic Researcher', 'Postdoctoral Fellow', 'Research Associate'],
    skillGaps: ['Industry Applications', 'Commercialization', 'Cross-functional Collaboration'],
    industryTrends: ['Interdisciplinary research', 'Data-driven research', 'Collaborative research'],
    salaryInsights: 'Average salary range: $70K - $120K for research positions',
    keywords: ['Research', 'Publications', 'Academic', 'Analysis', 'Innovation']
  },
  {
    id: 'academic-2',
    name: 'Professor Elite',
    category: 'academic',
    atsScore: 96,
    preview: 'https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Distinguished template for academic professionals',
    features: ['Teaching Experience', 'Research Publications', 'Academic Honors', 'Grant History'],
    colors: {
      primary: '#1E40AF',
      secondary: '#1D4ED8',
      accent: '#DBEAFE',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'single-column',
    typography: {
      headingFont: 'Libre Baskerville',
      bodyFont: 'Libre Baskerville',
      fontSize: 'medium'
    },
    overallRating: 9.2,
    strengths: ['Perfect for professors', 'Excellent teaching focus', 'High ATS compatibility', 'Distinguished appearance'],
    weaknesses: ['May be too formal for industry roles', 'Requires extensive academic experience'],
    suggestions: ['Focus on teaching impact', 'Include research achievements', 'Highlight leadership'],
    jobMatches: ['Professor', 'Associate Professor', 'Assistant Professor', 'Academic Dean'],
    skillGaps: ['Industry Experience', 'Commercial Applications', 'Entrepreneurial Skills'],
    industryTrends: ['Online education', 'Interdisciplinary teaching', 'Research-based teaching'],
    salaryInsights: 'Average salary range: $80K - $150K for professorial positions',
    keywords: ['Teaching', 'Research', 'Academic', 'Leadership', 'Education']
  },
  // Corporate Templates
  {
    id: 'corporate-1',
    name: 'Fortune 500 Elite',
    category: 'corporate',
    atsScore: 96,
    preview: 'https://images.pexels.com/photos/590044/pexels-photo-590044.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium template for Fortune 500 companies',
    features: ['Corporate Branding', 'Executive Summary', 'Performance Metrics', 'Leadership Skills'],
    colors: {
      primary: '#1F2937',
      secondary: '#374151',
      accent: '#6B7280',
      text: '#111827',
      background: '#FFFFFF'
    },
    layout: 'header-focus',
    typography: {
      headingFont: 'Roboto',
      bodyFont: 'Roboto',
      fontSize: 'medium'
    },
    overallRating: 9.1,
    strengths: ['Perfect for Fortune 500', 'Professional appearance', 'High ATS compatibility', 'Corporate focus'],
    weaknesses: ['May be too formal for startups', 'Limited creative expression'],
    suggestions: ['Focus on corporate achievements', 'Include leadership metrics', 'Highlight business impact'],
    jobMatches: ['Corporate Executive', 'Business Leader', 'Senior Manager', 'Corporate Director'],
    skillGaps: ['Startup Experience', 'Innovation Culture', 'Agile Methods'],
    industryTrends: ['Digital transformation', 'Agile leadership', 'Innovation culture'],
    salaryInsights: 'Average salary range: $120K - $250K for corporate executives',
    keywords: ['Corporate', 'Leadership', 'Business', 'Management', 'Strategy']
  },
  {
    id: 'corporate-2',
    name: 'Global Enterprise',
    category: 'corporate',
    atsScore: 95,
    preview: 'https://images.pexels.com/photos/590048/pexels-photo-590048.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'International corporate template with global appeal',
    features: ['Global Experience', 'Multi-cultural Skills', 'International Projects', 'Language Skills'],
    colors: {
      primary: '#059669',
      secondary: '#047857',
      accent: '#A7F3D0',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'two-column',
    typography: {
      headingFont: 'Open Sans',
      bodyFont: 'Open Sans',
      fontSize: 'medium'
    },
    overallRating: 8.9,
    strengths: ['Perfect for global roles', 'International focus', 'Good ATS compatibility', 'Professional appearance'],
    weaknesses: ['May be too formal for local roles', 'Requires international experience'],
    suggestions: ['Focus on global achievements', 'Include cultural competencies', 'Highlight international impact'],
    jobMatches: ['Global Manager', 'International Business', 'Multinational Executive', 'Global Consultant'],
    skillGaps: ['Local Market Knowledge', 'Cultural Specificity', 'Regional Expertise'],
    industryTrends: ['Globalization', 'Cross-cultural leadership', 'International business'],
    salaryInsights: 'Average salary range: $100K - $200K for global roles',
    keywords: ['Global', 'International', 'Multicultural', 'Business', 'Leadership']
  },
  // Additional Modern Templates with Unique Styles
  {
    id: 'modern-quantum',
    name: 'Quantum Pro',
    category: 'modern',
    atsScore: 92,
    preview: 'https://images.pexels.com/photos/590068/pexels-photo-590068.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Quantum-inspired design for cutting-edge professionals',
    features: ['Quantum Effects', 'Particle Animations', 'Scientific Layout', 'Research Focus'],
    colors: {
      primary: '#6366F1',
      secondary: '#4F46E5',
      accent: '#C7D2FE',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'timeline',
    typography: {
      headingFont: 'Orbitron',
      bodyFont: 'Roboto',
      fontSize: 'medium'
    },
    overallRating: 8.6,
    strengths: ['Unique quantum design', 'Perfect for scientific roles', 'Modern aesthetic', 'Research focus'],
    weaknesses: ['May be too scientific for business roles', 'Lower ATS score due to creative layout'],
    suggestions: ['Focus on scientific achievements', 'Include research impact', 'Highlight innovation'],
    jobMatches: ['Quantum Researcher', 'Scientific Professional', 'Research Scientist', 'Innovation Engineer'],
    skillGaps: ['Business Applications', 'Commercialization', 'Market Knowledge'],
    industryTrends: ['Quantum computing', 'Scientific innovation', 'Research commercialization'],
    salaryInsights: 'Average salary range: $90K - $160K for scientific roles',
    keywords: ['Quantum', 'Science', 'Research', 'Innovation', 'Technology']
  },
  {
    id: 'modern-holographic',
    name: 'Holographic Elite',
    category: 'modern',
    atsScore: 91,
    preview: 'https://images.pexels.com/photos/590070/pexels-photo-590070.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Holographic effects for futuristic professionals',
    features: ['Holographic Design', 'Iridescent Colors', 'Future Tech', '3D Elements'],
    colors: {
      primary: '#EC4899',
      secondary: '#DB2777',
      accent: '#FCE7F3',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'asymmetric',
    typography: {
      headingFont: 'Exo 2',
      bodyFont: 'Inter',
      fontSize: 'medium'
    },
    overallRating: 8.4,
    strengths: ['Futuristic design', 'Perfect for tech-forward roles', 'Visual impact', 'Modern aesthetic'],
    weaknesses: ['Low ATS score', 'May not work for traditional roles', 'Limited professional appeal'],
    suggestions: ['Balance futuristic with professional', 'Include business impact', 'Add measurable achievements'],
    jobMatches: ['Futuristic Designer', 'Tech Innovator', 'Creative Technologist', 'Future-focused Professional'],
    skillGaps: ['Traditional Business', 'Conservative Industries', 'Risk Management'],
    industryTrends: ['Future technology', 'Innovation culture', 'Digital transformation'],
    salaryInsights: 'Average salary range: $80K - $140K for futuristic roles',
    keywords: ['Futuristic', 'Technology', 'Innovation', 'Design', 'Future']
  },
  {
    id: 'modern-digital-native',
    name: 'Digital Native Pro',
    category: 'modern',
    atsScore: 94,
    preview: 'https://images.pexels.com/photos/590062/pexels-photo-590062.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Born-digital template for modern professionals',
    features: ['Digital Focus', 'Social Media Integration', 'Online Portfolio', 'Tech Savvy'],
    colors: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#DDD6FE',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'grid',
    typography: {
      headingFont: 'Inter',
      bodyFont: 'Inter',
      fontSize: 'medium'
    },
    overallRating: 8.9,
    strengths: ['Perfect for digital roles', 'Modern design', 'Good ATS compatibility', 'Tech-savvy appearance'],
    weaknesses: ['May be too modern for traditional roles', 'Requires digital experience'],
    suggestions: ['Focus on digital achievements', 'Include online presence', 'Highlight tech skills'],
    jobMatches: ['Digital Marketer', 'Social Media Manager', 'Digital Product Manager', 'Tech Professional'],
    skillGaps: ['Traditional Marketing', 'Offline Business', 'Conservative Industries'],
    industryTrends: ['Digital transformation', 'Social media', 'Online business'],
    salaryInsights: 'Average salary range: $70K - $130K for digital roles',
    keywords: ['Digital', 'Technology', 'Online', 'Social Media', 'Modern']
  },
  {
    id: 'modern-future-ready',
    name: 'Future Ready Elite',
    category: 'modern',
    atsScore: 93,
    preview: 'https://images.pexels.com/photos/590066/pexels-photo-590066.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Future-focused design for next-gen professionals',
    features: ['Future Design', 'AI Integration', 'Automation Focus', 'Innovation Metrics'],
    colors: {
      primary: '#0891B2',
      secondary: '#0E7490',
      accent: '#CFFAFE',
      text: '#1F2937',
      background: '#FFFFFF'
    },
    layout: 'three-column',
    typography: {
      headingFont: 'Space Grotesk',
      bodyFont: 'Inter',
      fontSize: 'medium'
    },
    overallRating: 8.7,
    strengths: ['Future-focused design', 'Perfect for AI/automation roles', 'Modern aesthetic', 'Innovation focus'],
    weaknesses: ['May be too futuristic for traditional roles', 'Requires future-tech experience'],
    suggestions: ['Focus on AI/automation achievements', 'Include innovation metrics', 'Highlight future vision'],
    jobMatches: ['AI Engineer', 'Automation Specialist', 'Future Technology Leader', 'Innovation Manager'],
    skillGaps: ['Traditional Business', 'Legacy Systems', 'Conservative Industries'],
    industryTrends: ['AI/ML integration', 'Automation', 'Future technology'],
    salaryInsights: 'Average salary range: $100K - $180K for future-tech roles',
    keywords: ['AI', 'Automation', 'Future', 'Innovation', 'Technology']
  }
];

export const getTemplatesByCategory = (category: string) => {
  return resumeTemplates.filter(template => template.category === category);
};

export const getTemplateById = (id: string) => {
  return resumeTemplates.find(template => template.id === id);
};

export const getHighestATSTemplates = (limit: number = 10) => {
  return resumeTemplates
    .sort((a, b) => b.atsScore - a.atsScore)
    .slice(0, limit);
};

export const getTemplatesByAtsScore = (minScore: number = 90) => {
  return resumeTemplates.filter(template => template.atsScore >= minScore);
};

export const searchTemplates = (query: string) => {
  const searchTerm = query.toLowerCase();
  return resumeTemplates.filter(template => 
    template.name.toLowerCase().includes(searchTerm) ||
    template.description.toLowerCase().includes(searchTerm) ||
    template.category.toLowerCase().includes(searchTerm) ||
    template.features.some(feature => feature.toLowerCase().includes(searchTerm))
  );
};