'use strict';

(function () {
  var setupOpenButton = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpenButton.querySelector('.setup-open-icon');

  var setupCloseButton = window.util.setupForm.querySelector('.setup-close');
  var setupSimilar = window.util.setupForm.querySelector('.setup-similar');

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
    window.nameValidation.addListener();
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
    setupSimilar.classList.add('hidden');
    window.wizardCustomize.removeOnCoatClick();
    window.wizardCustomize.removeOnEyesClick();
    window.wizardCustomize.removeOnFireballClick();
    window.formMoving.removeOnHandlerMouseDown();
    window.formMoving.resetPosition();
    window.artifactsMoving.removeOnCellsMousedown();
    window.nameValidation.removeListener();
  };

  var characters = window.data.createArrayOfCharacters(window.util.NUMBER_OF_SIMILAR_CHARACTERS);

  window.render.renderArrayOfCharacters(characters);

  setupOpenButton.addEventListener('click', function () {
    openSetup();
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEY_CODE) {
      openSetup();
    }
  });
})();
