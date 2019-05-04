import V from "./Variable";


export default class MyBullet{
    constructor(x,y){
        //飞机子弹初始位置
        this.bulletX = x;
        this.bulletY = y;
        //飞机子弹初始样式
        this.bullet = "bullet0";

    }

    update(x,y){
        this.bulletX=x;
        this.bulletY=y;
    }


    render(){//飞机子弹
        V.ctx.drawImage(V.I[this.bullet], this.bulletX, this.bulletY);
    }



}