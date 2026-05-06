import { presentations } from './presentations';

export interface Document {
  id: string;
  title: string;
  description: string;
  icon: string;
  isComingSoon: boolean;
  category: 'document' | 'presentation' | 'checklist';
  downloadUrl?: string;
}

const docs: Document[] = [
  {
    id: 'research-paper',
    title: 'Research Paper',
    description:
      'Full research paper on "Scalable Hybrid LSH-Based Framework for Structural Code Clone Detection" accepted at ICHORA 2026.',
    icon: 'ri-file-text-line',
    isComingSoon: true,
    category: 'document',
  },
  {
    id: 'taf-form',
    title: 'TAF (Topic Application Form)',
    description:
      'The initial Topic Application Form (TAF) defining the research problem and proposed area of study.',
    icon: 'ri-file-list-3-line',
    isComingSoon: false,
    category: 'document',
    downloadUrl:
      'https://drive.google.com/file/d/1BXpFpRhHC4YM4KXIchLhpE776M8Cv0QN/view?usp=sharing',
  },
  {
    id: 'proposal-docs',
    title: 'Proposal Documentation',
    description:
      'Comprehensive project proposal and detailed scope documentation submitted for academic approval.',
    icon: 'ri-file-chart-line',
    isComingSoon: false,
    category: 'document',
    downloadUrl:
      'https://drive.google.com/drive/folders/1iEimQ-O24DPU7NSwLf35UV8XPHX8HE6f?usp=sharing',
  },
  {
    id: 'final-reports',
    title: 'Final Reports',
    description:
      'Complete project documentation, final research findings, and comprehensive system implementation reports.',
    icon: 'ri-file-zip-line',
    isComingSoon: false,
    category: 'document',
    downloadUrl:
      'https://drive.google.com/drive/folders/16LQAFUlhpBJ3Lmp35-vSjS-WcSbGZyeT?usp=drive_link',
  },
  {
    id: 'checklist-01',
    title: 'Checklist 01',
    description:
      'Initial review checklist for project milestones and compliance standards.',
    icon: 'ri-checkbox-multiple-line',
    isComingSoon: false,
    category: 'checklist',
    downloadUrl:
      'https://drive.google.com/drive/folders/1f9BgcfE3tsoruAZW16GSFtY60y8lIsp9?usp=sharing',
  },
  {
    id: 'checklist-02',
    title: 'Checklist 02',
    description:
      'Secondary review checklist focusing on implementation and technical verification.',
    icon: 'ri-checkbox-multiple-line',
    isComingSoon: false,
    category: 'checklist',
    downloadUrl:
      'https://drive.google.com/drive/folders/1KO0OyuOUoWY_qndKpTYvQdon2z6EcyuT?usp=sharing',
  },
  {
    id: 'checklist-03',
    title: 'Checklist 03',
    description:
      'Final submission checklist ensuring all academic and technical requirements are met.',
    icon: 'ri-checkbox-multiple-line',
    isComingSoon: false,
    category: 'checklist',
    downloadUrl:
      'https://drive.google.com/drive/folders/18rDL34tPRRYBQdMviKlvY6qMHZn4Qqr8?usp=sharing',
  },
];

export const documents: Document[] = [...docs, ...presentations];
