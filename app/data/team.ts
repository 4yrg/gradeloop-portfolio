export interface TeamMember {
  id: string;
  name: string;
  role: string;
  position: string;
  img: string;
  email: string;
  researchInterest: string[];
}

export const team: TeamMember[] = [
  {
    id: 'sup-1',
    name: 'Prof. Nuwan Kodagoda',
    role: 'Leading academic expert in Computer Science education with extensive research in learning technologies.',
    position: 'Deputy Vice Chancellor - FOC SLIIT',
    img: '/team images/Prof. Nuwan.jpg',
    email: 'nuwan.k@sliit.lk',
    researchInterest: ['CS Education', 'Learning Technologies'],
  },
  {
    id: 'sup-2',
    name: 'Dr. Kalpani Manathunga',
    role: 'Expert in technical systems and educational technology with a focus on AI-driven learning solutions.',
    position: 'HOD - SE',
    img: '/team images/Dr. Kalpani.jpg',
    email: 'kalpani.m@sliit.lk',
    researchInterest: ['AI in Education', 'Educational Technology'],
  },
  {
    id: 'dev-1',
    name: 'Wickramasooriya W.T.D.',
    role: 'IT22204202',
    position: 'Undergraduate - Department of Software Engineering, SLIIT',
    img: '/team images/Wickramasooriya.W.T.D.png',
    email: 'it22204202@my.sliit.lk',
    researchInterest: ['Backend Systems', 'Automated Assessment'],
  },
  {
    id: 'dev-2',
    name: 'Bilal R.A.M',
    role: 'IT22548900',
    position: 'Undergraduate - Department of Software Engineering, SLIIT',
    img: '/team images/Bilal R A M.png',
    email: 'it22548900@my.sliit.lk',
    researchInterest: ['UX Design', 'Performance Optimization'],
  },
  {
    id: 'dev-3',
    name: 'Dilshan J.M.H',
    role: 'IT22266828',
    position: 'Undergraduate - Department of Software Engineering, SLIIT',
    img: '/team images/Dilshan J M H.png',
    email: 'it22266828@my.sliit.lk',
    researchInterest: ['Machine Learning', 'Code Feedback'],
  },
  {
    id: 'dev-4',
    name: 'Jayasekara M P S S',
    role: 'IT22580344',
    position: 'Undergraduate - Department of Software Engineering, SLIIT',
    img: '/team images/Jayasekara M P S S.png',
    email: 'it22580344@my.sliit.lk',
    researchInterest: ['Cloud Infrastructure', 'Security'],
  },
];
