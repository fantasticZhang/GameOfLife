/**
 * Created by jin on 2017/6/3.
 */
var game = require('./gameSpec');
var expect = require('chai').expect;

let newGame = new game(
  {
    'canvasId': 'gamePanel',
    'widthNumber': 50,
    'heightNumber': 50,
    'initLive': [[10, 15], [10, 16], [10, 17], [10, 18], [10, 19], [10, 20], [10, 21], [10, 22],
      [10, 23], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14], [11, 14], [12, 14],
      [13, 14], [14, 14], [17, 14], [17, 15], [18, 16], [18, 17], [19, 18], [19, 19],
      [20, 20], [20, 21], [21, 22], [22, 23], [22, 22], [23, 21], [23, 20], [24, 19],
      [24, 18], [25, 17], [25, 16], [26, 15], [26, 14], [27, 15], [27, 16], [36, 16],
      [28, 17], [28, 18], [29, 19], [29, 20], [30, 21], [30, 22], [31, 23], [32, 22],
      [32, 21], [33, 20], [34, 19], [35, 18], [35, 17], [36, 15], [36, 14],]
  }
);

describe('test of game.js -> core logic', function() {
  it('if game.js exist', function() {
    expect(game).to.not.be.undefined;
  });

  it('if game can construct instance', function() {
    expect(newGame).to.not.be.undefined;
  });

  it('if game cell\'s life can be initialed', function() {

    expect(newGame.initState).to.be.an('Array');
  });

  it('if game state can be initialed',() => {
    expect(newGame.init).to.be.not.undefined;
  });

  it('if the game can start animation', () => {
    expect(newGame.startAnimation).to.not.be.undefined;
  });

  it('if the game can stop animation', () => {
    expect(newGame.stopAnimation).to.not.be.undefined;
  });

  it('if the game can clear all cells', () => {
    expect(newGame.clearAnimation).to.not.be.undefined;
  });
  it('if the game can be one step animation', () => {
    expect(newGame.nextAnimation).to.not.be.undefined;
  });
});
