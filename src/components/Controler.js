import BG from './Background'
import AirSelf from './AirSelf'
import MathComputer from './MathComputer'
import GameOverAction from './GameOverAction'
import V from "./Variable";
export default class Controler {
  constructor() {
    this.BG = new BG(); //背景类;
    this.myair = new AirSelf(); //自家飞机；
    this.mathComp = new MathComputer(); //计算自家子弹和敌军飞机和敌军子弹等复杂运算类
    this.gameOverAction = new GameOverAction();
    this.action = 1; //当前场景：0为欢迎界面，1游戏界面，2死亡界面
    this.loadIndex = 0; //加载图下标
    this.grade = 0; //分数
    this.fps = 0;
    this.gameOver = false; //游戏结束
    this.Ctime = setInterval(() => { //开启主循环
      this.render();
      this.fps++;
    }, V.spped);

    this.bindClick(); //注册点击监听；

  }



  render() {
    V.ctx.clearRect(0, 0, V.windowWdth, V.windowHeight);
    switch (this.action) {
      case 0: //欢迎界面
        this.BG.render();
        //LOGO显示
        V.ctx.drawImage(V.I["Logo"], V.windowWdth / 2 - V.rem(2.5), V.windowHeight * 0.2, V.rem(5), V.rem(1));
        //等待动画
        V.ctx.drawImage(V.I["loading" + this.loadIndex], V.windowWdth / 2 - V.I["loading" + this.loadIndex].width / 2, V.windowHeight * (1 - 0.618));
        //开始按钮
        V.ctx.drawImage(V.I["start"], V.windowWdth / 2 - 19, V.windowHeight * 0.5);
        //每间隔10帧动一下。。
        this.fps % 10 == 0 && this.loadIndex++;
        if (this.loadIndex > 2) this.loadIndex = 0;
        break;

      case 1: //游戏界面
        if (this.gameOver) { //游戏结束
          if (this.myair.ded()) {
            this.myair = new AirSelf(); //自家飞机；
            this.mathComp = new MathComputer(); //计算自家子弹和敌军飞机和敌军子弹等复杂运算类
            this.gameOverAction = new GameOverAction();
            this.action = 2; //死亡动画完了后跳转场景2结束游戏
          }

        } else {
          this.BG.render();
          this.BG.update();
          this.myair.render();
          this.mathComp.render();
        }
        break;

      case 2: //游戏结束
        this.gameOverAction.render(this.grade);
        V.ctx.drawImage(V.I["start"], V.windowWdth / 2 - 19, V.windowHeight * 0.5);
    }


    V.ctx.font = '14px SimSun, Songti SC';
    V.ctx.fillText(`fps:${this.fps}`, 1, 10);

  }


  bindClick() {
    V.canvasDom.onclick = (e) => {
      let clickX = e.clientX; //点击X坐标
      let clickY = e.clientY; //点击Y坐标
      switch (this.action) {
        case 0: //欢迎界面
          //开始按钮的范围
          if (clickX >= V.windowWdth / 2 - 19 && clickX <= V.windowWdth / 2 + 19 && clickY >= V.windowHeight * 0.5 && clickY <= V.windowHeight * 0.5 + 41) {
            //进入游戏画面
            this.action = 1;
          }
          break;
        case 2: //结束页面
          //开始按钮的范围
          if (clickX >= V.windowWdth / 2 - 19 && clickX <= V.windowWdth / 2 + 19 && clickY >= V.windowHeight * 0.5 && clickY <= V.windowHeight * 0.5 + 41) {
            //进入游戏画面
            this.gameOver = false;
            this.action = 0;
          }
          break;
          // case 1://游戏界面
          //     this.myair.x = clickX;
          //     this.myair.y = clickY;
          // break;
      }
    }


    V.canvasDom.addEventListener("touchmove", e => {
      e.preventDefault();
      let airX = e.changedTouches[0].clientX - 50; //飞机当前中心位置X
      let airY = e.changedTouches[0].clientY - 62; //飞机当前中心位置Y
      //加载自己的飞机位置---传入的点要减去图片的XY一半，才能到中心位置去加载图片
      this.myair.update(airX, airY);
      //子弹位于飞机前面
      this.mathComp.update(e.changedTouches[0].clientX - 4, airY - 21);

    }, false);
  }


}
