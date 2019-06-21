'use strict';

var ALL_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var ALL_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var ALL_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var ALL_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var ALL_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBER_OF_CHARACTERS = 4;
var ESC_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var getRandomBetween = function (min, max) {
  return min + (max - min) * Math.random();
};

var getRandomElementFromArray = function (array) {
  return array[Math.floor(getRandomBetween(0, array.length))];
};

var createСharacter = function () {
  var character = {
    name: getRandomElementFromArray(ALL_NAMES) + ' ' + getRandomElementFromArray(ALL_SURNAMES),
    coatColor: getRandomElementFromArray(ALL_COAT_COLORS),
    eyesColor: getRandomElementFromArray(ALL_EYES_COLORS)
  };

  return character;
};

var createArrayOfCharacters = function (number) {
  var arr = [];
  for (var i = 0; i < number; i++) {
    arr.push(createСharacter());
  }

  return arr;
};

var renderCharacter = function (character, template) {
  var characterElement = template.cloneNode(true);
  characterElement.querySelector('.setup-similar-label').textContent = character.name;
  characterElement.querySelector('.wizard-coat').style.fill = character.coatColor;
  characterElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;

  return characterElement;
};

var onSetupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    closeSetup();
  }
};

var openSetup = function () {
  setupForm.style.top = '';
  setupForm.style.left = '';
  setupForm.classList.remove('hidden');
  setupForm.querySelector('.setup-similar').classList.remove('hidden');

  document.addEventListener('keydown', onSetupEscPress);
};

var closeSetup = function () {
  setupForm.classList.add('hidden');

  document.removeEventListener('keydown', onSetupEscPress);
};

var changeCoatColor = function () {
  var coatColorInput = setupPlayer.querySelector('input[name=coat-color]');
  coatColorInput.value = getRandomElementFromArray(ALL_COAT_COLORS);
  wizardCoat.style.fill = coatColorInput.value;
};

var changeEyesColor = function () {
  var eyesColorInput = setupPlayer.querySelector('input[name=eyes-color]');
  eyesColorInput.value = getRandomElementFromArray(ALL_EYES_COLORS);
  wizardEyes.style.fill = eyesColorInput.value;
};

var changeFireballColor = function () {
  var fireballColorInput = setupPlayer.querySelector('input[name=fireball-color]');
  fireballColorInput.value = getRandomElementFromArray(ALL_FIREBALL_COLORS);
  fireballWrap.style.backgroundColor = fireballColorInput.value;
};

var characters = createArrayOfCharacters(NUMBER_OF_CHARACTERS);

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();
characters.forEach(function (elem) {
  fragment.appendChild(renderCharacter(elem, similarWizardTemplate));
});

document.querySelector('.setup-similar-list').appendChild(fragment);

var setupOpenButton = document.querySelector('.setup-open');
var setupOpenIcon = setupOpenButton.querySelector('.setup-open-icon');

var setupForm = document.querySelector('.setup');
var setupCloseButton = setupForm.querySelector('.setup-close');
var userNameField = setupForm.querySelector('.setup-user-name');

var setupPlayer = document.querySelector('.setup-player');
var wizardCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes');
var fireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');

var dialogHandler = setupForm.querySelector('.upload');

var artifactsCells = setupForm.querySelectorAll('.setup-artifacts-cell');

setupOpenButton.addEventListener('click', function () {
  openSetup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    openSetup();
  }
});

setupCloseButton.addEventListener('click', function () {
  closeSetup();
});

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    closeSetup();
  }
});

userNameField.addEventListener('focus', function () {
  document.removeEventListener('keydown', onSetupEscPress);
});

userNameField.addEventListener('blur', function () {
  document.addEventListener('keydown', onSetupEscPress);
});

wizardCoat.addEventListener('click', function () {
  changeCoatColor();
});

wizardEyes.addEventListener('click', function () {
  changeEyesColor();
});

fireballWrap.addEventListener('click', function () {
  changeFireballColor();
});

userNameField.addEventListener('invalid', function () {
  if (userNameField.validity.tooShort) {
    userNameField.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameField.validity.tooLong) {
    userNameField.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameField.validity.valueMissing) {
    userNameField.setCustomValidity('Обязательное поле');
  } else {
    userNameField.setCustomValidity('');
  }
});

dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  var dragged = 0;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    dragged++;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupForm.style.top = (setupForm.offsetTop - shift.y) + 'px';
    setupForm.style.left = (setupForm.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged > 1) {
      var onClickPreventDefault = function (draggedEvt) {
        draggedEvt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault);
      };

      dialogHandler.addEventListener('click', onClickPreventDefault);
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

for (var i = 0; i < artifactsCells.length; i++) {
  (function (cell) {
    cell.addEventListener('mousedown', function (downEvt) {
      downEvt.preventDefault();
      if (cell.children[0]) {
        var onDropCellMouseUp = function (upEvt) {
          upEvt.preventDefault();
          if (upEvt.target.classList.contains('setup-artifacts-cell')) {
            upEvt.target.appendChild(cell.children[0]);
          }
          document.removeEventListener('mouseup', onDropCellMouseUp);
        };
        document.addEventListener('mouseup', onDropCellMouseUp);
      }
    });
  })(artifactsCells[i]);
}
