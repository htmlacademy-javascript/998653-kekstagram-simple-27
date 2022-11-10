// модуль для генерации временных данных

import { getRandomElementArray } from './util.js';
import { getRandomPositiveInteger } from './util.js';

const ARRAY_COUNT = {
  min: 1,
  max: 25,
};

const LIKES_COUNT = {
  min: 15,
  max: 200,
};

const COMMENT_COUNT = {
  min: 0,
  max: 200,
};

const ARRAY_LENGTH = 25;

const DESCRIPTON_PHOTO = [
  'Даже близкие не читают мысли. Выражать чувства — твоя отвественность',
  'То чувство, когда ты родился красавчиком 😎',
  'Я со своим лучшим другом.',
  'У меня есть цели. И я иду к ним, несмотря на все преграды',
  'Каждый мужчина должен уметь сделать из своей женщины королеву, тогда он сам станет для неё королём» 👑👸🤴',
  'Пятница развратница',
  'Мозги — очень хорошая вещь, жаль не все ими умеют пользоваться…» 😜',
  '«Пошёл, увидел, забыл, что хотел.» 😅',
  'В твоих глазах можно утонуть.» 👀🙆‍♀️',
  'Хорошо там, где меня нет… Но ничего, я и туда доберусь!',
  'Страшнее фотографии в паспорте может быть только её ксерокопия.',
  'Бегаю ли я по утрам? Конечно. Еще и с криками: «Блин!! Проспал!!!»',
  'Хороший друг дешевле психотерапии.',
  'У каждого есть шанс на ошибку, но у меня безлимит.',
  'Жeнcкaя лoгикa – этo твepдaя yвepeннocть в тoм, чтo любyю oбъeктивнyю peaльнocть мoжнo пpeoдoлeть жeлaниeм.',
  'Если бы у меня было чувство юмора, я бы придумал подпись посмешнее.',
  'Похоже у меня аллергия на утро',
  'От души посмеяться и вволю выспаться – два лучших лекарства от всего на свете',
  'Деньги тоже страдают, оттого, что у них нет меня.',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Будьте счастливы в этот момент, потому что этот момент — и есть ваша жизнь',
  'Я пыталася заниматься йогой, но в позе лотоса уснул.',
  'Всегда помните: вы живете только один раз.',
  'Улыбка — красивая кривая, которая делает мир прочнее.',
];

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElementArray(DESCRIPTON_PHOTO),
  likes: getRandomPositiveInteger(LIKES_COUNT.min, LIKES_COUNT.max),
  comentcs: getRandomPositiveInteger(COMMENT_COUNT.min, COMMENT_COUNT.max),
});

const photosArr = Array.from({ length: ARRAY_LENGTH }, (curretValue, index) =>
  createPhoto(index + 1)
);

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

export { photosArr };
export { EFFECTS };

