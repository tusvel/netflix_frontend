import { FC } from 'react';

import { useUsers } from '@/pages/admin/users/useUsers';

import Heading from '@/ui/Heading/Heading';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable';

import Meta from '@/utils/meta/Meta';

const UserList: FC = () => {
  const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers();

  return (
    <Meta title="Users">
      <AdminNavigation />
      <Heading title="Users" />
      <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />
      <AdminTable
        removeHandler={deleteAsync}
        headerItems={['Email', 'Date register']}
        tableItems={data || []}
        isLoading={isLoading}
      />
    </Meta>
  );
};

export default UserList;
