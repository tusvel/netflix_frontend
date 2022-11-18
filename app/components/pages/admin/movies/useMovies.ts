import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-talbe.interface';

import { useDebounce } from '@/hooks/useDebounce';

import { MovieService } from '@/services/movie.service';

import { getGenresList } from '@/utils/movie/getGenresListEach';
import { toastError } from '@/utils/toast-error';

import { getAdminUrl } from '@/config/url.config';

export const useMovies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { push } = useRouter();

  const queryData = useQuery(
    ['movies list', debouncedSearch],
    () => MovieService.getAll(debouncedSearch),
    {
      select: ({ data }) =>
        data.map(
          (movie): ITableItem => ({
            _id: movie._id,
            editUrl: getAdminUrl(`movie/edit/${movie._id}`),
            items: [
              movie.title,
              getGenresList(movie.genres),
              String(movie.rating.toFixed(1))
            ]
          })
        ),

      onError: (error) => {
        toastError(error, 'movie list');
      }
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { mutateAsync: deleteAsync } = useMutation(
    ['delete movie', debouncedSearch],
    (movieId: string) => MovieService.deleteMovie(movieId),
    {
      onError: (error) => {
        toastError(error, 'Delete movie');
      },
      onSuccess: () => {
        toastr.success('Delete movie', 'delete was successful');
        queryData.refetch();
      }
    }
  );

  const { mutateAsync: createAsync } = useMutation(
    'create movie',
    () => MovieService.create(),
    {
      onError(error) {
        toastError(error, 'Create movie');
      },
      onSuccess: ({ data: _id }) => {
        toastr.success('Create movie', 'create was successful');
        push(getAdminUrl(`movie/edit/${_id}`));
      }
    }
  );

  return useMemo(
    () => ({
      handleSearch,
      ...queryData,
      searchTerm,
      deleteAsync,
      createAsync
    }),
    [queryData, searchTerm, deleteAsync]
  );
};
