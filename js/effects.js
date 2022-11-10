import { EFFECTS } from './data.js';
const form = document.querySelector('.img-upload__form');
const inputEffectRadio = document.querySelector('.effects__radio');
const imgPreview = document.querySelector('.img-upload__preview');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

// переключение фильтров
inputEffectRadio.addEventListener('change', () => {
  imgPreview.classList.add('effects__preview--chrome');
});

const onFormChange = (evt) => {
  console.log(evt);
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imgPreview.classList.add(`effects__preview--${chosenEffect.name}`);
};

form.addEventListener('change', onFormChange);

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
};

//эффект не срабатывает при повторном нажатии на изображение
