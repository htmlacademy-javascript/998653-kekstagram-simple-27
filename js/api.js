const RECEIVING_URL =
  'https://27.javascript.pages.academy/kekstagram-simple/data';
const SENDING_URL = 'https://27.javascript.pages.academy/kekstagram-simple/';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(RECEIVING_URL);
    if (!response.ok) {
      throw new Error('Не удалось получить данные!');
    }

    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(SENDING_URL, {
      method: 'POST',
      body,
    });

    if (!response.ok) {
      throw new Error('Не удалось отправить форму попробуйте еще раз');
    }
    onSuccess();
  } catch (error) {
    onFail(error);
  }
};
export { getData, sendData };
