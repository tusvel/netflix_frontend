import { FC } from 'react';

import { useMovies } from '@/pages/admin/movies/useMovies';

import Heading from '@/ui/Heading/Heading';
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable';

import Meta from '@/utils/meta/Meta';

const MovieList: FC = () => {
  const {
    handleSearch,
    isLoading,
    searchTerm,
    data,
    deleteAsync,
    createAsync
  } = useMovies();

  return (
    <Meta title="Movies">
      <AdminNavigation />
      <Heading title="Movies" />
      <AdminHeader
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        onClick={createAsync}
      />
      <AdminTable
        removeHandler={deleteAsync}
        headerItems={['Title', 'Genres', 'Rating']}
        tableItems={data || []}
        isLoading={isLoading}
      />
    </Meta>
  );
};

export default MovieList;
