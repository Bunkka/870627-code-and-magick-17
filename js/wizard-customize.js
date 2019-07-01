'use strict';

(function () {
  var setupPlayer = window.util.setupForm.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes');
  var fireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');

  var changeCoatColor = function () {
    var coatColorInput = setupPlayer.querySelector('input[name=coat-color]');

    coatColorInput.value = window.util.getRandomElementFromArray(window.util.ALL_COAT_COLORS);
    wizardCoat.style.fill = coatColorInput.value;
  };

  var changeEyesColor = function () {
    var eyesColorInput = setupPlayer.querySelector('input[name=eyes-color]');

    eyesColorInput.value = window.util.getRandomElementFromArray(window.util.ALL_EYES_COLORS);
    wizardEyes.style.fill = eyesColorInput.value;
  };

  var changeFireballColor = function () {
    var fireballColorInput = setupPlayer.querySelector('input[name=fireball-color]');

    fireballColorInput.value = window.util.getRandomElementFromArray(window.util.ALL_FIREBALL_COLORS);
    fireballWrap.style.backgroundColor = fireballColorInput.value;
  };

  var onCoatClick = function () {
    changeCoatColor();
  };

  var onEyesClick = function () {
    changeEyesColor();
  };

  var onFireballClick = function () {
    changeFireballColor();
  };

  var addOnCoatClick = function () {
    wizardCoat.addEventListener('click', onCoatClick);
  };

  var removeOnCoatClick = function () {
    wizardCoat.removeEventListener('click', onCoatClick);
  };

  var addOnEyesClick = function () {
    wizardEyes.addEventListener('click', onEyesClick);
  };

  var removeOnEyesClick = function () {
    wizardEyes.removeEventListener('click', onEyesClick);
  };

  var addOnFireballClick = function () {
    fireballWrap.addEventListener('click', onFireballClick);
  };

  var removeOnFireballClick = function () {
    fireballWrap.removeEventListener('click', onFireballClick);
  };

  window.wizardCustomize = {
    addOnCoatClick: addOnCoatClick,
    removeOnCoatClick: removeOnCoatClick,
    addOnEyesClick: addOnEyesClick,
    removeOnEyesClick: removeOnEyesClick,
    addOnFireballClick: addOnFireballClick,
    removeOnFireballClick: removeOnFireballClick,
  };
})();
