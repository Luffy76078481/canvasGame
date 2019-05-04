import V from "./Variable";
import MyBulle from './MyBullet'
import FoeSmall from './FoeSmall'

export default class MathComputer{
    constructor(){
        //飞机子弹初始位置
        this.bulletX = V.windowWdth/2 - 4;
        this.bulletY = V.windowHeight*0.7-21;
        //飞机子弹初始样式
        this.bullet = "bullet0";
        //每个子弹各自的数据
        /* 子弹作为一个矩形来判断碰撞和打出屏幕
            this.bState = [{
                left:100,
                right:120,
                top:200,
                bottom:300,
            }];
        */
        this.bState = [];
        this.FSstate = [];
       
    }

    update(x,y){
        this.bulletX=x;
        this.bulletY=y;
    }
 
    render(){//飞机子弹
        //每间隔N帧动发射一颗子弹。。
        if(V.C.fps % V.speedBullet == 0){
            let myBulle = new MyBulle(this.bulletX,this.bulletY); //自家子弹;
            myBulle.render();
            this.bState.push({//子弹打出来的位置根据飞机当前位置来定
                left:this.bulletX,
                top:this.bulletY,
                // right:this.bulletX+9,
                // bottom:this.bulletY+21,
                myBulle
            });
        }
        //循环已经打出来的子弹并更新当前位置
        for(let i=0;i<this.bState.length;i++){
            this.bState[i].myBulle.update(this.bState[i].left,this.bState[i].top-=V.speedBullet1);
            this.bState[i].myBulle.render();
            if(this.bState[i].top<-22){//超出屏幕了就删除该数组
                this.bState.splice(i,1);

            }
        }


        //每间隔N帧出动一个敌军杂兵
        if(V.C.fps % V.speedFoeSmall == 0){

            let foeSmall = new FoeSmall(); //敌军小飞机;
            foeSmall.render();
            let foeLeft = V.windowWdth*Math.random();
            if(foeLeft>V.windowWdth-39){//不能超出屏幕
                foeLeft = V.windowWdth-39
            }
            this.FSstate.push({// 
                left:foeLeft,//随机出现在屏幕内的位置。
                top:-100,
                // right:this.bulletX+9,
                // bottom:this.bulletY+21,
                isDed:false,
                foeSmall
            });
        }
        //循环已经飞出来的飞机并更新当前位置
        for(let i=0;i<this.FSstate.length;i++){
            if(this.FSstate[i].isDed){
                if(this.FSstate[i].foeSmall.ded()){
                    this.FSstate.splice(i,1);//死亡动画完了后删除
                    V.C.grade++;//增加分数
                }
            }else{
                //检查所有子弹的位置有没有打中自己
                let fL = this.FSstate[i].left;//飞机左侧
                let fR = fL+51;//飞机右侧
                let fT = this.FSstate[i].top+39;//飞机头部
                let fB = this.FSstate[i].top;//飞机底部
                for(let z=0;z<this.bState.length;z++){
                   let bL = this.bState[z].left;//子弹的左边位置
                   let bR = bL+9;//子弹的右边位置
                   let bT = this.bState[z].top;//子弹头部位置
                   if(fL<bL && fR>bR && bT < fT && bT>fB){//撞击了
                        this.bState.splice(i,1);//删除子弹
                        this.FSstate[i].isDed = true;//准备开始飞机死亡动画
                   }
                }

                //检查有没有撞到英雄飞机
                let bL = V.C.myair.x;//英雄飞机的左边位置
                let bR = bL+100;//英雄飞机的右边位置
                let bT = V.C.myair.y;//英雄飞机头部位置
                let bB = bT+124
                if(fR>bL && fL<bR && fT>bT && fB<bB){//撞击了
                   V.C.gameOver = true;
                }
                // V.ctx.fillText("L："+parseInt(fL)+"R："+parseInt(fR)+"T："+parseInt(fT)+"B："+parseInt(fB),fL,fB)


                this.FSstate[i].foeSmall.update(this.FSstate[i].left,this.FSstate[i].top+=V.speedFoeSmall1);
                this.FSstate[i].foeSmall.render();
                if(this.FSstate[i].top>V.windowHeight+100){//超出屏幕了就删除该数组
                    this.FSstate.splice(i,1);
                }
            }
            
        }
    }



}