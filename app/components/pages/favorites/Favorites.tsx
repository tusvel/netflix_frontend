import { FC } from 'react';

import FavoriteItem from '@/pages/favorites/FavoriteItem';
import { useFavorites } from '@/pages/favorites/useFavorites';

import Heading from '@/ui/Heading/Heading';
import SkeletonLoader from '@/ui/SkeletonLoader';

import { useAuth } from '@/hooks/useAuth';

import Meta from '@/utils/meta/Meta';

import styles from './Favorites.module.scss';

const Favorites: FC = () => {
  const { favoriteMovies, isLoading } = useFavorites();
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Meta title="Favorites">
      <Heading title="Favorites" />
      <section className={styles.favorites}>
        {isLoading ? (
          <SkeletonLoader
            count={3}
            className={styles.skeletonLoader}
            containerClassName={styles.containerLoader}
          />
        ) : (
          favoriteMovies?.map((movie) => (
            <FavoriteItem key={movie._id} movie={movie} />
          ))
        )}
      </section>
    </Meta>
  );
};

export default Favorites;
