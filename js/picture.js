import { photosArr } from "./data.js";

//найдем в документе шаблон который будем копировать
const templateElement = document
  .querySelector("#success")
  .content.querySelector(".success");
console.log(templateElement);

// список куда будем вставлять скопированные элементы
const picturesList = document.querySelector(".pictures");

//склонируем в шаблон и поместим в список, чтобы проверить что отрисовка работает
const photoElement = templateElement.cloneNode(true);
picturesList.appendChild(photoElement);

const photoFragment = document.createDocumentFragment();

//пройдемся по массиву данных
photosArrs.forEach((photo) => {
  //склонируем в шаблон и поместим в список, чтобы проверить что отрисовка работает
  const photoElement = templateElement.cloneNode(true);
  photoElement.querySelector(".picture__img").style.src = photo.url;
  photoElement.querySelector(".picture__likes").textContent = photo.likes;
  photoElement.querySelector(".picture__comments").textContent = photo.coments;
  photoFragment.appendChild(photoElement);
});

picturesList.appendChild(photoFragment);
