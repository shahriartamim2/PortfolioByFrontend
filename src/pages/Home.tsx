import { Award, Briefcase, Code, FileText, Github, GraduationCap, Linkedin, Mail, MapPin, TrendingUp, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // scrollToSection removed — sections are navigated via Navbar links or in-page anchors

  const skills = {
    technical: [
      'Quality Control Systems', 'Fabric Analysis',
      'Production Planning', 'Process Engineering', 'Process Optimization',
    ],
    specialized: [
      'Dyeing & Finishing Technology', 'Fabric Testing Standards',
      'Yarn Manufacturing', 'Fabric Manufacturing',
      'ISO Quality Standards'
    ],
    software: [
      'Excell', 'Word', 'PowerBI', 'MS Access', 'SPSS', 'R Studio', 'Python'
    ]
  };

  const experiences = [
    {
      title: 'Intern ',
      company: 'Mosaraf Composite Textile Mills Ltd',
      period: 'August 2025 - September 2025',
      description: 'Gained hands-on experience in various textile manufacturing processes, including spinnig, knittinging, dyeing, and finishing. Assisted in quality control and production planning activities.',
    },
  ];

  const education = [
    {
      degree: 'B.Sc. in Textile Engineering',
      institution: 'Bangladesh University of Textiles (BUTEX)',
      year: '2026 (Expected)',
      subject: 'Specialized in Yarn Manufacturing',
      result: 'CGPA - 3.21'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Govt. KC College, Jhenidah',
      year: '2019',
      subject: 'Science',
      result: 'GPA - 5.00'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Joradah Secondary School, Harinakundu',
      year: '2017',
      subject: 'Science',
      result: 'GPA - 5.00'
    },

  ];

  // const projects = [
  //   {
  //     title: 'Sustainable Fabric Development',
  //     description: 'Led development of eco-friendly fabric line using organic materials, reducing water usage by 40% and chemical consumption by 30%.',
  //     tags: ['Innovation', 'Sustainability', 'R&D', 'Product Development']
  //   },
  //   {
  //     title: 'Automated Quality Control System',
  //     description: 'Designed and implemented AI-powered quality inspection system, improving defect detection accuracy and reducing inspection time.',
  //     tags: ['Quality', 'Automation', 'Technology', 'Efficiency']
  //   },
  //   {
  //     title: 'Dyeing Process Optimization',
  //     description: 'Streamlined dyeing procedures through process re-engineering, reducing cycle time by 25% while maintaining color consistency.',
  //     tags: ['Process Engineering', 'Efficiency', 'Cost Reduction']
  //   },
  //   {
  //     title: 'Performance Textile Innovation',
  //     description: 'Created advanced performance textile for athletic wear featuring enhanced moisture-wicking and breathability properties.',
  //     tags: ['Innovation', 'Product Development', 'Technical Textiles', 'R&D']
  //   }
  // ];

  const certifications = [
    'ICPC Dhaka Regional Finalist 2024',
    'Python for Data Science & Ai',
    'Python Course Offered by University of Michigan',
    'Management',
  ];

  const achievements = [
    'Published research paper on firber & Yarn recycling technologies',
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent)`
        }}
      />

      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white hover:text-gray-300 transition-colors cursor-pointer">
              YOUR NAME
            </h1>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Experience', 'Education', 'Skills', 'Works', 'Certifications', 'Achievements'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-white relative group ${activeSection === item.toLowerCase()
                      ? 'text-white'
                      : 'text-gray-400'
                    }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 lg:px-16 pt-20 relative">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-purple-950/20 pointer-events-none" />

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10">
          <div className="flex flex-col items-center space-y-8">
            {/* Profile image - Now at the top */}
            <div className="animate-fadeIn w-48 sm:w-56 md:w-64">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative aspect-square rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
                  <img
                    src="/src/images/profile.jpg"
                    alt="Abdullah Noman"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 text-center max-w-3xl">
              <div className="space-y-4">
                <h2 className="text-gray-400 text-xl font-light tracking-wider animate-fadeIn">
                  Hi, I'm
                </h2>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight animate-slideUp">
                  ABDULLAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">NOMAN</span>
                </h1>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-scaleIn" />
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed animate-fadeIn opacity-90 px-4">
                  Innovating the Future of Textile Manufacturing Through Quality, Sustainability & Technology
                </p>
              </div>

              {/* Contact info with modern styling */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-400 animate-fadeIn delay-200">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                    <MapPin className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="font-light group-hover:text-white transition-colors">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                    <Mail className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="font-light group-hover:text-white transition-colors">abdullahnoman001@gmail.com</span>
                </div>
              </div>

              {/* Social links with modern hover effects */}
              <div className="flex justify-center gap-4 animate-fadeIn delay-300">
                <a href="https://linkedin.com" className="group">
                  <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 border border-white/10 hover:border-purple-500/50 backdrop-blur-sm">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a href="https://github.com" className="group">
                  <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 border border-white/10 hover:border-purple-500/50 backdrop-blur-sm">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a href="/resume" className="group">
                  <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 border border-white/10 hover:border-purple-500/50 backdrop-blur-sm">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto fade-in-section">
          <h2 className="text-5xl font-bold text-white mb-12 text-center">
            ABOUT ME
          </h2>
          <div className="glass-card p-12 group">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I am a passionate and dedicated Textile Engineer with comprehensive expertise in Yarn manufacturing,
              quality control systems, and production process optimization.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              With a strong foundation in textile science and hands-on experience across industry manufacturing
              environment, I specialize in developing cutting-edge solutions that enhance production efficiency
              while maintaining the highest quality standards. My approach combines technical expertise with
              creative problem-solving to address complex challenges.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              I am deeply committed to sustainable practices and continuous improvement in textile manufacturing.
              My work focuses on integrating modern technology with traditional craftsmanship to create innovative,
              eco-friendly solutions that meet the evolving demands of the global textile industry.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center fade-in-section">
            EXPERIENCE
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-8 group fade-in-section"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-gray-400 font-medium text-lg">{exp.company}</p>
                    <p className="text-sm text-gray-500 mt-1 mb-4">{exp.period}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center fade-in-section">
            EDUCATION
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-10 group fade-in-section"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-gray-400 font-medium text-lg">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mt-1 mb-3">{edu.year}</p>
                    <p className="text-gray-300 mb-2">{edu.subject}</p>
                    <p className="text-white font-semibold">CGPA: {edu.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center fade-in-section">
            SKILLS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], catIndex) => (
              <div
                key={category}
                className="glass-card p-8 group fade-in-section"
                style={{ animationDelay: `${catIndex * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  {catIndex === 0 && <Award className="w-7 h-7 text-white" />}
                  {catIndex === 1 && <TrendingUp className="w-7 h-7 text-white" />}
                  {catIndex === 2 && <Code className="w-7 h-7 text-white" />}
                  <h3 className="text-2xl font-bold text-white capitalize">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white hover:text-black transition-all duration-300 cursor-default backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Works */}
      {/* <section id="works" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center fade-in-section">
            MY WORKS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-8 group fade-in-section"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full text-sm backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      <section id="certifications" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center fade-in-section">
            CERTIFICATIONS
          </h2>
          <div className="glass-card p-10 fade-in-section">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <Award className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center fade-in-section">
            ACHIEVEMENTS
          </h2>
          <div className="glass-card p-10 fade-in-section">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <Trophy className="w-6 h-6 text-white mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">LET'S CONNECT</h3>
          <p className="text-gray-400 mb-8 text-lg">
            Open to discussing new projects, opportunities, and collaborations
          </p>
          <button className="px-10 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
            <a href="/contact">GET IN TOUCH</a>
          </button>
          <p className="text-gray-600 text-sm mt-12">
            © 2024 Your Name. All Rights Reserved.
          </p>
        </div>
      </footer>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(255, 255, 255, 0.1);
        }

        .glow-effect {
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 50px rgba(255, 255, 255, 0.5));
          }
        }

        .fade-in-section {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Modern animations */
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
