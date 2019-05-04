import V from "./Variable";


export default class AirSelf{
    constructor(){
        //飞机的初始位置
        this.x = V.windowWdth/2 - 50;
        this.y = V.windowHeight*0.7;
        this.i = 1;
        console.log("AAA",this.x,this.y)
    }

    update(x,y){
        //控制飞机不超边缘
        // this.x = x<0?0:x;
        // this.x = x+100>V.windowWdth?V.windowWdth-100:x;
        // this.y = y<0?0:y;
        // // this.y = y>V.windowHeight?V.windowHeight:y;
        this.x = x;
        this.y = y;
    }

    ded(){
        if(this.i==5){
            return true;
        }else{
            V.ctx.drawImage(V.I["self"+this.i], this.x, this.y);
            this.i++;
        }
    }


    render(){
        V.ctx.drawImage(V.I["self0"], this.x, this.y);
        // V.ctx.fillText("X："+parseInt(this.x)+"Y："+parseInt(this.y),this.x, this.y)
    }




}