import { isKeyDownEsc } from './util.js';
import { resetScale } from './scale.js';
import { updateSlider } from './effects.js';
import { resetEffects } from './effects.js';

const form = document.querySelector('#upload-select-image');
const closeImgButton = document.querySelector('#upload-cancel');
const body = document.querySelector('body');
const imgEditForm = document.querySelector('.img-upload__overlay');
const fileLoad = document.querySelector('#upload-file');
const buttonSubmitElement = document.querySelector('.img-upload__submit');

const resetForm = () => {
  form.reset();
};

const resetFileLoad = () => {
  fileLoad.value = '';
};

const openFormChangeImg = () => {
  body.classList.add('.modal-open');
  imgEditForm.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeyDown);
  resetScale();
  updateSlider();
};

const closeFormChangeImg = () => {
  resetForm();
  resetScale();
  resetEffects();
  body.classList.remove('modal-open');
  imgEditForm.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeyDown);
};

const blockSubmitButton = () => {
  buttonSubmitElement.disabled = 'true';
  buttonSubmitElement.textContent = 'Публикуется...';
};

const unBlockSubmitButton = () => {
  buttonSubmitElement.disabled = 'false';
  buttonSubmitElement.textContent = 'Опубликовать';
};

function onEscKeyDown(evt) {
  if (isKeyDownEsc(evt)) {
    evt.preventDefault();

    closeFormChangeImg();
  }
}

fileLoad.addEventListener('change', () => {
  openFormChangeImg();
});

closeImgButton.addEventListener('click', () => {
  closeFormChangeImg();
});

//Роман, мне все -таки кажется что эта foo должна быть ассинхронна
const setOnFormSubmit = (cb) => {
  form.addEventListener('sumbit', async (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    await cb(new FormData(evt.target));
    unBlockSubmitButton();
  });
};

export {
  resetForm,
  resetFileLoad,
  openFormChangeImg,
  closeFormChangeImg,
  setOnFormSubmit,
};
