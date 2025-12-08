import { Globe, Mail } from 'lucide-react';
import React from 'react';

// --- TYPE DEFINITIONS ---

type SocialType = 'twitter' | 'linkedin' | 'github' | 'facebook';

type SocialIconProps = {
  type: SocialType;
  href: string;
};

interface ContactDetail {
  icon: React.ReactNode;
  title: string;
  info: string;
  actionText: string;
  href: string;
}

interface SocialHandle {
  type: SocialType;
  href: string;
}


// --- SVG ICONS (self-contained components) ---




const SocialIcon: React.FC<SocialIconProps> = ({ type, href }) => {
  const icons: Record<SocialType, React.ReactNode> = {
    twitter: (
      <svg role="img" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
    linkedin: (
      <svg role="img" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    github: (
      <svg role="img" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-neutral-800/50 border border-neutral-700/80 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-300"
    >
      {icons[type]}
      <span className="sr-only">{type}</span>
    </a>
  );
};

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {

  const contactDetails: ContactDetail[] = [
    {
      icon: <Mail className="w-8 h-8 text-neutral-400" />,
      title: 'Email Me',
      info: 'abdnoman001@gmail.com',
      actionText: 'Send an email',
      href: 'mailto:abdnoman001@gmail.com'
    },
    // {
    //   icon: <Phone className="w-8 h-8 text-neutral-400" />,
    //   title: 'Call Me',
    //   info: '+1 (555) 123-4567',
    //   actionText: 'Call now',
    //   href: 'tel:+15551234567'
    // },
    // {
    //   icon: <MapPin className="w-8 h-8 text-neutral-400" />,
    //   title: 'Visit Us',
    //   info: '123 Innovation Drive, Tech City, 10101',
    //   actionText: 'Get directions',
    //   href: 'https://maps.google.com/?q=123+Innovation+Drive,Tech+City'
    // },
    {
      icon: <Globe className="w-8 h-8 text-neutral-400" />,
      title: 'Website',
      info: 'https://abdnomancv.netlify.app/',
      actionText: 'Visit website',
      href: 'https://abdullahnomancv.netlify.app/'
    }
  ];

  const socialHandles: SocialHandle[] = [
    { type: 'github', href: 'https://github.com/shahriartamim2' },
    { type: 'linkedin', href: 'https://www.linkedin.com/in/me-noman/' },
    { type: 'twitter', href: '#' },
    { type: 'facebook', href: 'https://www.facebook.com/shahriartamim2/' },
  ];

  return (
    <div className="text-neutral-100 font-sans antialiased">
        <div className="container mx-auto px-4 sm:px-6 pt-20 pb-12 sm:py-24 lg:px-8">
          <header className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
            <p className="mt-4 text-lg leading-8 text-neutral-400 max-w-2xl mx-auto">
              We're here to help. Reach out to us through any of the channels below, and we'll get back to you as soon as possible.
            </p>
          </header>

          <main>
            {/* Contact Information Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {contactDetails.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-sky-500/50 hover:-translate-y-1"
                >
                  <div className="flex items-start sm:items-center gap-4 mb-3 sm:mb-4">
                    <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700 mt-1 sm:mt-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-neutral-400 text-sm sm:text-base break-all">{item.info}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">{item.actionText} →</p>
                </a>
              ))}
            </section>

            {/* Social Media Section */}
            <section className="text-center bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Connect on Social Media</h2>
              <p className="mt-3 text-base sm:text-lg leading-7 text-neutral-400 max-w-xl mx-auto">
                Follow our journey, get the latest updates, and join our community on your favorite platforms.
              </p>
              <div className="mt-6 sm:mt-8 flex justify-center items-center gap-3 sm:gap-4">
                {socialHandles.map((social) => (
                  <SocialIcon key={social.type} type={social.type} href={social.href} />
                ))}
              </div>
            </section>
          </main>

          <footer className="text-center mt-16 sm:mt-20 text-neutral-500 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Abdullah Noman. All rights reserved.</p>
          </footer>

        </div>
    </div>
  );
}

export default App;
