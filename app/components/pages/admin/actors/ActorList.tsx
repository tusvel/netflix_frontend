import { FC } from 'react';

import { useActors } from '@/pages/admin/actors/useActors';

import Heading from '@/ui/Heading/Heading';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable';

import Meta from '@/utils/meta/Meta';

const ActorList: FC = () => {
  const {
    handleSearch,
    isLoading,
    searchTerm,
    data,
    deleteAsync,
    createAsync
  } = useActors();

  return (
    <Meta title="Actors">
      <AdminNavigation />
      <Heading title="Actors" />
      <AdminHeader
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        onClick={createAsync}
      />
      <AdminTable
        removeHandler={deleteAsync}
        headerItems={['Name', 'Count movies']}
        tableItems={data || []}
        isLoading={isLoading}
      />
    </Meta>
  );
};

export default ActorList;
