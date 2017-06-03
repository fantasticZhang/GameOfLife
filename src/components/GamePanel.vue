<template>
  <div>
    <canvas ref="gamePanel" id="gamePanel" width="700" height="700" @click="getPosition">
    </canvas>
    <br>
  </div>
</template>
<script>
  export default{
    props: ['gamePanel'],
    data() {
      return {
      }
    },
    methods: {
      getPosition: function ($event) {
        let rect = this.$refs['gamePanel'].getBoundingClientRect();
        let currentPosition = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        };
        this.gamePanel.setPosition(currentPosition);
      },

    },
  }
</script>

