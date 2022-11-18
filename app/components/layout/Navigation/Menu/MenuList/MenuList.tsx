import dynamic from 'next/dynamic';
import { FC } from 'react';

import MenuItem from '@/components/layout/Navigation/Menu/MenuList/MenuItem/MenuItem';
import { IMenuList } from '@/components/layout/Navigation/Menu/MenuList/menu-list.interface';

import styles from './MenuList.module.scss';

const AuthItems = dynamic(() => import('./AuthItems/AuthItems'), {
  ssr: false
});

const MenuList: FC<{ menu: IMenuList }> = ({ menu: { title, items } }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.ul}>
        {items.map((item) => (
          <MenuItem key={item.link} item={item} />
        ))}
        {title === 'General' ? <AuthItems /> : null}
      </ul>
    </div>
  );
};

export default MenuList;
