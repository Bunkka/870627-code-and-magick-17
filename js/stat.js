'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 5;
var TITLE_GAP_X = 20;
var TITLE_GAP_Y = 15;
var CONTENT_GAP_X = 40;
var CONTENT_GAP_Y = 20;
var FONT_GAP = 15;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TITLE_GAP_X, CLOUD_Y + TITLE_GAP_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + TITLE_GAP_X, CLOUD_Y + TITLE_GAP_Y + FONT_GAP * 2 + GAP);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + CONTENT_GAP_X + ((BAR_WIDTH + GAP) * 2) * i, CLOUD_Y + CLOUD_HEIGHT - CONTENT_GAP_Y);
    ctx.fillRect(CLOUD_X + CONTENT_GAP_X + ((BAR_WIDTH + GAP) * 2) * i, CLOUD_Y + CLOUD_HEIGHT - (CONTENT_GAP_Y + FONT_GAP + GAP), BAR_WIDTH, -150);
  }

};
