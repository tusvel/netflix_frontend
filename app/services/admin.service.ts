import { getUsersUrl } from '@/config/api.config';

import { $auth } from '../api/interceptors';

export const AdminService = {
  async getCountUsers() {
    return $auth.get<number>(getUsersUrl('/count'));
  }
};
