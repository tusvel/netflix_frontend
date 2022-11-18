import { getRatingsUrl } from '@/config/api.config';

import { $auth } from '../api/interceptors';

export const RatingService = {
  async setRating(movieId: string, value: number) {
    return $auth.post<string>(getRatingsUrl('/set-rating'), {
      movieId,
      value
    });
  },

  async getByUserMovie(movieId: string) {
    return $auth.get<number>(getRatingsUrl(`/${movieId}`));
  }
};
