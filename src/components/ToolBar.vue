<template>
  <div>
    <button :disabled="!isStartFlag" @click="startAnimation">
      开始
    </button>
    <button @click="stopAnimation">
      停止
    </button>
    <button :disabled="!isStartFlag" @click="clearAnimation">
      清除
    </button>
    <input type="range" id="animationSpeed" v-model="animationSpeed" value="0.5" min="0.1" max="10" step="0.1">
    <span>{{animationSpeed}}秒</span>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        animationSpeed: .5,
        isStartFlag: true
      }
    },
    props:['gamePanel'],
    methods: {
      startAnimation(){
        this.gamePanel.startAnimation(this.animationSpeed);
        this.isStartFlag = false;
      },
      stopAnimation(){
        this.gamePanel.stopAnimation();
        this.isStartFlag = true;
      },
      clearAnimation(){
        this.gamePanel.clearAnimation();
      }
    }
  }

</script>

<style>

</style>
