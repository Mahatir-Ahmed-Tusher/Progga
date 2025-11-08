export type ClassLevel = '6' | '7' | '8' | '9' | '10';

export interface ChapterRoute {
  id: string;
  titleBn: string;
  path: string;
}

export interface SubjectConfig {
  id: string;
  nameBn: string;
  nameEn: string;
  basePath: string;
  chapters?: ChapterRoute[];
}

export const SUBJECTS_BY_CLASS: Record<ClassLevel, SubjectConfig[]> = {
  '6': [],
  '7': [
    { id: 'science', nameBn: 'বিজ্ঞান', nameEn: 'Science', basePath: '/seventh/science', chapters: [
      { id: 'chapter1', titleBn: 'অধ্যায় ১', path: '/seventh/science/chapter1' },
      { id: 'chapter2', titleBn: 'অধ্যায় ২', path: '/seventh/science/chapter2' },
    ]},
    { id: 'math', nameBn: 'গণিত', nameEn: 'Mathematics', basePath: '/seventh/math' },
    { id: 'bangla_1st', nameBn: 'বাংলা ১ম পত্র', nameEn: 'Bengali 1st', basePath: '/seventh/bangla1/bangla_first' },
  ],
  '8': [],
  '9': [
    { id: 'physics', nameBn: 'পদার্থবিজ্ঞান', nameEn: 'Physics', basePath: '/secondary/physics', chapters: [
      { id: 'chapter2', titleBn: 'অধ্যায় ২', path: '/secondary/physics/chapter2' },
    ]},
  ],
  '10': [],
};


