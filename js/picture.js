const templateElement = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const createPictures = (photos) => {
  const picturesList = document.querySelector('.pictures');
  const photoFragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const photoElement = templateElement.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    photoFragment.appendChild(photoElement);
  });
  picturesList.append(photoFragment);
};

export { createPictures };
