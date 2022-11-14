import { isKeyDownEsc, showAlert } from './util.js';
import { resetScale } from './scale.js';
import { updateSlider } from './effects.js';
import { sendData } from './api.js';

const form = document.querySelector('#upload-select-image');
const closeImgButton = document.querySelector('#upload-cancel');
const body = document.querySelector('body');
const imgEditForm = document.querySelector('.img-upload__overlay');
const fileLoad = document.querySelector('#upload-file');
const commetTextField = document.querySelector('.text__description');

const openFormChangeImg = () => {
  body.classList.add('.modal-open');
  imgEditForm.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeyDown);
  updateSlider();
};

const isTextComment = () => document.activeElement === commetTextField;

const closeFormChangeImg = () => {
  form.reset();
  resetScale();
  body.classList.remove('modal-open');
  imgEditForm.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (isKeyDownEsc && !isTextComment()) {
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

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      (() => {
        onSuccess();
      },
      () => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      },
      new FormData(evt.target))
    );
  });
};
