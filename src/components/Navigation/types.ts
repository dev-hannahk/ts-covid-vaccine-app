const STATICSTICS = '접종 통계';
const CENTER = '접종 기관';

export interface navListType {
  id: number;
  title: typeof STATICSTICS | typeof CENTER;
  link: string;
}

export const navList: navListType[] = [
  { id: 1, title: '접종 통계', link: '/' },
  { id: 2, title: '접종 기관', link: '/map' },
];
