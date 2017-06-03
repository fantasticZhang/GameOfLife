/**
 *
 * Created by jin on 2017/6/3.
 */

function game(param) {
  let canvasId = param.canvasId || 'gamePanel';
  let widthNumber = param.widthNumber || 100;
  let heightNumber = param.heightNumber || 100;
  let initLive = param.initLive || [[10, 24], [11, 24], [12, 24], [13, 24], [14, 24]];


  let canvas = {
    width:700,
    height:700
  };
  let cellWidth;
  let cellHeight;

  let canvasInterval;

  // 初始化二维数组
  this.initState = new Array();
  for (let index = 0; index < widthNumber; index++) {
    this.initState[index] = new Array();
    for (let subIndex = 0; subIndex < heightNumber; subIndex++) {
      this.initState[index][subIndex] = 0;
    }
  }

  this.init = function () {
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    cellWidth = canvasWidth / widthNumber;
    cellHeight = canvasHeight / heightNumber

    initLive.forEach(item => {
      this.initState[item[0]][item[1]] = 1;
    });

  };

  let aliveCount = function (x, y) {
    let aliveCount = 0;
    if (x >= 1 && y >= 1) {
      this.initState[x - 1][y - 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (x >= 1) {
      this.initState[x - 1][y] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (x >= 1 && y < this.initState[x].length - 1) {
      this.initState[x - 1][y + 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (y >= 1) {
      this.initState[x][y - 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (y >= 1 && x < this.initState.length - 1) {
      this.initState[x + 1][y - 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (x < this.initState.length - 1) {
      this.initState[x + 1][y] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (x < this.initState.length - 1 && y < this.initState[x].length - 1) {
      this.initState[x + 1][y + 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (y < this.initState[x].length - 1) {
      this.initState[x][y + 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    return aliveCount;
  };

  let update = function () {

    // 初始化下一个状态
    let nextState = new Array();
    for (let index = 0; index < widthNumber; index++) {
      nextState[index] = new Array();
      for (let subIndex = 0; subIndex < heightNumber; subIndex++) {
        nextState[index][subIndex] = 0;
      }
    }

    // 更新下一个状态
    for (let index = 0; index < initState.length; index++) {
      for (let subIndex = 0; subIndex < initState[index].length; subIndex++) {
        let aliveCounts = aliveCount(index, subIndex);
        if (aliveCounts === 3) {
          nextState[index][subIndex] = 1;
        } else if (aliveCounts === 2) {
          nextState[index][subIndex] = initState[index][subIndex];
        } else {
          nextState[index][subIndex] = 0;
        }
      }
    }
    initState = nextState;

  };

  //开始执行动画
  this.startAnimation = function (time) {
    canvasInterval = setInterval(update, time * 1000);
  };

  //停止执行动画
  this.stopAnimation = function () {
    clearInterval(canvasInterval);
  };

  // 清除所有生命点
  this.clearAnimation = function () {
    for (let index = 0; index < widthNumber; index++) {
      this.initState[index] = new Array();
      for (let subIndex = 0; subIndex < heightNumber; subIndex++) {
        this.initState[index][subIndex] = 0;
      }
    }
  }

  //下一步
  this.nextAnimation = function () {
    update();
  };

};

/**
 * Created by jin on 2017/6/3.
 */

module.exports = game;
