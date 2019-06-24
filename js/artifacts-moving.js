'use strict';
(function () {

  var artifactsCells = document.querySelectorAll('.setup-artifacts-cell');

  var onCellMouseDown = function (evt) {
    evt.preventDefault();

    if (evt.currentTarget.children[0]) {
      var draggedArtifact = evt.currentTarget.children[0];
      var onCellMouseUp = function (upEvt) {
        upEvt.preventDefault();

        if (upEvt.target.classList.contains('setup-artifacts-cell')) {
          upEvt.target.appendChild(draggedArtifact);
        }

        document.removeEventListener('mouseup', onCellMouseUp);
      };

      document.addEventListener('mouseup', onCellMouseUp);
    }
  };

  var addOnCellsMousedown = function () {
    artifactsCells.forEach(function (elem) {
      elem.addEventListener('mousedown', onCellMouseDown);
    });
  };

  var removeOnCellsMousedown = function () {
    artifactsCells.forEach(function (elem) {
      elem.removeEventListener('mousedown', onCellMouseDown);
    });
  };

  window.artifactsMoving = {
    addOnCellsMousedown: addOnCellsMousedown,
    removeOnCellsMousedown: removeOnCellsMousedown
  };
})();
