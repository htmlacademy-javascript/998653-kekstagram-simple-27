import { isKeyDownEsc} from './util.js';
import { resetScale } from './scale.js';
import { updateSlider } from './effects.js';
//import { sendData } from './api.js';
import { resetEffects } from './effects.js';

const form = document.querySelector('#upload-select-image');
const closeImgButton = document.querySelector('#upload-cancel');
const body = document.querySelector('body');
const imgEditForm = document.querySelector('.img-upload__overlay');
const fileLoad = document.querySelector('#upload-file');

const resetForm = () => {
  form.reset();
};

const resetFileLoad = () => {
  fileLoad.value = '';
};

/*const setUserFormSubmit = (onSuccess, evt) => {
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
};*/

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

const setOnFormSubmit = (cb) => {
  form.addEventListener('sumbit', async (evt) => {
    evt.preventDefault();
    //блокировка кнопки  blockSubmitButton ()
    await cb(new FormData(evt.target));
    // разблокировка кнопки blockSubmitButton()
  });
};

export {
  resetForm,
  resetFileLoad,
  //setUserFormSubmit,
  openFormChangeImg,
  closeFormChangeImg,
  setOnFormSubmit,
};
