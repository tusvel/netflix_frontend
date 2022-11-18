import { useQuery } from 'react-query';

import { useAuth } from '@/hooks/useAuth';

import { UserService } from '@/services/user.service';

export const useFavorites = () => {
  const { user } = useAuth();
  const {
    data: favoriteMovies,
    refetch,
    isLoading
  } = useQuery('favorite movies', () => UserService.getFavorites(), {
    select: ({ data }) => data,
    enabled: !!user
  });

  return {
    isLoading,
    favoriteMovies,
    refetch
  };
};
