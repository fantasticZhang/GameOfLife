<template>
  <div>
    <button :disabled="!isStartFlag" @click="startAnimation">
      开始
    </button>
    <button :disabled="!isStartFlag" @click="oneStepAnimation">
      单步
    </button>
    <button @click="stopAnimation">
      停止
    </button>
    <button :disabled="!isStartFlag" @click="clearAnimation">
      清除
    </button>
    <input type="range" id="animationSpeed" @change="changeSpeed" v-model="animationSpeed" value="0.2" min="0.1" max="5"
           step="0.01">
    <span>{{animationSpeed}}秒</span>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        animationSpeed: .2,
        isStartFlag: true
      }
    },
    props: ['gamePanel'],
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
      },
      oneStepAnimation(){
        this.gamePanel.nextAnimation();
      },
      changeSpeed(){
        this.gamePanel.stopAnimation();
        this.gamePanel.startAnimation(this.animationSpeed);
      }
    }
  }

</script>

<style lang="scss" scoped>
  span {
    display: inline-block;
    width: 4em;
    color: #f7f1f7;
  }

  button {
    height: 30px;
    line-height: 30px;
    margin: 0 5px;
    width: 72px;
    color: #2c3e50;
    background-color: #ededed;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial;
    background: -webkit-gradient(linear, left top, left bottom, color-start(0.05, #eff5f7), color-stop(1, #b2ccd0));
    background: -moz-linear-gradient(top, #eff5f7 5%, #b2ccd0 100%);
    background: -o-linear-gradient(top, #eff5f7 5%, #b2ccd0 100%);
    background: -ms-linear-gradient(top, #eff5f7 5%, #b2ccd0 100%);
    background: linear-gradient(to bottom, #eff5f7 5%, #b2ccd0 100%);
    background: -webkit-linear-gradient(top, #eff5f7 5%, #b2ccd0 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eff5f7', endColorstr='#b2ccd0', GradientType=0);
    border: 0px solid #dcdcdc;
    -webkit-border-top-left-radius: 8px;
    -moz-border-radius-topleft: 8px;
    border-top-left-radius: 8px;
    -webkit-border-top-right-radius: 8px;
    -moz-border-radius-topright: 8px;
    border-top-right-radius: 8px;
    -webkit-border-bottom-left-radius: 8px;
    -moz-border-radius-bottomleft: 8px;
    border-bottom-left-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    -moz-border-radius-bottomright: 8px;
    border-bottom-right-radius: 8px;
    -moz-box-shadow: 0px 10px 14px -7px #276873;
    -webkit-box-shadow: 0px 10px 14px -7px #276873;
    box-shadow: 0px 10px 14px -7px #276873;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    &:active{
      outline: none;
    }
    &:hover {
      background-color: #f5f5f5;
      background: -webkit-gradient(linear, left top, left bottom, color-start(0.05, #b2ccd0), color-stop(1, #eff5f7));
      background: -moz-linear-gradient(top, #b2ccd0 5%, #eff5f7 100%);
      background: -o-linear-gradient(top, #b2ccd0 5%, #eff5f7 100%);
      background: -ms-linear-gradient(top, #b2ccd0 5%, #eff5f7 100%);
      background: linear-gradient(to bottom, #b2ccd0 5%, #eff5f7 100%);
      background: -webkit-linear-gradient(top, #b2ccd0 5%, #eff5f7 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#b2ccd0', endColorstr='#eff5f7', GradientType=0);
    }
    &[disabled] {
      cursor: not-allowed;
      background: #ccc;
    }
  }


</style>
