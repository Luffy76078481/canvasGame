<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import Load from "./Load";
import V from "./Variable";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    V.spped = 20;///整个游戏帧数
    V.speedBg = 2;//背景移动速度
    V.speedBullet = 6;//每间隔50帧打出一颗子弹
    V.speedBullet1 = 12,//子弹射速
    V.speedFoeSmall = 60,//每多少帧出现一个小飞机敌人
    V.speedFoeSmall1 = 2,//小飞机速度
    new Load("canvas").render();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
