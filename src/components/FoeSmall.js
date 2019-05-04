import V from "./Variable";


export default class FoeSmall{
    constructor(x,y){
        //敌军小飞机初始位置
        this.x = x;
        this.y = y;
        //飞机子弹初始样式
        this.img = "foesmall0";
        this.i = 1;

    }

    update(x,y){
        this.x=x;
        this.y=y;
    }

    ded(){
        if(this.i==5){
            return true;
        }else{
            V.ctx.drawImage(V.I["foesmall"+this.i], this.x, this.y);
            this.i++;
        }
    }


    render(){//飞机子弹
        V.ctx.drawImage(V.I[this.img], this.x, this.y);
    }



}