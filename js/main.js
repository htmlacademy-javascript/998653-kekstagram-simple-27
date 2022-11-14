import { createPictures } from './picture.js';
import './form.js';
import './scale.js';
import './effects.js';
import { getData } from './api.js';
getData((photos) => {
  createPictures(photos);
});
