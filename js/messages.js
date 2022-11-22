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
};

const onOverlayClick = () => {
  hideMessage();
};

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  const successButton = successMessageElement.querySelector('.success__button');
  successButton.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onMessageEscKeyDown);
  bodyElement.append(successMessageElement);
  bodyElement.style.overflow = 'hidden';
};

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  const errorButton = errorMessageElement.querySelector('.error__button');
  errorButton.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onMessageEscKeyDown);
  document.addEventListener('click', onOverlayClick);
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
