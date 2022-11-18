import { IActorEditInput } from '@/pages/admin/actor/actor-edit.interface';

import { IActor } from '@/shared/types/movie.types';

import { getActorsUrl } from '@/config/api.config';

import { $auth, $host } from '../api/interceptors';

export const ActorService = {
  async getAll(searchTerm?: string) {
    return $host.get<IActor[]>(getActorsUrl(''), {
      params: searchTerm
        ? {
            searchTerm
          }
        : {}
    });
  },

  async deleteActor(_id: string) {
    return $auth.delete<string>(getActorsUrl(`/${_id}`));
  },

  async create() {
    return $auth.post<string>(getActorsUrl(`/`));
  },

  async getById(_id: string) {
    return $auth.get<IActorEditInput>(getActorsUrl(`/${_id}`));
  },

  async update(_id: string, data: IActorEditInput) {
    return $auth.put<string>(getActorsUrl(`/${_id}`), data);
  },

  async getBySlug(slug: string) {
    return $host.get<IActor>(getActorsUrl(`/by-slug/${slug}`));
  }
};
