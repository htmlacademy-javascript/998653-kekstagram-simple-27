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

getRandomPositiveInteger(12, 678);

const ARRAY_MIN = 1;
const ARRAY_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENT_MIN = 0;
const COMMENT_MAX = 200;
const ARRAY_LENGTH = 4;
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
// последовательность из чисел, которые идут один за другим
const arr = [];
for (let i = ARRAY_MIN - 1; i <= ARRAY_MAX - 1; i++) {
  arr[i] = arr.push(i);
}

const createIdValue = () => {
  arr.forEach((currentValue) => currentValue);
};

// создаем функцию, которая будет возвращать случайный элемент из переданного в нее массива
function getRandomElementArray(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

// функция для создания шаблона фотографии
const createPhoto = () => ({
  id: getRandomPositiveInteger(ARRAY_MIN, ARRAY_MAX),
  url: `photos/${getRandomPositiveInteger(ARRAY_MIN, ARRAY_MAX)}.jpg`,
  description: getRandomElementArray(DESCRIPTON_PHOTO),
  likes: getRandomPositiveInteger(LIKES_MIN, LIKES_MAX),
  coments: getRandomPositiveInteger(COMMENT_MIN, COMMENT_MAX),
});

//создадим 25 элементов массива с фото . Используем метод Aray.from. Первый аргумент - итерируемый объект, который будет преоразован в массив. Второй - функция, которая будет вызвана для каждого элемента массива. Генерируем последовательность объектов.

const createPhotosArr = Array.from({ length: ARRAY_LENGTH }, createPhoto);

//или РАЗОБРАТЬ ПОЧЕМУ НЕ СРАБОТАЛО
const PhotosFor = [];
for (let i = 0; i < ARRAY_LENGTH; i++) {
  PhotosFor[i] = PhotosFor.push(createPhoto);
}

export { createIdValue, createPhotosArr };
