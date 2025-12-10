import { Award, Briefcase, Code, Download, Github, GraduationCap, Linkedin, Mail, MapPin, TrendingUp, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImage from '../images/profile.jpg';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/cv.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Abdullah_Noman_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open('/assets/cv.pdf', '_blank');
    }
  };
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
    'Completed a thesis on fiber & Yarn recycling technologies',
  ];

  return (
    <div className="text-white relative">



      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-0 sm:px-6 lg:px-16 pt-24 sm:pt-20 relative">          <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile image */}
          <div className="animate-fadeIn w-36 sm:w-44 md:w-48 lg:w-48 flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative aspect-square rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
                <img
                  src={profileImage}
                  alt="Abdullah Noman"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 sm:space-y-6 text-center lg:text-left max-w-3xl">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-gray-400 text-base sm:text-lg lg:text-xl font-light tracking-wider animate-fadeIn">
                Hi, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight animate-slideUp">
                ABDULLAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">NOMAN</span>
              </h1>
              <div className="h-1 w-20 sm:w-24 mx-auto lg:mx-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-scaleIn" />
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-light leading-relaxed animate-fadeIn opacity-90 px-4 sm:px-0">
                Innovating the Future of Textile Manufacturing Through Quality, Sustainability & Technology
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 text-gray-400 animate-fadeIn delay-200">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-purple-400 transition-colors" />
                </div>
                <span className="text-sm sm:text-base font-light group-hover:text-white transition-colors">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-purple-400 transition-colors" />
                </div>
                <span className="text-sm sm:text-base font-light group-hover:text-white transition-colors break-all sm:break-normal">abdullahnoman001@gmail.com</span>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="animate-fadeIn delay-300">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50 group text-base sm:text-lg"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                <span>Download My CV</span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 animate-fadeIn delay-300">
              <a href='https://www.linkedin.com/in/me-noman/' className="group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 border border-white/10 hover:border-purple-500/50 backdrop-blur-sm">
                  <Linkedin href='' className="w-5 h-5" />
                </div>
              </a>
              <a href="https://github.com/shahriartamim2'" className="group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 border border-white/10 hover:border-purple-500/50 backdrop-blur-sm">
                  <Github className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-24 sm:py-32 px-0 sm:px-6 relative">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10 sm:mb-12 text-center">
            ABOUT ME
          </h2>
          <div className="glass-card p-6 sm:p-8 md:p-12 group">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
              I am a passionate and dedicated Textile Engineer with comprehensive expertise in Yarn manufacturing,
              quality control systems, and production process optimization.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I am deeply committed to sustainable practices and continuous improvement in textile manufacturing.
              My work focuses on integrating modern technology with traditional craftsmanship to create innovative,
              eco-friendly solutions that meet the evolving demands of the global textile industry.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 sm:py-32 px-0 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 sm:mb-16 text-center fade-in-section">
            EXPERIENCE
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 group fade-in-section"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300 self-start">
                    <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{exp.title}</h3>
                    <p className="text-gray-400 font-medium text-base sm:text-lg">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-3 sm:mb-4">{exp.period}</p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 sm:py-32 px-0 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 sm:mb-16 text-center fade-in-section">
            EDUCATION
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 md:p-10 group fade-in-section"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{edu.degree}</h3>
                    <p className="text-gray-400 font-medium text-base sm:text-lg">{edu.institution}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-3">{edu.year}</p>
                    <p className="text-gray-300 text-sm sm:text-base mb-2">{edu.subject}</p>
                    <p className="text-white font-semibold text-sm sm:text-base">Result: {edu.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 sm:py-32 px-0 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 sm:mb-16 text-center fade-in-section">
            SKILLS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, skillList], catIndex) => (
              <div
                key={category}
                className="glass-card p-6 sm:p-8 group fade-in-section"
                style={{ animationDelay: `${catIndex * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  {catIndex === 0 && <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
                  {catIndex === 1 && <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
                  {catIndex === 2 && <Code className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
                  <h3 className="text-xl sm:text-2xl font-bold text-white capitalize">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-lg text-sm sm:text-base text-gray-300 hover:bg-white hover:text-black transition-all duration-300 cursor-default backdrop-blur-sm"
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
      {/* <section id="works" className="py-24 sm:py-32 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 sm:mb-16 text-center fade-in-section">
            MY WORKS
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 group fade-in-section"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full text-xs sm:text-sm backdrop-blur-sm"
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
      <section id="certifications" className="py-24 sm:py-32 px-0 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 sm:mb-16 text-center fade-in-section">
            CERTIFICATIONS
          </h2>
          <div className="glass-card p-6 sm:p-8 md:p-10 fade-in-section">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 sm:py-32 px-0 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 sm:mb-16 text-center fade-in-section">
            ACHIEVEMENTS
          </h2>
          <div className="glass-card p-6 sm:p-8 md:p-10 fade-in-section">
            <div className="space-y-4 sm:space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed text-sm sm:text-base">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">LET'S CONNECT</h3>
          <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
            Open to discussing new projects, opportunities, and collaborations
          </p>
          <button className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-black hover:bg-gray-200 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl text-sm sm:text-base">
            <a href="/contact">GET IN TOUCH</a>
          </button>
          <p className="text-gray-600 text-xs sm:text-sm mt-10 sm:mt-12">
            © 2024 Abdullah Noman. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Home;