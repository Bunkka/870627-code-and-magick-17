'use strict';

(function () {
  var renderCharacter = function (character, template) {
    var characterElement = template.cloneNode(true);
    characterElement.querySelector('.setup-similar-label').textContent = character.name;
    characterElement.querySelector('.wizard-coat').style.fill = character.colorCoat;
    characterElement.querySelector('.wizard-eyes').style.fill = character.colorEyes;

    return characterElement;
  };

  var renderArrayOfCharacters = function (array) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var fragment = document.createDocumentFragment();

    array.forEach(function (elem) {
      fragment.appendChild(renderCharacter(elem, similarWizardTemplate));
    });

    document.querySelector('.setup-similar-list').appendChild(fragment);
  };

  window.render = {
    renderArrayOfCharacters: renderArrayOfCharacters
  };
})();
