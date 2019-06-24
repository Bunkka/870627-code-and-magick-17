'use strict';

(function () {
  var ALL_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var ALL_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var createСharacter = function () {
    var character = {
      name: window.util.getRandomElementFromArray(ALL_NAMES) + ' ' + window.util.getRandomElementFromArray(ALL_SURNAMES),
      coatColor: window.util.getRandomElementFromArray(window.util.ALL_COAT_COLORS),
      eyesColor: window.util.getRandomElementFromArray(window.util.ALL_EYES_COLORS)
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

  window.data = {
    createArrayOfCharacters: createArrayOfCharacters
  };
})();
