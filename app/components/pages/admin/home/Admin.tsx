import { FC } from 'react';

import Statistics from '@/pages/admin/home/Statistics/Statistics';

import Heading from '@/ui/Heading/Heading';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';

import Meta from '@/utils/meta/Meta';

const Admin: FC = () => {
  return (
    <Meta title="Admin panel">
      <AdminNavigation />
      <Heading title="Some statistics" />
      <Statistics />
    </Meta>
  );
};

export default Admin;
