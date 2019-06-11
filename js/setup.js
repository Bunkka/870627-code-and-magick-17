'use strict';

var ALL_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var ALL_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var ALL_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var ALL_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_CHARACTERS = 4;

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

document.querySelector('.setup').classList.remove('hidden');

console.log(createArrayOfCharacters(NUMBER_OF_CHARACTERS));
