import { IMovie } from '@/shared/types/movie.types';

export interface ISlide extends Pick<IMovie, '_id' | 'bigPoster' | 'title'> {
  subTitle: string;
  link: string;
}

export interface ISlideItem {
  slide: ISlide;
  buttonTitle?: string;
}
