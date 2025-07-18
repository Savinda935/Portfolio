const portfolioData = {
  name: 'Dilshan Savinda',
  title: 'Software & Network Engineer',
  tagline: 'Building resilient systems & monitoring solutions',
  about: `I am a passionate software developer with experience in building web and mobile applications. I love solving problems and learning new technologies. Currently working at Fentons Information Technology as part of the Network Operations Center (NOC) team.`,
  skills: {
    'Programming': [
      { name: 'JavaScript', proficiency: 90 },
      { name: 'React', proficiency: 85 },
      { name: 'Node.js', proficiency: 80 },
      { name: 'Python', proficiency: 75 },
      { name: 'Java', proficiency: 70 },
      { name: 'Spring Boot', proficiency: 65 },
    ],
    'Infrastructure': [
      { name: 'Network Monitoring', proficiency: 88 },
      { name: 'System Administration', proficiency: 82 },
      { name: 'Server Management', proficiency: 80 },
      { name: 'NOC Operations', proficiency: 85 },
    ],
    'Database': [
      { name: 'MongoDB', proficiency: 80 },
      { name: 'MySQL', proficiency: 75 },
      { name: 'Database Design', proficiency: 70 },
    ],
    'Tools': [
      { name: 'Git', proficiency: 90 },
      { name: 'Docker', proficiency: 75 },
      { name: 'Linux', proficiency: 80 },
      { name: 'Network Diagnostics', proficiency: 85 },
    ],
  },
  projects: [
    {
      name: '📡 Real-Time Uplink Monitoring System',
      description: 'A real-time monitoring dashboard built to visualize uplink uptime and availability across multiple nodes. Used by IT teams to detect downtime and ensure network stability.',
      tech: ['React', 'Node.js', 'WebSocket', 'Chart.js'],
      link: 'https://github.com/Savinda935/Uplink-Availability-Manage-System',
      category: 'Enterprise',
      featured: true,
      image: require('../images/uplink.jpg'),
    },
    {
      name: '🚨 Alert Escalation System',
      description: 'A web-based tool to streamline server issue escalation, guiding users through diagnostics to route issues efficiently.',
      tech: ['React', 'Express.js', 'MongoDB'],
      link: 'https://github.com/Savinda935/Pet-Care-System',
      category: 'Enterprise',
      featured: true,
      image: require('../images/Alertescalation.jpg'),
    },
    {
      name: '🚀 Skill-Sharing & Learning Platform',
      description: 'A platform for sharing skills and learning through interactive courses and mentorship, built with React and Spring Boot.',
      tech: ['React', 'Spring Boot', 'MongoDB', 'JWT'],
      link: 'https://github.com/Savinda935/Skill-Sharing-Learning-Platform_PAF',
      category: 'Web Development',
      featured: false,
      image: require('../images/skillshare.jpg'),
    },
    {
      name: '🐾 Pet Care System',
      description: 'A full-stack MERN application for managing pet appointments, pain control, and health monitoring.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      link: 'https://github.com/Savinda935/Pet-Care-System',
      category: 'Web Development',
      featured: false,
      image: require('../images/petcare.jpg'),
    },
  ],
  experience: [
    {
      company: 'Fentons Information Technology',
      role: 'Software & Network Engineer – NOC Team',
      period: '2022 - Present',
      location: 'Colombo, Sri Lanka',
      description: `Contributing to software development and infrastructure support in the NOC. Developed real-time monitoring and escalation tools, improving network uptime and response times.`,
      achievements: [
        'Developed monitoring systems improving uptime by 15%',
        'Created escalation tools reducing response time by 40%',
        'Enhanced system reliability with infrastructure teams',
        'Maintained 24/7 uptime monitoring',
      ],
    },
  ],
  contact: {
    email: 'dilshansavinda83@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dilshan-savinda-795753312/',
    github: 'https://github.com/Savinda935',
    location: 'Negombo, Western Province, Sri Lanka',
  },
};

export default portfolioData; 