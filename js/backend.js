'use strict';

(function () {
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';
  var SUCCESS_CODE = 200;
  var BAD_REQUEST_CODE = 400;
  var UNAUTHORIZED_CODE = 401;
  var NOT_FOUND_CODE = 404;
  var SERVER_ERROR_CODE = 500;
  var DEFAULT_TIMEOUT = 10000;


  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = DEFAULT_TIMEOUT;

    xhr.addEventListener('load', function () {
      var errorMessage = '';
      switch (xhr.status) {
        case SUCCESS_CODE:
          onLoad(xhr.response);
          break;
        case BAD_REQUEST_CODE:
          errorMessage = 'ОШИБКА! Неверный запрос! (400)';
          break;
        case UNAUTHORIZED_CODE:
          errorMessage = 'ОШИБКА! Пользователь не авторизован! (401)';
          break;
        case NOT_FOUND_CODE:
          errorMessage = 'ОШИБКА! Файл не найден! (404)';
          break;
        case SERVER_ERROR_CODE:
          errorMessage = 'ОШИБКА! На сервере произошла ошибка! (500)';
          break;
        default:
          errorMessage = 'ОШИБКА! Статус ошибки: ' + xhr.status;
      }
      if (errorMessage) {
        onError(errorMessage);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + ' секунд!');
    });

    xhr.open('GET', LOAD_URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = DEFAULT_TIMEOUT;

    xhr.addEventListener('load', function () {
      var errorMessage = '';
      switch (xhr.status) {
        case SUCCESS_CODE:
          onLoad(xhr.response);
          break;
        case SERVER_ERROR_CODE:
          errorMessage = 'ОШИБКА! На сервере произошла ошибка! (500)';
          break;
        default:
          errorMessage = 'ОШИБКА! Статус ошибки: ' + xhr.status;
      }
      if (errorMessage) {
        onError(errorMessage);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + ' секунд!');
    });

    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
