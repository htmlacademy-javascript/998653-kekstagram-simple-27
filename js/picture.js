import { photosArr } from './data.js';

const templateElement = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const createPictures = (array) => {
  const picturesList = document.querySelector('.pictures');
  const photoFragment = document.createDocumentFragment();

  array.forEach((photo) => {
    const photoElement = templateElement.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__img').alt = photo.description;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent =
      photo.comentcs;
    photoFragment.appendChild(photoElement);
  });
  picturesList.append(photoFragment);
};

export { createPictures };
