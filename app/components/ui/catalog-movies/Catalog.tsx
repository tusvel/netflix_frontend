import { FC } from 'react';

import Description from '@/ui/Heading/Description';
import Heading from '@/ui/Heading/Heading';
import { ICatalog } from '@/ui/catalog-movies/catalog.interface';
import GalleryItem from '@/ui/gallery/GalleryItem';

import Meta from '@/utils/meta/Meta';

import { getMovieUrl } from '@/config/url.config';

import styles from './Catalog.module.scss';

const Catalog: FC<ICatalog> = ({ title, movies, description }) => {
  return (
    <Meta title={title} description={description}>
      <Heading title={title} className={styles.heading} />
      {description && (
        <Description text={description} className={styles.description} />
      )}
      <section className={styles.movies}>
        {movies.map((movie) => (
          <GalleryItem
            key={movie._id}
            item={{
              name: movie.title,
              posterPath: movie.bigPoster,
              content: {
                title: movie.title
              },
              url: getMovieUrl(movie.slug)
            }}
            variant="horizontal"
          />
        ))}
      </section>
    </Meta>
  );
};

export default Catalog;
