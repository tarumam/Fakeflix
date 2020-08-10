import config from '../config';

const VIDEO_URL = `${config.URL_BACKEND}/videos`;

function create(video) {
  return fetch(`${VIDEO_URL}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  });
}

export default {
  create,
};
