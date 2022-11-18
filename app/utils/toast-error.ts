import { toastr } from 'react-redux-toastr';

import { errorHandler } from '@/utils/errorHandler';

export const toastError = (error: any, title?: string) => {
  const message = errorHandler(error);
  toastr.error(title || 'Error request', message);
  throw message;
};
