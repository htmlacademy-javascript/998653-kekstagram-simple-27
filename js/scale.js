// редактировать масштаб изображения

//При нажатии на кнопки .scale__control--smaller и .scale__control--bigger должно изменяться значение поля .scale__control--value;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const inputScaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview'); //transform: scale(0.75).
const VALUE_DEFAULT = 100;
const STEP = 25;

const STEP_VALUE = {
  min: 25,
  max: 100,
};

const scaleImg = (value = VALUE_DEFAULT) => {
  imgPreview.style.transform = `scale(${value / 100})`;
  inputScaleValue.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  //значение из поля ввода инпута = всегда СТРОКА!
  const currentValue = parseInt(inputScaleValue.value, 10);
  let newValue = currentValue - STEP;
  if (newValue < STEP_VALUE.min) {
    newValue = STEP_VALUE.min;
  }
  scaleImg(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(inputScaleValue.value, 10);
  let newValue = currentValue + STEP;
  if (newValue > STEP_VALUE.max) {
    newValue = STEP_VALUE.max;
  }
  scaleImg(newValue);
};

const resetScale = () => {
  scaleImg();
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export { resetScale };

// не возвращается форма с масштабом 100% только 55% как в разметке
