const isKeyDownEsc = (evt) => evt.keyCode === 27;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.height = '100px';
  alertContainer.style.top = '50%';
  alertContainer.style.right = '0';
  alertContainer.style.bottom = '50%';
  alertContainer.style.left = '0';
  alertContainer.style.padding = '30px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'tomato';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
};
export { isKeyDownEsc };
export { showAlert };
