import { IMenuList } from '@/components/layout/Navigation/Menu/MenuList/menu-list.interface';

export const firstMenu: IMenuList = {
  title: 'Menu',
  items: [
    {
      icon: 'MdHome',
      link: '/',
      title: 'Home'
    },
    {
      icon: 'MdExplore',
      link: '/genres',
      title: 'Discovery'
    },
    {
      icon: 'MdRefresh',
      link: '/fresh',
      title: 'Fresh movies'
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/trending',
      title: 'Trending now'
    }
  ]
};

export const userMenu: IMenuList = {
  title: 'General',
  items: []
};
