'use strict';

(function () {
  var dialogHandler = window.util.setupForm.querySelector('.upload');

  var onHandlerMouseDown = function (evt) {
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

      window.util.setupForm.style.top = (window.util.setupForm.offsetTop - shift.y) + 'px';
      window.util.setupForm.style.left = (window.util.setupForm.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged > 1) {
        var onDraggedHandlerClick = function (draggedEvt) {
          draggedEvt.preventDefault();
          dialogHandler.removeEventListener('click', onDraggedHandlerClick);
        };

        dialogHandler.addEventListener('click', onDraggedHandlerClick);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  var addOnHandlerMouseDown = function () {
    dialogHandler.addEventListener('mousedown', onHandlerMouseDown);
  };

  var removeOnHandlerMouseDown = function () {
    dialogHandler.removeEventListener('mousedown', onHandlerMouseDown);
  };

  var resetPosition = function () {
    window.util.setupForm.style.top = '';
    window.util.setupForm.style.left = '';
  };

  window.formMoving = {
    addOnHandlerMouseDown: addOnHandlerMouseDown,
    removeOnHandlerMouseDown: removeOnHandlerMouseDown,
    resetPosition: resetPosition
  };
})();
