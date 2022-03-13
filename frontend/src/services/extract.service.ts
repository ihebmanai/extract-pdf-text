import api from '../utils/axios';

export const extractTextFromFile = (file: FormData) => {
  return api.post('extract', file, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
