'use strict';

(function () {
  var userNameField = window.util.setupForm.querySelector('.setup-user-name');

  var onUserNameInvalid = function () {
    if (userNameField.validity.tooShort) {
      userNameField.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameField.validity.tooLong) {
      userNameField.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameField.validity.valueMissing) {
      userNameField.setCustomValidity('Обязательное поле');
    } else {
      userNameField.setCustomValidity('');
    }
  };

  var addListener = function () {
    userNameField. addEventListener('invalid', onUserNameInvalid);
  };

  var removeListener = function () {
    userNameField. removeEventListener('invalid', onUserNameInvalid);
  };

  window.nameValidation = {
    addListener: addListener,
    removeListener: removeListener
  };
})();
