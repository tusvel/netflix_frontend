import { FC } from 'react';

import Logo from '@/components/layout/Navigation/Logo/Logo';
import Menu from '@/components/layout/Navigation/Menu/Menu';

import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <Menu />
    </div>
  );
};

export default Navigation;
