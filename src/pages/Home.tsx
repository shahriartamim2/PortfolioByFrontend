import {
  Award,
  Briefcase,
  Code,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  TrendingUp,
  Trophy,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { PROFILE, SITE_DESCRIPTION, SITE_URL } from '../config/site';
import profileImage from '../images/profile-optimized.webp';
import MyWorks from './MyWorks';

const skills = {
  technical: [
    'Quality Control Systems',
    'Fabric Analysis',
    'Production Planning',
    'Process Engineering',
    'Process Optimization',
  ],
  specialized: [
    'Dyeing & Finishing Technology',
    'Fabric Testing Standards',
    'Yarn Manufacturing',
    'Fabric Manufacturing',
    'ISO Quality Standards',
  ],
  software: [
    'Excel',
    'Word',
    'Power BI',
    'MS Access',
    'SPSS',
    'R Studio',
    'Python',
  ],
};

const experiences = [
  {
    title: 'Intern',
    company: 'Mosaraf Composite Textile Mills Ltd',
    period: 'August 2025 - September 2025',
    description:
      'Gained hands-on experience across textile manufacturing processes including spinning, knitting, dyeing, finishing, quality control, and production planning.',
  },
];

const education = [
  {
    degree: 'B.Sc. in Textile Engineering',
    institution: 'Bangladesh University of Textiles (BUTEX)',
    year: '2025',
    subject: 'Specialized in Yarn Manufacturing',
    result: 'First Class',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Govt. KC College, Jhenidah',
    year: '2019',
    subject: 'Science',
    result: 'GPA - 5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Joradah Secondary School, Harinakundu',
    year: '2017',
    subject: 'Science',
    result: 'GPA - 5.00',
  },
];

const certifications = [
  'ICPC Dhaka Regional Finalist 2024',
  'Python for Data Science & AI',
  'Python course offered by University of Michigan',
  'Management',
];

const achievements = [
  'Completed a thesis on fiber and yarn recycling technologies.',
];

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: PROFILE.name,
    jobTitle: PROFILE.jobTitle,
    email: `mailto:${PROFILE.email}`,
    url: SITE_URL,
    sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.facebook],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: PROFILE.university,
    },
  },
};

export default function Home() {
  return (
    <main>
      <SEO
        title="About"
        description={SITE_DESCRIPTION}
        keywords="Abdullah Noman, Textile Engineer, Software Developer, BUTEX, Yarn Manufacturing, Quality Control, Textile Software, Power BI"
        canonicalUrl="/about"
        structuredData={profileSchema}
      />

      <section id="home" className="page-shell pb-0">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-stretch">
          <div className="paper-panel p-5 sm:p-8 lg:p-10">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="miro-label">Profile Report</span>
              <span className="mono-note">ID: textile_engineer_software_developer</span>
            </div>

            <div className="max-w-4xl">
              <p className="mb-4 text-lg font-bold text-[var(--ink-muted)]">Hi, I am</p>
              <h1 className="page-title max-w-4xl">
                Abdullah Noman
              </h1>
              <p className="section-copy mt-6 max-w-2xl text-lg">
                Innovating textile manufacturing through quality systems, sustainable process thinking, and software that makes production work easier to understand.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer" className="primary-button">
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                View CV
              </a>
              <Link to="/works" className="secondary-button">
                Explore Works
              </Link>
            </div>

            <div className="mt-8 grid gap-3 border-t border-[var(--line)] pt-6 md:grid-cols-2">
              <div className="flex items-center gap-3 text-[var(--ink-muted)]">
                <span className="icon-button h-10 w-10">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold">{PROFILE.location}</span>
              </div>
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-[var(--ink-muted)] transition-colors hover:text-[var(--ink-strong)]">
                <span className="icon-button h-10 w-10">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="break-all text-sm font-bold">{PROFILE.email}</span>
              </a>
            </div>
          </div>

          <aside className="paper-panel overflow-hidden">
            <div className="border-b border-[var(--line)] p-5">
              <p className="mono-note">Status</p>
              <h2 className="mt-2 text-2xl font-black text-[var(--ink-strong)]">Ready for collaboration</h2>
            </div>
            <div className="p-5">
              <div className="mx-auto aspect-square max-w-64 overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--panel-muted)]">
                <img
                  src={profileImage}
                  alt="Portrait of Abdullah Noman"
                  className="h-full w-full object-cover"
                  width="520"
                  height="520"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="secondary-button">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="secondary-button">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="section-block">
        <div className="narrow-shell">
          <div className="mb-8 flex items-center justify-between gap-4">
            <span className="miro-label">About</span>
            <span className="mono-note">Textile + software</span>
          </div>
          <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
            <h2 className="section-title">A practical engineer building clearer textile workflows.</h2>
            <div className="space-y-5 section-copy">
              <p>
                I am a passionate Textile Engineer with focused experience in yarn manufacturing, quality control systems, and production process optimization.
              </p>
              <p>
                My work connects textile operations with modern software, helping teams move from scattered manual processes toward structured, reliable, and searchable systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-block">
        <div className="narrow-shell">
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="grid gap-4">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.period}`} className="surface-card p-5 sm:p-6">
                <p className="mono-note">{exp.period}</p>
                <h3 className="mt-2 text-2xl font-black text-[var(--ink-strong)]">{exp.title}</h3>
                <p className="mt-1 font-bold text-[var(--ink-muted)]">{exp.company}</p>
                <p className="section-copy mt-4">{exp.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-block">
        <div className="narrow-shell">
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />
            <h2 className="section-title">Education</h2>
          </div>
          <div className="grid gap-4">
            {education.map((edu) => (
              <article key={`${edu.degree}-${edu.year}`} className="surface-card grid gap-4 p-5 sm:grid-cols-[5.5rem_1fr] sm:p-6">
                <div className="mono-note">{edu.year}</div>
                <div>
                  <h3 className="text-xl font-black text-[var(--ink-strong)]">{edu.degree}</h3>
                  <p className="mt-1 font-bold text-[var(--ink-muted)]">{edu.institution}</p>
                  <p className="section-copy mt-3">{edu.subject}</p>
                  <p className="mt-2 text-sm font-black text-[var(--ink-strong)]">Result: {edu.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-block">
        <div className="narrow-shell">
          <div className="mb-8 flex items-center gap-3">
            <Code className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />
            <h2 className="section-title">Skills</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {Object.entries(skills).map(([category, skillList], index) => (
              <article key={category} className="surface-card p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  {index === 0 && <Award className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />}
                  {index === 1 && <TrendingUp className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />}
                  {index === 2 && <Code className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />}
                  <h3 className="text-xl font-black capitalize text-[var(--ink-strong)]">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MyWorks embedded />

      <section id="certifications" className="section-block">
        <div className="narrow-shell">
          <div className="mb-8 flex items-center gap-3">
            <Award className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />
            <h2 className="section-title">Certifications</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert} className="surface-card flex items-start gap-3 p-4">
                <Award className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-ink)]" aria-hidden="true" />
                <span className="font-bold text-[var(--ink)]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="section-block">
        <div className="narrow-shell">
          <div className="mb-8 flex items-center gap-3">
            <Trophy className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />
            <h2 className="section-title">Achievements</h2>
          </div>
          <div className="grid gap-3">
            {achievements.map((achievement) => (
              <div key={achievement} className="surface-card flex items-start gap-3 p-4">
                <Trophy className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-ink)]" aria-hidden="true" />
                <span className="font-bold text-[var(--ink)]">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] px-4 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <span className="miro-label">Contact</span>
          <h2 className="text-3xl font-black text-[var(--ink-strong)]">Let us build something practical.</h2>
          <p className="section-copy max-w-2xl">
            Open to textile engineering roles, software collaborations, dashboard work, and tools for production teams.
          </p>
          <Link to="/contact" className="primary-button">
            Get in touch
          </Link>
          <p className="mono-note">Copyright {new Date().getFullYear()} Abdullah Noman. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
