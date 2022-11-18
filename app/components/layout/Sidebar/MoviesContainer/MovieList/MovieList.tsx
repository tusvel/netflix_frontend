import Link from 'next/link';
import { FC } from 'react';

import MovieItem from '@/components/layout/Sidebar/MoviesContainer/MovieItem/MovieItem';
import { IMovieList } from '@/components/layout/Sidebar/MoviesContainer/MovieList/movie-list.interface';

import styles from './MovieList.module.scss';

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
  return (
    <div className={styles.list}>
      <div className={styles.heading}>{title}</div>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie._id} />
      ))}
      <Link href={link}>
        <a className={styles.button}>
          {link === '/trending'
            ? 'All trending movies'
            : 'All favorites movies'}
        </a>
      </Link>
    </div>
  );
};

export default MovieList;
