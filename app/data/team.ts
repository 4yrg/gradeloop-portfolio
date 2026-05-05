export interface TeamMember {
  id: string;
  name: string;
  role: string;
  position: string;
  img: string;
  researchInterest: string[];
}

export const team: TeamMember[] = [
  {
    id: 'sup-1',
    name: 'Prof. Nuwan Kodagoda',
    role: 'Leading academic expert in Computer Science education with extensive research in learning technologies.',
    position: 'Primary Supervisor',
    img: '/team images/Prof. Nuwan.jpg',
    researchInterest: ['CS Education', 'Learning Technologies'],
  },
  {
    id: 'sup-2',
    name: 'Dr. Kalpani Manathunga',
    role: 'Expert in technical systems and educational technology with a focus on AI-driven learning solutions.',
    position: 'Co-Supervisor',
    img: '/team images/Dr. Kalpani.jpg',
    researchInterest: ['AI in Education', 'Educational Technology'],
  },
  {
    id: 'dev-1',
    name: 'Wickramasooriya W.T.D.',
    role: 'IT22204202',
    position: 'Backend architecture & automated assessment logic',
    img: '/team images/Wickramasooriya.W.T.D.png',
    researchInterest: ['Backend Systems', 'Automated Assessment'],
  },
  {
    id: 'dev-2',
    name: 'Bilal R.A.M',
    role: 'IT22548900',
    position: 'Frontend performance & user experience',
    img: '/team images/Bilal R A M.png',
    researchInterest: ['UX Design', 'Performance Optimization'],
  },
  {
    id: 'dev-3',
    name: 'Dilshan J.M.H',
    role: 'IT22204202',
    position: 'ML-based code feedback research',
    img: '/team images/Dilshan J M H.png',
    researchInterest: ['Machine Learning', 'Code Feedback'],
  },
  {
    id: 'dev-4',
    name: 'Jayasekara M P S S',
    role: 'IT22580344',
    position: 'Infrastructure & secure execution environments',
    img: '/team images/Jayasekara M P S S.png',
    researchInterest: ['Cloud Infrastructure', 'Security'],
  },
];
