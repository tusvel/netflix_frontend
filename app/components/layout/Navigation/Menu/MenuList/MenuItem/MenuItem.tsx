import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { IMenuItem } from '@/components/layout/Navigation/Menu/MenuList/MenuItem/menu-item.interface';

import { MaterialIcon } from '@/ui/icons/MaterialIcon/MaterialIcon';

import styles from './MenuItem.module.scss';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { asPath } = useRouter();

  return (
    <li
      className={cn({
        [styles.active]: asPath === item.link
      })}
    >
      <Link href={item.link}>
        <a>
          <MaterialIcon name={item.icon} />
          <span>{item.title}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
