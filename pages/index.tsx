import type { GetStaticProps, NextPage } from 'next';

import Home from '@/pages/home/Home';
import { IHome } from '@/pages/home/home.interface';

import { IGalleryItem } from '@/ui/gallery/gallery.interface';
import { ISlide } from '@/ui/slider/slider.interface';

import { ActorService } from '@/services/actor.service';
import { MovieService } from '@/services/movie.service';

import { getGenresList } from '@/utils/movie/getGenresListEach';

import { getActorUrl, getMovieUrl } from '@/config/url.config';

const HomePage: NextPage<IHome> = ({ slides, trendingMovies, actors }) => {
  return (
    <Home slides={slides} trendingMovies={trendingMovies} actors={actors} />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll();
    const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
      _id: m._id,
      link: getMovieUrl(m.slug),
      bigPoster: m.bigPoster,
      subTitle: getGenresList(m.genres),
      title: m.title
    }));

    const { data: dataActors } = await ActorService.getAll();
    const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
      name: a.name,
      posterPath: a.photo,
      url: getActorUrl(a.slug),
      content: {
        title: a.name,
        subTitle: `+${a.countMovies} movies`
      }
    }));

    const dataTrendingMovies = await MovieService.getMostPopularMovies();
    const trendingMovies: IGalleryItem[] = dataTrendingMovies
      .slice(0, 7)
      .map((m) => ({
        name: m.title,
        posterPath: m.poster,
        url: getMovieUrl(m.slug)
      }));

    return {
      props: {
        slides,
        trendingMovies,
        actors
      } as IHome,
      revalidate: 60
    };
  } catch (error) {
    return {
      props: {
        slides: [],
        trendingMovies: [],
        actors: []
      }
    };
  }
};

export default HomePage;
