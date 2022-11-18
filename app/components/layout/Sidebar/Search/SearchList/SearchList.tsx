import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { ISearchList } from '@/components/layout/Sidebar/Search/SearchList/search-list.interface';

import styles from './SearchList.module.scss';
import { getMovieUrl } from '@/config/url.config';

const SearchList: FC<ISearchList> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => (
          <Link key={movie._id} href={getMovieUrl(movie.slug)}>
            <a>
              <Image
                src={movie.poster}
                width={50}
                height={50}
                alt={movie.title}
                objectFit="cover"
                objectPosition="top"
                draggable={false}
              />
              <span>{movie.title}</span>
            </a>
          </Link>
        ))
      ) : (
        <div className={styles.notFound}>Movies not found!</div>
      )}
    </div>
  );
};

export default SearchList;
