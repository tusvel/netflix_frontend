import { FC } from 'react';

import AdminNavitem from '@/ui/admin-navigation/AdminNavitem/AdminNavitem';
import { navItems } from '@/ui/admin-navigation/admin-navigation.data';

import styles from './AdminNavigation.module.scss';

const AdminNavigation: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {navItems.map((item) => (
          <AdminNavitem key={item.link} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default AdminNavigation;
