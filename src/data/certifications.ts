import { Certification } from '../types';

export const certificationsData: Certification[] = [
  {
    id: 'udemy-full-stack',
    name: 'Full-Stack Web Development Certification',
    organization: 'Udemy',
    date: '2026',
    credentialId: 'UC-MERN-2026-HS',
    credentialUrl: 'https://www.udemy.com/',
    image: '/assets/certificate-preview.svg',
    pdfUrl: undefined,
    skillsDemonstrated: [
      'React.js & State Management',
      'Node.js & Express REST APIs',
      'MongoDB & Mongoose Schema Design',
      'Authentication & JWT Security',
      'Full-Stack Architecture & Deployment'
    ],
    description: 'Earned a Full-Stack Certification from Udemy, demonstrating practical proficiency and hands-on experience in building scalable modern web applications using MERN stack technologies.'
  }
];
