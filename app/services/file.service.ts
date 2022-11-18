import { $auth } from '../api/interceptors';

export const FileService = {
  async upload(file: FormData, folder?: string) {
    return $auth.post<{ url: string; name: string }[]>(`/file`, file, {
      params: { folder },
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  }
};
