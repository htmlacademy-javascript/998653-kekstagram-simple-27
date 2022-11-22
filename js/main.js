import { createPictures } from './picture.js';
import './form.js';
import { resetForm, resetFileLoad } from './form.js';
import { resetEffects } from './effects.js';
import { showAlert } from './util.js';
import { getData, sendData } from './api.js';
import { resetScale } from './scale.js';
import { showSuccessMessage, showErrorMessage } from './messages.js';
import { setOnFormSubmit } from './form.js';
const onGetDataSuccess = (offers) => {
  createPictures(offers);
};
const onSendDataSuccess = () => {
  resetScale();
  resetEffects();
  resetForm();
  resetFileLoad();
  showSuccessMessage();
};

getData(onGetDataSuccess, showAlert);
setOnFormSubmit((data) => {
  sendData(onSendDataSuccess, showErrorMessage, data);
});
