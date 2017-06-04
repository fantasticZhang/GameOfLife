<template>
  <div id="app">
    <header-title></header-title>
    <game-panel :gamePanel="gamePanel"></game-panel>
    <tool-bar :gamePanel="gamePanel"></tool-bar>
  </div>
</template>

<script>
  import Hello from './components/Hello';
  import Game from './game';
  export default {
    name: 'app',
    components: {
      Hello
    },
    data() {
      return {
        gamePanel: '',
      }
    },
    mounted: function () {
      this.gamePanel = new Game({
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
      });
      this.gamePanel.init();
    }
  }
</script>

<style>
  #app {
    height: 100vh;
    width: 100vw;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #2980b9; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #2980b9); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #2980b9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
