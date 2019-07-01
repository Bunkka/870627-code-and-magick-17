'use strict';

(function () {
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;
  var ALL_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var ALL_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var ALL_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var NUMBER_OF_SIMILAR_CHARACTERS = 4;
  var setupForm = document.querySelector('.setup');

  var getRandomBetween = function (min, max) {
    return min + (max - min) * Math.random();
  };

  var getRandomElementFromArray = function (arr) {
    return arr[Math.floor(getRandomBetween(0, arr.length))];
  };

  window.util = {
    ENTER_KEY_CODE: ENTER_KEY_CODE,
    ESC_KEY_CODE: ESC_KEY_CODE,
    ALL_COAT_COLORS: ALL_COAT_COLORS,
    ALL_EYES_COLORS: ALL_EYES_COLORS,
    ALL_FIREBALL_COLORS: ALL_FIREBALL_COLORS,
    NUMBER_OF_SIMILAR_CHARACTERS: NUMBER_OF_SIMILAR_CHARACTERS,
    setupForm: setupForm,
    getRandomBetween: getRandomBetween,
    getRandomElementFromArray: getRandomElementFromArray
  };
})();
