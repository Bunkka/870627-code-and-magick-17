'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TITLE_GAP_X = 20;
var TITLE_GAP_Y = 15;
var CONTENT_GAP_X = 40;
var CONTENT_GAP_Y = 20;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var SPACE_BETWEEN_BARS = 50;
var MAX_BAR_HEIGHT = 150;
var TEXT_COLOR = '#000';
var RESULT_CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_FONT = '16px PT Mono';
var MAIN_RESULT_COLOR = 'rgba(255, 0, 0, 1)';
var TITLE_TEXT = 'Ура вы победили!\nСписок результатов:';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomBetween = function (min, max) {
  return min + (max - min) * Math.random();
};

var renderText = function (ctx, text, x, y) {
  var arrayOfStrings = text.split('\n');
  for (var i = 0; i < arrayOfStrings.length; i++) {
    ctx.fillText(arrayOfStrings[i], x, y + FONT_GAP + (FONT_GAP + GAP / 2) * i);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, RESULT_CLOUD_COLOR);

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  renderText(ctx, TITLE_TEXT, CLOUD_X + TITLE_GAP_X, CLOUD_Y + TITLE_GAP_Y);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], CLOUD_X + CONTENT_GAP_X + (BAR_WIDTH + SPACE_BETWEEN_BARS) * i, CLOUD_Y + CLOUD_HEIGHT - CONTENT_GAP_Y);

    if (players[i] === 'Вы') {
      ctx.fillStyle = MAIN_RESULT_COLOR;
    } else {
      ctx.fillStyle = 'hsl(240, ' + getRandomBetween(0, 100) + '%, 50%)';
    }

    var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;

    ctx.fillRect(CLOUD_X + CONTENT_GAP_X + (BAR_WIDTH + SPACE_BETWEEN_BARS) * i, CLOUD_Y + CLOUD_HEIGHT - (CONTENT_GAP_Y + FONT_GAP + GAP / 2), BAR_WIDTH, -barHeight);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.floor(times[i]), CLOUD_X + CONTENT_GAP_X + (BAR_WIDTH + SPACE_BETWEEN_BARS) * i, CLOUD_Y + CLOUD_HEIGHT - (CONTENT_GAP_Y + FONT_GAP + GAP / 2 + barHeight + GAP));
  }

};
