export default {
  spped:10,//整个游戏帧数
  speedBg: 1, //背景移动速度
  speedBullet:50,//每多少帧打出一颗子弹
  speedBullet1:5,//子弹射速
  speedFoeSmall:150,//没多少帧出现一个小飞机敌人
  speedFoeSmall1:5,//小飞机速度
  canvasDom: "", //canvas的dom
  windowHeight: "", //屏幕高
  windowWdth: "", //屏幕宽
  ctx: "", //画布
  C: "", //控制器类实例化
  I: {}, //实例化后的图片
  carNum: "50", //像素基数，以iPhone678为例
  rem: function (a) {
    return a * this.carNum;
  },
  loadingImages: [ //加载图片要先出来
    "./images/loading0",
    "./images/loading1",
    "./images/loading2"
  ],
  images: [{ //需要加载的图片
      name: "bg0",
      url: "./images/bg0"
    },
    {
      name: "Logo",
      url: "./images/Logo"
    },
    {
      name: "self0",
      url: "./images/self0"
    },
    {
      name: "self1",
      url: "./images/self1"
    },
    {
      name: "self2",
      url: "./images/self2"
    },
    {
      name: "self3",
      url: "./images/self3"
    },
    {
      name: "self4",
      url: "./images/self4"
    },
    {
      name: "start",
      url: "./images/start"
    },
    {
      name: "bullet0",
      url: "./images/bullet0"
    },
    {
      name: "bullet1",
      url: "./images/bullet1"
    },
    {
      name: "bullet2",
      url: "./images/bullet2"
    },

    {
      name: "foesmall0",
      url: "./images/foesmall0"
    },
    {
      name: "foesmall1",
      url: "./images/foesmall1"
    },
    {
      name: "foesmall2",
      url: "./images/foesmall2"
    },
    {
      name: "foesmall3",
      url: "./images/foesmall3"
    },
    {
      name: "foesmall4",
      url: "./images/foesmall4"
    },
    {
      name: "gameover",
      url: "./images/gameover"
    },
    

    
  ],

}
