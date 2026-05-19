import { Facebook, Github, Globe, Linkedin, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { PROFILE, SITE_URL } from '../config/site';

const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    info: PROFILE.email,
    actionText: 'Send email',
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: Globe,
    title: 'Website',
    info: SITE_URL,
    actionText: 'Visit website',
    href: SITE_URL,
  },
  {
    icon: MapPin,
    title: 'Location',
    info: PROFILE.location,
    actionText: 'Based in Bangladesh',
    href: 'https://www.google.com/maps/place/Dhaka,+Bangladesh',
  },
];

const socialHandles = [
  { label: 'GitHub', icon: Github, href: PROFILE.github },
  { label: 'LinkedIn', icon: Linkedin, href: PROFILE.linkedin },
  { label: 'Facebook', icon: Facebook, href: PROFILE.facebook },
];

export default function Contact() {
  return (
    <main className="page-shell">
      <SEO
        title="Contact"
        description="Contact Abdullah Noman for textile engineering roles, software collaborations, dashboards, costing tools, and production workflow projects."
        keywords="Contact Abdullah Noman, Textile Engineer Contact, Software Developer Bangladesh, LinkedIn, GitHub"
        canonicalUrl="/contact"
      />

      <header className="mb-10 grid gap-5 md:grid-cols-[0.75fr_1fr] md:items-end">
        <div>
          <span className="miro-label">Contact Desk</span>
          <h1 className="page-title mt-5">Contact</h1>
        </div>
        <p className="section-copy text-lg">
          Reach out for collaborations, textile engineering opportunities, dashboard work, or software tools for production teams.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {contactDetails.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="surface-card group p-5 sm:p-6"
            >
              <span className="icon-button">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-black text-[var(--ink-strong)]">{item.title}</h2>
              <p className="mt-2 break-words text-sm font-bold text-[var(--ink-muted)]">{item.info}</p>
              <p className="mt-5 text-sm font-black text-[var(--accent-ink)]">{item.actionText}</p>
            </a>
          );
        })}
      </section>

      <section className="mt-6 paper-panel p-5 sm:p-8">
        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <span className="miro-label">Social Links</span>
            <h2 className="section-title mt-5">Find me online</h2>
            <p className="section-copy mt-4">
              Follow project updates, source code, and professional activity from these verified profiles.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {socialHandles.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="secondary-button justify-start">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <p className="mono-note">Copyright {new Date().getFullYear()} Abdullah Noman. All rights reserved.</p>
      </footer>
    </main>
  );
}
