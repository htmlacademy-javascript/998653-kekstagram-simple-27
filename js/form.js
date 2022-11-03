const body = document.querySelector('body');

// поле для загрузки изображения
const uploadFile = document.querySelector('#upload-file');

//  форма редактирования изображения
const formChangeImage = document.querySelector('.img-upload__overlay');

// кнопка "Загрузить"
const upLoadButton = document.querySelector('.img-upload__label');

//кнопка закрытия окна
const upLoadCancelButton = document.querySelector('#upload-cancel');

//универсальная foo для проверки нажатия esc
const isKeyEsc = (evt) => evt.key === 'Escape';

const openModal = (evt) => {
  formChangeImage.classList.remove('hidden');
  body.classList.add('modal-open');
};


const CloseModal = ()=> {
    formChangeImage.classList.add('hidden');
    body.classList.remove('modal-open');

    //при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла #upload-file


  }


//нажатие на клавишу esc
 const onPopupEscDown (evt) => {
  if(isKeyEsc) {
    evt.preventDefault();
    CloseModal();
  }
};

// загрузка изображения  = нажатие на кнопку "Загрузить"? =>  появление формы редактирования изб?
upLoadButton.addEventListener('click', (evt) => {
  openModal();
});


// закрытие окна
upLoadCancelButton.addEventListener('click', (evt) => {
  CloseModal();
 });

document.addEventListener('keydown', (evt) => {
  onPopupEscDown();
})

//очистка всех полей формы???

 // валидация поля комментарии

const comment = document.querySelector('.text__description');
const textDescriptionComment = comment.value;

//проверка на длину коммента -указали в разметке



