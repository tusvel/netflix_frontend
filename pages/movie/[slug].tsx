import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import SingleMovie from '@/pages/single-movie/SingleMovie';

import { IGalleryItem } from '@/ui/gallery/gallery.interface';

import { IMovie } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

import { getMovieUrl } from '@/config/url.config';

import Error404 from '../404';

export interface IMoviePage {
  movie: IMovie | undefined;
  similarMovies: IGalleryItem[];
}

const MoviePage: NextPage<IMoviePage> = ({ similarMovies, movie }) => {
  return movie ? (
    <SingleMovie movie={movie} similarMovies={similarMovies || []} />
  ) : (
    <Error404 />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: movies } = await MovieService.getAll();

    const paths = movies.map((a) => ({
      params: { slug: a.slug }
    }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    return {
      paths: [],
      fallback: false
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: movie } = await MovieService.getBySlug(String(params?.slug));

    const { data: dataSimilarMovies } = await MovieService.getByGenres(
      movie.genres.map((g) => g._id)
    );

    const similarMovies: IGalleryItem[] = dataSimilarMovies
      .filter((m) => m._id !== movie._id)
      .map((m) => ({
        name: m.title,
        posterPath: m.poster,
        url: getMovieUrl(m.slug)
      }));

    return {
      props: {
        similarMovies,
        movie
      },
      revalidate: 60
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

export default MoviePage;
