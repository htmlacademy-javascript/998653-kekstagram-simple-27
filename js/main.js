/* eslint-disable arrow-body-style */
function getRandomPositiveInteger(a, b) {
  // Если переданы отрицительные числа, возвращаем NaN
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
  "Даже близкие не читают мысли. Выражать чувства — твоя отвественность",
  "То чувство, когда ты родился красавчиком 😎",
  "Я со своим лучшим другом.",
  "У меня есть цели. И я иду к ним, несмотря на все преграды",
  "Каждый мужчина должен уметь сделать из своей женщины королеву, тогда он сам станет для неё королём» 👑👸🤴",
  "Пятница развратница",
  "Мозги — очень хорошая вещь, жаль не все ими умеют пользоваться…» 😜",
  "«Пошёл, увидел, забыл, что хотел.» 😅",
  "В твоих глазах можно утонуть.» 👀🙆‍♀️",
  "Хорошо там, где меня нет… Но ничего, я и туда доберусь!",
  "Страшнее фотографии в паспорте может быть только её ксерокопия.",
  "Бегаю ли я по утрам? Конечно. Еще и с криками: «Блин!! Проспал!!!»",
  "Хороший друг дешевле психотерапии.",
  "У каждого есть шанс на ошибку, но у меня безлимит.",
  "Жeнcкaя лoгикa – этo твepдaя yвepeннocть в тoм, чтo любyю oбъeктивнyю peaльнocть мoжнo пpeoдoлeть жeлaниeм.",
  "Если бы у меня было чувство юмора, я бы придумал подпись посмешнее.",
  "Похоже у меня аллергия на утро",
  "От души посмеяться и вволю выспаться – два лучших лекарства от всего на свете",
  "Деньги тоже страдают, оттого, что у них нет меня.",
  "Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.",
  "Всегда начинайте свой день с хороших людей и кофе.",
  "Будьте счастливы в этот момент, потому что этот момент — и есть ваша жизнь",
  "Я пыталася заниматься йогой, но в позе лотоса уснул.",
  "Всегда помните: вы живете только один раз.",
  "Улыбка — красивая кривая, которая делает мир прочнее.",
];

// создадим масисив из последавательности чисел от 1 до 25
const arrIndex = [];
for (let i = ARRAY_COUNT.min - 1; i < ARRAY_COUNT.max; i++) {
  arrIndex[i] = arrIndex.push(i + 1);
}

// уберем скобки - используем spread -синтаксис
// arr = Math.floor(...arrIndex);

// создаем функцию, которая будет возвращать случайный элемент из переданного в нее массива

const getRandomElementArray = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

// функция для создания шаблона фотографии
const createPhoto = (index) => {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomElementArray(DESCRIPTON_PHOTO),
    likes: getRandomPositiveInteger(LIKES_COUNT.min, LIKES_COUNT.max),
    coments: getRandomPositiveInteger(COMMENT_COUNT.min, COMMENT_COUNT.max),
  };
};

const PhotosArr = Array.from({ length: ARRAY_LENGTH }, (curretValue, index) =>
  createPhoto(index + 1)
);
console.log(PhotosArr);
