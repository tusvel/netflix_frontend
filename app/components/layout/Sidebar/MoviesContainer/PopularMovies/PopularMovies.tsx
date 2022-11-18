import { FC } from 'react';
import { useQuery } from 'react-query';

import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList/MovieList';

import SkeletonLoader from '@/ui/SkeletonLoader';

import { MovieService } from '@/services/movie.service';

import styles from './PopularMovies.module.scss';

const PopularMovies: FC = () => {
  const { isLoading, data: popularMovies } = useQuery(
    'Popular movies in sidebar',
    () => MovieService.getMostPopularMovies(),
    {
      select: (data) => data.slice(0, 3)
    }
  );

  return isLoading ? (
    <div className={styles.popularSkeleton}>
      <SkeletonLoader count={3} className={styles.loader} />
    </div>
  ) : (
    <MovieList
      title="Popular Movies"
      movies={popularMovies || []}
      link="/trending"
    />
  );
};

export default PopularMovies;
