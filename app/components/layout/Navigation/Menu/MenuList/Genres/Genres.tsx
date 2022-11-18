import { FC } from 'react';

import { usePopularGenres } from '@/components/layout/Navigation/Menu/MenuList/Genres/usePopularGenres';
import MenuList from '@/components/layout/Navigation/Menu/MenuList/MenuList';

import SkeletonLoader from '@/ui/SkeletonLoader';

const Genres: FC = () => {
  const { isLoading, data } = usePopularGenres();

  return isLoading ? (
    <div className="mx-11 mb-6">
      <SkeletonLoader count={5} className="h-7 mt-6" />
    </div>
  ) : (
    <MenuList menu={{ title: 'Popular genres', items: data || [] }} />
  );
};

export default Genres;
