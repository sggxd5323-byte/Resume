// Job Service - Now integrated with local storage
import { jobStorage, Job, JobFilters } from './jobStorageService';

const API_BASE_URL = 'https://trinidad-turner-install-zus.trycloudflare.com';

// Cache for API responses
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getCachedData = (key: string) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key: string, data: any) => {
  cache.set(key, { data, timestamp: Date.now() });
};

// Main job search function
export const searchJobs = async (query: string = '', filters: JobFilters = {}, forceAPI: boolean = false): Promise<Job[]> => {
  // If not forcing API call, return from local storage
  if (!forceAPI) {
    return jobStorage.getFilteredJobs(query, filters);
  }

  // Try to fetch from API and sync to local storage
  try {
    const response = await fetch(`${API_BASE_URL}/jobs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const apiJobs = Array.isArray(data) ? data : (data.jobs || data.data || []);
    
    // Sync with local storage
    jobStorage.syncJobsFromAPI(apiJobs);
    
    // Return filtered results from local storage
    return jobStorage.getFilteredJobs(query, filters);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    // Return from local storage if API fails
    return jobStorage.getFilteredJobs(query, filters);
  }
};

// Get job details by ID
export const getJobById = async (jobId: string): Promise<Job | null> => {
  return jobStorage.getJobById(jobId);
};

// Get recommended jobs (now just returns all jobs since no login required)
export const getRecommendedJobs = async (skills: string[], experience?: string): Promise<Job[]> => {
  // Since no login required, just return filtered jobs based on skills
  return jobStorage.getFilteredJobs('', { skills });
};

// Get job market analytics
export const getJobMarketAnalytics = async () => {
  try {
    const jobs = jobStorage.getAllJobs();
    const stats = jobStorage.getJobStats();
    return {
      totalJobs: stats.total,
      trendingSkills: extractTrendingSkills(jobs),
      topCompanies: extractTopCompanies(jobs),
      averageSalary: '₹12-25 LPA',
      growthRate: '15%',
      remoteJobs: stats.remoteJobs,
      companies: stats.companies,
      locations: stats.locations
    };
  } catch (error) {
    console.error('Error fetching market analytics:', error);
    return {
      totalJobs: 0,
      trendingSkills: ['JavaScript', 'React', 'Python', 'Node.js'],
      topCompanies: ['Google', 'Microsoft', 'Amazon', 'Meta'],
      averageSalary: '₹12-25 LPA',
      growthRate: '15%'
    };
  }
};

// Extract trending skills from jobs
const extractTrendingSkills = (jobs: Job[]): string[] => {
  const skillCount = new Map<string, number>();
  
  jobs.forEach(job => {
    job.skills.forEach(skill => {
      skillCount.set(skill, (skillCount.get(skill) || 0) + 1);
    });
  });
  
  return Array.from(skillCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([skill]) => skill);
};

// Extract top companies from jobs
const extractTopCompanies = (jobs: Job[]): string[] => {
  const companyCount = new Map<string, number>();
  
  jobs.forEach(job => {
    companyCount.set(job.company, (companyCount.get(job.company) || 0) + 1);
  });
  
  return Array.from(companyCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([company]) => company);
};

// Record user job search for analytics (optional)
export const recordUserJobSearch = async (query: string, location?: string) => {
  try {
    // You can implement analytics endpoint if needed
    console.log('Search recorded:', { query, location });
  } catch (error) {
    console.error('Error recording search:', error);
  }
};

// Share job function
export const shareJob = (job: Job): void => {
  const shareUrl = `${window.location.origin}/job/${job.id}`;
  const shareText = `Check out this job: ${job.title} at ${job.company}`;
  
  if (navigator.share) {
    navigator.share({
      title: shareText,
      url: shareUrl,
    }).catch(console.error);
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareUrl).then(() => {
      console.log('Job link copied to clipboard');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  }
};

// Export re-exports for compatibility
export { Job, JobFilters } from './jobStorageService';
