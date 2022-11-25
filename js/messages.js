import { closeFormChangeImg, unBlockSubmitButton } from './form.js';

const successMessageTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorMessageTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');
const bodyElement = document.querySelector('body');

const isEscEvt = (evt) => evt.key === 'Escape' || 'Esc';

const onMessageEscKeyDown = (evt) => {
  if (isEscEvt(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const onButtonClickSuccess = () => {
  hideMessage();
  closeFormChangeImg();
};

const onButtonErrorClick = () => {
  hideMessage();
  unBlockSubmitButton();
};

const onOverlayClickSucsess = () => {
  hideMessage();
  closeFormChangeImg();
};

const onOverlayClickError = () => {
  hideMessage();
};

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  const successButton = successMessageElement.querySelector('.success__button');
  successButton.addEventListener('click', onButtonClickSuccess);
  document.addEventListener('click', onOverlayClickSucsess);
  document.addEventListener('keydown', onMessageEscKeyDown);
  bodyElement.append(successMessageElement);
  bodyElement.style.overflow = 'hidden';
};

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  const errorButton = errorMessageElement.querySelector('.error__button');
  errorButton.addEventListener('click', onButtonErrorClick);
  document.addEventListener('click', onOverlayClickError);
  document.addEventListener('keydown', onMessageEscKeyDown);
  bodyElement.append(errorMessageElement);
};

function hideMessage() {
  const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeyDown);
  document.removeEventListener('click', onOverlayClickSucsess);
  document.removeEventListener('click', onOverlayClickError);
  bodyElement.style.overflow = 'auto';
}
export { showSuccessMessage, showErrorMessage };
