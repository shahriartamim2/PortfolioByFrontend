export const SITE_URL = 'https://abdullahnomancv.netlify.app';
export const SITE_NAME = 'Abdullah Noman Portfolio';
export const SITE_TITLE = 'Abdullah Noman - Textile Engineer & Software Developer';
export const SITE_DESCRIPTION =
  'Portfolio of Abdullah Noman, a BUTEX textile engineer and software developer building tools for textile quality, costing, dashboards, and production workflows.';

export const PROFILE = {
  name: 'Abdullah Noman',
  jobTitle: 'Textile Engineer & Software Developer',
  location: 'Dhaka, Bangladesh',
  email: 'abdullahnoman001@gmail.com',
  university: 'Bangladesh University of Textiles (BUTEX)',
  cvUrl: 'https://drive.google.com/file/d/11JvOuSDxDlGG8ERPoG5KH46_SV_-LUyV/view?usp=drivesdk',
  github: 'https://github.com/shahriartamim2',
  linkedin: 'https://www.linkedin.com/in/me-noman/',
  facebook: 'https://www.facebook.com/abdnoman001',
};

export function toAbsoluteUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const normalizedPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalizedPath}`;
}
