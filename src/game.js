/**
 *
 * Created by jin on 2017/6/3.
 */

export default function (param) {
  let canvasId = param.canvasId || 'gamePanel';
  let widthNumber = param.widthNumber || 100;
  let heightNumber = param.heightNumber || 100;
  let initLive = param.initLive || [[10, 24], [11, 24], [12, 24], [13, 24], [14, 24]];


  let canvas = document.getElementById(canvasId);
  console.log(canvas);
  let context = canvas.getContext('2d');
  let cellWidth;
  let cellHeight;

  let canvasInterval;

  // 初始化二维数组
  let initState = new Array();
  for (let index = 0; index < widthNumber; index++) {
    initState[index] = new Array();
    for (let subIndex = 0; subIndex < heightNumber; subIndex++) {
      initState[index][subIndex] = 0;
    }
  }

  this.init = function () {
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    console.log(canvasHeight, canvasWidth);
    cellWidth = canvasWidth / widthNumber;
    cellHeight = canvasHeight / heightNumber

    // 画出小放格子
    context.lineWidth = 1;
    context.strokeStyle = '#fff';
    for (let index = 0; index < canvasWidth; index += cellWidth) {
      context.beginPath();
      context.moveTo(index + 0.5, 0);
      context.lineTo(index + 0.5, canvasWidth);
      context.stroke();
    }
    for (let index = 0; index < canvasHeight; index += cellHeight) {
      context.beginPath();
      context.moveTo(0, index + 0.5);
      context.lineTo(canvasHeight, index + 0.5);
      context.stroke();
    }

    // 初始化生命状态
    context.fillStyle = '#C5C159';
    initLive.forEach(item => {
      initState[item[0]][item[1]] = 1;
    });

    drawCanvas();
  };

  this.setPosition = function (position) {
    let x = Math.floor(position.x/cellWidth);
    let y = Math.floor(position.y/cellHeight);
    initState[x][y] = 1;
    drawCanvas();
  }
  let drawCanvas = function () {
    // 绘制初试画布状态
    for (let index = 0; index < initState.length; index++) {
      for (let subIndex = 0; subIndex < initState[index].length; subIndex++) {
        context.clearRect(index * cellWidth + 1, subIndex * cellHeight + 1, cellWidth - 1, cellHeight - 1);
        if (initState[index][subIndex] === 0) {
          context.fillStyle = '#37A2B2';
          context.fillRect(index * cellWidth + 1, subIndex * cellHeight + 1, cellWidth - 1, cellHeight - 1);
        }else{
          context.fillStyle = '#C5C159';
          context.fillRect(index * cellWidth + 1, subIndex * cellHeight + 1, cellWidth - 1, cellHeight - 1);
        }
      }
    }
  }

  let aliveCount = function (x, y) {
    let aliveCount = 0;
    if (x >= 1 && y >= 1) {
      initState[x - 1][y - 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (x >= 1) {
      initState[x - 1][y] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (x >= 1 && y < initState[x].length - 1) {
      initState[x - 1][y + 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (y >= 1) {
      initState[x][y - 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (y >= 1 && x < initState.length - 1) {
      initState[x + 1][y - 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (x < initState.length - 1) {
      initState[x + 1][y] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (x < initState.length - 1 && y < initState[x].length - 1) {
      initState[x + 1][y + 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
    }
    if (y < initState[x].length - 1) {
      initState[x][y + 1] === 1 ? aliveCount = aliveCount + 1 : aliveCount;
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


    // 重新渲染页面
    drawCanvas();
  };

  //开始执行动画
  this.startAnimation = function (time) {
    canvasInterval = setInterval(update,time*1000);
  };
  // init();

  //停止执行动画
  this.stopAnimation = function () {
    clearInterval(canvasInterval);
    // clearInterval(canvasInterval);
  };

  //下一步
  this.nextAnimation = function () {
    update();
  };

  // setInterval(update,1000);
};

