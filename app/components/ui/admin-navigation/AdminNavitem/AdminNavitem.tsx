import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { INavItem } from '@/ui/admin-navigation/admin-navigation.interface';

import styles from './AdminNavitem.module.scss';

const AdminNavitem: FC<{ item: INavItem }> = ({ item: { title, link } }) => {
  const { asPath } = useRouter();

  return (
    <li className={styles.li}>
      <Link href={link}>
        <a
          className={cn({
            [styles.active]: link === asPath
          })}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default AdminNavitem;
