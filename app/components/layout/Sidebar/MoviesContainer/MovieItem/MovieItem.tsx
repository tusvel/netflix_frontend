import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IMovieItem } from '@/components/layout/Sidebar/MoviesContainer/MovieItem/movie-item.interface';

import { MaterialIcon } from '@/ui/icons/MaterialIcon/MaterialIcon';

import { getGenresListEach } from '@/utils/movie/getGenresListEach';

import { getGenreUrl, getMovieUrl } from '@/config/url.config';

import styles from './MovieItem.module.scss';

const MovieItem: FC<IMovieItem> = ({ movie }) => {
  return (
    <div className={styles.item}>
      <Link href={getMovieUrl(movie.slug)}>
        <a>
          <Image
            src={movie.poster}
            width={65}
            height={97}
            alt={movie.title}
            draggable={false}
            priority
          />
        </a>
      </Link>
      <div className={styles.info}>
        <div>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.genres}>
            {movie.genres.map((genre, index) => (
              <Link key={genre._id} href={getGenreUrl(genre.slug)}>
                <a>
                  {getGenresListEach(index, movie.genres.length, genre.name)}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.rating}>
          <MaterialIcon name="MdStarRate" />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
