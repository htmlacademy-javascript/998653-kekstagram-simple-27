// редактировать масштаб изображения

//При нажатии на кнопки .scale__control--smaller и .scale__control--bigger должно изменяться значение поля .scale__control--value;

const smallButton = document.querySelector('.scale__control--smaller');
const bigButton = document.querySelector('.scale__control--bigger');
const inputScaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img'); //transform: scale(0.75).
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

const onSmallButtonClick = () => {
  const currentValue = parseInt(inputScaleValue.value, 10);
  let newValue = currentValue - STEP;
  if (newValue < STEP_VALUE.min) {
    newValue = STEP_VALUE.min;
  }
  scaleImg(newValue);
};

const onbigButtonClick = () => {
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

smallButton.addEventListener('click', onSmallButtonClick);
bigButton.addEventListener('click', onbigButtonClick);

export { resetScale };
