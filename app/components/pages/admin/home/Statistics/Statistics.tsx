import { FC } from 'react';

import CountUsers from '@/pages/admin/home/Statistics/CountUsers';
import PopularMovie from '@/pages/admin/home/Statistics/PopularMovie';

import styles from '../Admin.module.scss';

const Statistics: FC = () => {
  return (
    <div className={styles.statistics}>
      <CountUsers />
      <PopularMovie />
    </div>
  );
};

export default Statistics;
