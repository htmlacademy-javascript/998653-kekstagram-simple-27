const GETURL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SETURL = 'https://27.javascript.pages.academy/kekstagram-simple/';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(GETURL);
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
    const response = await fetch(SETURL, {
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
