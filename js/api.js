import { showAlert } from './util.js';

// получим данные (загруженные фото) с удаленного сервера
const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data', {
    credentials: 'same-origin',
  })
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert(
        'При загрузке с сервера произошла ошибка запроса! Попробуйте еще раз'
      );
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(' https://27.javascript.pages.academy/kekstagram-simple ', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      onFail('Попробуйте еще раз');
    })
    .catch(() => {
      onFail('Попробуйте еще раз');
    });
};

export { getData, sendData };
