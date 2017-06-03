<template>
  <div>
    <canvas ref="gamePanel" id="gamePanel" width="700" height="700" @click="getPosition">
    </canvas>
    <br>
    <button @click="startAnimation">
      开始
    </button>
    <button @click="stopAnimation">
      停止
    </button>
    <input type="range" id="animationSpeed" v-model="animationSpeed" value="0.5" min="0.1" max="10" step="0.1">

  </div>
</template>
<script>
  import Game from '../game';
  export default{
    data() {
      return {
        gamePanel: '',
        animationSpeed: .5,
      }
    },
    methods: {
      getPosition: function ($event) {
        let rect = this.$refs['gamePanel'].getBoundingClientRect();
        let currentPosition = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        };
        ;
        this.gamePanel.setPosition(currentPosition);
        //  this.gamePanel.startAnimation(1);
      },
      startAnimation(){
          this.gamePanel.startAnimation(.5);
      },
      stopAnimation(){
          this.gamePanel.stopAnimation();
      }
    },
    mounted: function () {
      this.gamePanel = new Game({
        'canvasId': 'gamePanel',
        'widthNumber': 50,
        'heightNumber': 50,
        'initLive': [[10, 30], [11, 30], [12, 24], [13, 24], [14, 24], [10, 12]]
      });
      this.gamePanel.init();
      //setInterval(this.gamePanel.update(),1000);
    }
  }
</script>
<style lang="scss" scoped>
  canvas {
  }
</style>
