import config from '../config';

const CATEGORIES_URL = `${config.URL_BACKEND}/categories`;

function getAllWithVideos() {
  return fetch(`${CATEGORIES_URL}?_embed=videos`)
    .then(async (resp) => {
      if (resp.ok) {
        const result = await resp.json();
        return result;
      }
      throw new Error('Não foi possível obter os dados');
    });
}

function getAll() {
  return fetch(`${CATEGORIES_URL}`)
    .then(async (resp) => {
      if (resp.ok) {
        const result = await resp.json();
        return result;
      }
      throw new Error('Não foi possível obter os dados');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
