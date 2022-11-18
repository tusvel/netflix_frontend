import { IMovieEditInput } from '@/pages/admin/movie/movie-edit.interface';

import { IMovie } from '@/shared/types/movie.types';

import { getMoviesUrl } from '@/config/api.config';

import { $auth, $host } from '../api/interceptors';

export const MovieService = {
  async getAll(searchTerm?: string) {
    return $host.get<IMovie[]>(getMoviesUrl(``), {
      params: searchTerm
        ? {
            searchTerm
          }
        : {}
    });
  },

  async getMostPopularMovies() {
    const { data: movies } = await $host.get<IMovie[]>(
      getMoviesUrl('/most-popular')
    );
    return movies;
  },

  async deleteMovie(_id: string) {
    return $auth.delete<string>(getMoviesUrl(`/${_id}`));
  },

  async create() {
    return $auth.post<string>(getMoviesUrl(`/`));
  },

  async getById(_id: string) {
    return $auth.get<IMovieEditInput>(getMoviesUrl(`/${_id}`));
  },

  async update(_id: string, data: IMovieEditInput) {
    return $auth.put<string>(getMoviesUrl(`/${_id}`), data);
  },

  async getByGenres(genreIds: string[]) {
    return $host.post<IMovie[]>(getMoviesUrl(`/by-genres`), {
      genreIds
    });
  },

  async getByActor(actorId: string) {
    return $host.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`));
  },

  async getBySlug(slug: string) {
    return $host.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`));
  },

  async updateCountOpened(slug: string) {
    return $host.put<string>(getMoviesUrl(`/update-count-opened`), { slug });
  }
};
