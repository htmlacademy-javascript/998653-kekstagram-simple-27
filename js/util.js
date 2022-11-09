//модуль с утилитарными foo
function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}

const getRandomElementArray = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

export { getRandomPositiveInteger };
export { getRandomElementArray };

// проверка, что кнопка Esc
const isKeyDownEsc = (evt) => evt.keyCode === 27;
export { isKeyDownEsc };
