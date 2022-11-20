function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomElementArray = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

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
  }, 5000);
};

export { getRandomPositiveInteger };
export { getRandomElementArray };
export { isKeyDownEsc };
export { showAlert };
