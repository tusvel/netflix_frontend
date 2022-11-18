import { FC } from 'react';

import { useGenres } from '@/pages/admin/genres/useGenres';

import Heading from '@/ui/Heading/Heading';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable';

import Meta from '@/utils/meta/Meta';

const GenreList: FC = () => {
  const {
    handleSearch,
    isLoading,
    searchTerm,
    data,
    deleteAsync,
    createAsync
  } = useGenres();

  return (
    <Meta title="Genres">
      <AdminNavigation />
      <Heading title="Genres" />
      <AdminHeader
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        onClick={createAsync}
      />
      <AdminTable
        removeHandler={deleteAsync}
        headerItems={['Name', 'Slug']}
        tableItems={data || []}
        isLoading={isLoading}
      />
    </Meta>
  );
};

export default GenreList;
