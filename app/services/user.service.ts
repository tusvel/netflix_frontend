import { IProfileInput } from '@/pages/profile/profile.interface';

import { IMovie } from '@/shared/types/movie.types';
import { IUser } from '@/shared/types/user.types';

import { getUsersUrl } from '@/config/api.config';

import { $auth } from '../api/interceptors';

export const UserService = {
  async getAll(searchTerm?: string) {
    return $auth.get<IUser[]>(getUsersUrl(''), {
      params: searchTerm
        ? {
            searchTerm
          }
        : {}
    });
  },

  async getProfile() {
    return $auth.get<IUser>(getUsersUrl('/profile'));
  },

  async getFavorites() {
    return $auth.get<IMovie[]>(getUsersUrl('/profile/favorites'));
  },

  async toggleFavorite(movieId: string) {
    return $auth.put<string>(getUsersUrl('/profile/favorites'), { movieId });
  },

  async updateProfile(data: IProfileInput) {
    return $auth.put<string>(getUsersUrl('/profile'), data);
  },

  async deleteUser(_id: string) {
    return $auth.delete<string>(getUsersUrl(`/${_id}`));
  },

  async getById(_id: string) {
    return $auth.get<IUser>(getUsersUrl(`/${_id}`));
  },

  async update(_id: string, data: IProfileInput) {
    return $auth.put<string>(getUsersUrl(`/${_id}`), data);
  }
};
