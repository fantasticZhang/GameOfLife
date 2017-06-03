<template>
  <canvas id="gamePanel" width="700" height="700">

  </canvas>
</template>
<script>
  import Game from '../game';
  export default{
    data() {
      return {
        gamePanel: ''
      }
    },
    mounted: function () {
      this.gamePanel = new Game({
        'canvasId': 'gamePanel',
        'widthNumber': 50,
        'heightNumber': 50,
      });
    }
  }
</script>
<style lang="scss" scoped>
  canvas {
  }
</style>
