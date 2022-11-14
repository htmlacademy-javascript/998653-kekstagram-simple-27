import { EFFECTS } from './data.js';
const form = document.querySelector('.img-upload__form');
const inputEffectRadio = document.querySelector('.effects__radio');
const imgPreview = document.querySelector('img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;
const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.classList.remove('hidden'); // не убирается класс??
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
  });
  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

// переключение фильтров
inputEffectRadio.addEventListener('change', () => {
  imgPreview.classList.add('effects__preview--chrome');
});

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  //imgPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  updateSlider();
};

const onSliderUpdate = () => {
  imgPreview.style.filter = 'none';
  imgPreview.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  imgPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  imgPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`; //filter: invert(0..100%) с шагом 1%; ??
  effectLevel.value = sliderValue;
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
};

export { resetEffects };
export { updateSlider };
