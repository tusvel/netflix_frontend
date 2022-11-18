import dynamic from 'next/dynamic';
import { FC } from 'react';

import Content from '@/pages/single-movie/Content/Content';
import { useUpdateCountOpened } from '@/pages/single-movie/useUpdateCountOpened';

import SubHeading from '@/ui/Heading/SubHeading';
import Banner from '@/ui/banner/Banner';
import Gallery from '@/ui/gallery/Gallery';
import { IGalleryItem } from '@/ui/gallery/gallery.interface';

import { IMovie } from '@/shared/types/movie.types';

import Meta from '@/utils/meta/Meta';

const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
  ssr: false
});
const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
  ssr: false
});

const SingleMovie: FC<{ movie: IMovie; similarMovies: IGalleryItem[] }> = ({
  movie,
  similarMovies
}) => {
  useUpdateCountOpened(movie.slug);
  return (
    <Meta title={movie.title} description={`Watch ${movie.title}`}>
      <Banner
        image={movie.bigPoster}
        Detail={() => <Content movie={movie} />}
      />

      <DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug} />

      <div className="mt-12">
        <SubHeading title="Similar" />
        <Gallery items={similarMovies} />
      </div>

      <DynamicRateMovie slug={movie.slug} id={movie._id} />
    </Meta>
  );
};

export default SingleMovie;
