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

const onButtonClick = () => {
  hideMessage();
  closeFormChangeImg();
};

const onButtonErrorClick = () => {
  hideMessage();
  unBlockSubmitButton();
};

const onOverlayClick = () => {
  hideMessage();
  closeFormChangeImg();
};

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  const successButton = successMessageElement.querySelector('.success__button');
  successButton.addEventListener('click', onButtonClick);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeyDown);
  bodyElement.append(successMessageElement);
  bodyElement.style.overflow = 'hidden';
};

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  const errorButton = errorMessageElement.querySelector('.error__button');
  errorButton.addEventListener('click', onButtonErrorClick);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeyDown);
  bodyElement.append(errorMessageElement);
};

function hideMessage() {
  const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeyDown);
  document.removeEventListener('click', onOverlayClick);
  bodyElement.style.overflow = 'auto';
}
export { showSuccessMessage, showErrorMessage };
