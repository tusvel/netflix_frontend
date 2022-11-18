import { FC } from 'react';

import Genres from '@/components/layout/Navigation/Menu/MenuList/Genres/Genres';
import MenuList from '@/components/layout/Navigation/Menu/MenuList/MenuList';
import {
  firstMenu,
  userMenu
} from '@/components/layout/Navigation/Menu/menu.data';

const Menu: FC = () => {
  return (
    <div>
      <MenuList menu={firstMenu} />
      <Genres />
      <MenuList menu={userMenu} />
    </div>
  );
};

export default Menu;
