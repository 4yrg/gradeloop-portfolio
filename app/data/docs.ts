import { presentations } from './presentations';

export interface Document {
  id: string;
  title: string;
  description: string;
  icon: string;
  isComingSoon: boolean;
  category: 'document' | 'presentation';
  downloadUrl?: string;
}

const docs: Document[] = [
  {
    id: 'research-paper',
    title: 'Research Paper',
    description:
      'Full research paper on Adaptive Feedback Loops in CS Pedagogy submitted to ICCE 2025.',
    icon: 'ri-file-text-line',
    isComingSoon: false,
    category: 'document',
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
    category: 'document',
    downloadUrl:
      'https://drive.google.com/drive/folders/1-Zt-clmrWTrniwOdKVHu8ucvhP6yGgH4?usp=sharing',
  },
  {
    id: 'literature-review',
    title: 'Literature Review',
    description:
      'Comprehensive review of 50+ academic papers on automated code assessment and ML in education.',
    icon: 'ri-book-read-line',
    isComingSoon: false,
    category: 'document',
    downloadUrl:
      'https://drive.google.com/drive/folders/18LRMf-SN1xftPo6C2FAfwn5wQ3Z-it9u?usp=sharing',
  },
];

export const documents: Document[] = [...docs, ...presentations];
