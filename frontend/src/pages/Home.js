import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown, Code, Palette, Zap } from 'lucide-react';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Frontend Specialist",
    "Backend Engineer"
  ];

  const skills = [
    { icon: Code, label: "Development", color: "from-blue-500 to-purple-600" },
    { icon: Palette, label: "Design", color: "from-pink-500 to-rose-600" },
    { icon: Zap, label: "Performance", color: "from-yellow-500 to-orange-600" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const SIDEBAR_WIDTH = 250;

  return (
    <section style={{
      minHeight: '100vh',
      background: '#000',
      backgroundImage: 'linear-gradient(135deg, #0f172a 0%,rgb(7, 6, 9) 50%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '288px',
          height: '288px',
          background: '#8b5cf6',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(40px)',
          opacity: 0.2,
          animation: 'pulse 2s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '75%',
          right: '25%',
          width: '288px',
          height: '288px',
          background: '#3b82f6',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(40px)',
          opacity: 0.2,
          animation: 'pulse 2s infinite',
          animationDelay: '1s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '50%',
          width: '288px',
          height: '288px',
          background: '#ec4899',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(40px)',
          opacity: 0.2,
          animation: 'pulse 2s infinite',
          animationDelay: '2s'
        }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
        opacity: 0.4
      }}></div>
      
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px',
        marginLeft: `${SIDEBAR_WIDTH}px` // Offset for sidebar
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          minHeight: '100vh'
        }}>
          {/* Left Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? 'fade-in-up 0.8s ease-out forwards' : 'none'
          }}>
            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span style={{
                color: '#d1d5db',
                fontSize: '14px',
                fontWeight: 500
              }}>Follow Me</span>
              <div style={{ display: 'flex', gap: '16px' }}>
                {[
                  { icon: Github, href: "https://github.com/Savinda935", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/dilshan-savinda-795753312/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                   <a
                     key={label}
                     href={href}
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{
                       padding: '12px',
                       borderRadius: '50%',
                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
                       backdropFilter: 'blur(8px)',
                       border: '1px solid rgba(255, 255, 255, 0.2)',
                       color: 'white',
                       transition: 'all 0.3s ease',
                       textDecoration: 'none'
                     }}
                     onMouseEnter={e => {
                       e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                       e.target.style.transform = 'scale(1.1)';
                     }}
                     onMouseLeave={e => {
                       e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                       e.target.style.transform = 'scale(1)';
                     }}
                     aria-label={label}
                   >
                     <Icon size={20} />
                   </a>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h1 style={{
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1.1,
                  margin: 0
                }}>
                  Hi, I'm{' '}
                  <span style={{
                    background: 'linear-gradient(45deg, #a855f7, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Dilshan Savinda
                  </span>
                </h1>
                
                <div style={{ height: '64px', display: 'flex', alignItems: 'center' }}>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#d1d5db',
                    margin: 0
                  }}>
                    {roles[currentRole]}
                  </h2>
                </div>
                
                <p style={{
                  fontSize: '1.25rem',
                  color: '#9ca3af',
                  maxWidth: '600px',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Crafting exceptional digital experiences with modern technologies. 
                  I transform ideas into beautiful, functional, and user-friendly applications.
                </p>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <button
                  onClick={() => scrollToSection('about')}
                  style={{
                    padding: '16px 32px',
                    background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                    color: 'white',
                    borderRadius: '50px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 25px rgba(139, 92, 246, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, #7c3aed, #db2777)';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, #8b5cf6, #ec4899)';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Discover More
                </button>
                
                <button style={{
                  padding: '16px 32px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}>
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? 'fade-in-up 0.8s ease-out forwards 0.3s' : 'none'
          }}>
            {/* Skills Cards */}
            <div style={{ display: 'grid', gap: '24px' }}>
              {skills.map(({ icon: Icon, label, color }, index) => (
                <div
                  key={label}
                  style={{
                    padding: '24px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    marginLeft: index % 2 === 0 ? '0' : '32px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      padding: '12px',
                      borderRadius: '12px',
                      background: color === 'from-blue-500 to-purple-600' ? 'linear-gradient(45deg, #3b82f6, #8b5cf6)' :
                                 color === 'from-pink-500 to-rose-600' ? 'linear-gradient(45deg, #ec4899, #e11d48)' :
                                 'linear-gradient(45deg, #eab308, #f97316)'
                    }}>
                      <Icon size={24} color="white" />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'white',
                        margin: 0
                      }}>{label}</h3>
                      <p style={{
                        color: '#9ca3af',
                        margin: 0,
                        marginTop: '4px'
                      }}>Expert Level</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div style={{ display: 'grid', gap: '16px' }}>
              {[
                { title: "Company", value: "Hayleys Fentons IT" },
                { title: "Location", value: "Sri Lanka , Colombo 10" },
                { title: "Experience", value: "1+ Years" }
              ].map(({ title, value }) => (
                <div key={title} style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#9ca3af',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    margin: 0
                  }}>{title}</h4>
                  <p style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'white',
                    margin: 0,
                    marginTop: '4px'
                  }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 1s infinite'
        }}>
          <button
            onClick={() => scrollToSection('about')}
            style={{
              padding: '12px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            aria-label="Scroll to next section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-30px,0); }
          70% { transform: translate3d(0,-15px,0); }
          90% { transform: translate3d(0,-4px,0); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Home;