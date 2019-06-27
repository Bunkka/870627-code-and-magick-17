'use strict';

(function () {
  var setupOpenButton = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpenButton.querySelector('.setup-open-icon');

  var setupCloseButton = window.util.setupForm.querySelector('.setup-close');
  var setupSimilar = window.util.setupForm.querySelector('.setup-similar');
  var userNameField = window.util.setupForm.querySelector('.setup-user-name');

  var openSetup = function () {
    window.util.setupForm.classList.remove('hidden');
    setupCloseButton.addEventListener('click', closeSetup);
    setupCloseButton.addEventListener('keydown', onSetupCloseButtonEnterPress);
    document.addEventListener('keydown', onSetupEscPress);
    setupSimilar.classList.remove('hidden');
    window.wizardCustomize.addOnCoatClick();
    window.wizardCustomize.addOnEyesClick();
    window.wizardCustomize.addOnFireballClick();
    window.formMoving.addOnHandlerMouseDown();
    window.artifactsMoving.addOnCellsMousedown();
    userNameField.addEventListener('focus', onUserNameFieldFocus);
    userNameField.addEventListener('blur', onUserNameFieldBlur);
    userNameField.addEventListener('invalid', onUserNameInvalid);
  };

  var onSetupCloseButtonEnterPress = function (evt) {
    if (evt.keyCode === window.util.ENTER_KEY_CODE) {
      closeSetup();
    }
  };

  var onSetupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEY_CODE) {
      closeSetup();
    }
  };

  var closeSetup = function () {
    window.util.setupForm.classList.add('hidden');
    setupCloseButton.removeEventListener('click', closeSetup);
    setupCloseButton.removeEventListener('keydown', onSetupCloseButtonEnterPress);
    document.removeEventListener('keydown', onSetupEscPress);
    setupSimilar.classList.add('hidden');
    window.wizardCustomize.removeOnCoatClick();
    window.wizardCustomize.removeOnEyesClick();
    window.wizardCustomize.removeOnFireballClick();
    window.formMoving.removeOnHandlerMouseDown();
    window.formMoving.resetPosition();
    window.artifactsMoving.removeOnCellsMousedown();
    userNameField.removeEventListener('focus', onUserNameFieldFocus);
    userNameField.removeEventListener('blur', onUserNameFieldBlur);
    userNameField.removeEventListener('invalid', onUserNameInvalid);
  };

  setupOpenButton.addEventListener('click', function () {
    openSetup();
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEY_CODE) {
      openSetup();
    }
  });

  var onUserNameFieldFocus = function () {
    document.removeEventListener('keydown', onSetupEscPress);
  };

  var onUserNameFieldBlur = function () {
    document.addEventListener('keydown', onSetupEscPress);
  };

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

  var characters = window.data.createArrayOfCharacters(window.util.NUMBER_OF_SIMILAR_CHARACTERS);

  window.render.renderArrayOfCharacters(characters);
})();
