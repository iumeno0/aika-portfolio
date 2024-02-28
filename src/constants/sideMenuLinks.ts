export type SideMenuLink = {
  route: string;
  label: string;
  sectionId: string;
};

export const sideMenuLinks: SideMenuLink[] = [
  {
    route: '/',
    label: 'ホーム',
    sectionId: 'home',
  },
  {
    route: '#profile',
    label: '自己紹介',
    sectionId: 'profile',
  },
  {
    route: '#skills',
    label: '使用言語',
    sectionId: 'skills',
  },
  {
    route: '#contact',
    label: 'コンタクト',
    sectionId: 'contact',
  },
];
