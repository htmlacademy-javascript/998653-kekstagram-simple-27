import { createPictures } from './picture.js';
import './form.js';
import { resetForm, resetFileLoad } from './form.js';
import { resetEffects } from './effects.js';
import { showAlert } from './util.js';
import { getData, sendData } from './api.js';
import { resetScale } from './scale.js';
import { showSuccessMessage, showErrorMessage } from './messages.js';
import { setOnFormSubmit } from './form.js';

//cb на случай успешного получения данных = onSuccess
const onGetDataSuccess = (offers) => {
  createPictures(offers);
};

//cb на случай успешной отправки формы = onSuccess
const onSendDataSuccess = () => {
  resetScale();
  resetEffects();
  resetForm();
  resetFileLoad();
  showSuccessMessage();
};

getData(onGetDataSuccess, showAlert);

// метод который установит подписку на форму
setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, showErrorMessage, data);
});
