import { IGenreEditInput } from '@/pages/admin/genre/genre-edit.interface';
import { ICollection } from '@/pages/collections/collections.interface';

import { IGenre } from '@/shared/types/movie.types';

import { getGenresUrl } from '@/config/api.config';

import { $auth, $host } from '../api/interceptors';

export const GenreService = {
  async getAll(searchTerm?: string) {
    return $host.get<IGenre[]>(getGenresUrl(``), {
      params: searchTerm
        ? {
            searchTerm
          }
        : {}
    });
  },

  async getById(_id: string) {
    return $auth.get<IGenreEditInput>(getGenresUrl(`/${_id}`));
  },

  async getBySlug(slug: string) {
    return $host.get<IGenre>(getGenresUrl(`/by-slug/${slug}`));
  },

  async getCollections() {
    return $host.get<ICollection[]>(getGenresUrl(`/collections`));
  },

  async update(_id: string, data: IGenreEditInput) {
    return $auth.put<string>(getGenresUrl(`/${_id}`), data);
  },

  async delete(_id: string) {
    return $auth.delete<string>(getGenresUrl(`/${_id}`));
  },

  async create() {
    return $auth.post<string>(getGenresUrl(`/`));
  }
};
