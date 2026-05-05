export interface Document {
  id: string;
  title: string;
  description: string;
  icon: string;
  isComingSoon: boolean;
  downloadUrl?: string;
}

export const documents: Document[] = [
  {
    id: 'research-paper',
    title: 'Research Paper',
    description:
      'Full research paper on Adaptive Feedback Loops in CS Pedagogy submitted to ICCE 2025.',
    icon: 'ri-file-text-line',
    isComingSoon: false,
    downloadUrl:
      'https://drive.google.com/file/d/1OyCfPKd0Wrp2ChWxPNFbvwf_pJOlmpMW/view?usp=sharing',
  },
  {
    id: 'project-proposal',
    title: 'Project Proposal',
    description:
      'Initial project proposal and scope documentation submitted in February 2024.',
    icon: 'ri-file-chart-line',
    isComingSoon: false,
    downloadUrl:
      'https://drive.google.com/drive/folders/1-Zt-clmrWTrniwOdKVHu8ucvhP6yGgH4?usp=sharing',
  },
  {
    id: 'presentation-slides',
    title: 'Presentation Slides',
    description:
      'Progress presentation slides covering system architecture and preliminary findings.',
    icon: 'ri-presentation-line',
    isComingSoon: false,
    downloadUrl:
      'https://drive.google.com/drive/folders/1eFgFKqRQEUxAeYj3z92hbKGmAX3BY2iu?usp=sharing',
  },
  {
    id: 'literature-review',
    title: 'Literature Review',
    description:
      'Comprehensive review of 50+ academic papers on automated code assessment and ML in education.',
    icon: 'ri-book-read-line',
    isComingSoon: false,
    downloadUrl:
      'https://drive.google.com/drive/folders/18LRMf-SN1xftPo6C2FAfwn5wQ3Z-it9u?usp=sharing',
  },
];
