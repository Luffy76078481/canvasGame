import Controler from './Controler'
import V from "./Variable";

export default class Load{
    constructor(id){
        const canvasDom = document.getElementById(id);
        V.canvasDom = canvasDom;
        V.windowHeight = document.documentElement.clientHeight;//设置屏幕高
        V.windowWdth = document.documentElement.clientWidth;//设置屏幕宽
        canvasDom.height = V.windowHeight;
        canvasDom.width = V.windowWdth;
        this.loadIndex = 0;//加载图下标
        this.allImages = 0;//所有图片加载量
        V.ctx = document.getElementById(id).getContext("2d"); //创建画布
      
       
        window.onresize = () => {//根据屏幕视口计算像素基数
            let width = document.documentElement.clientWidth;
            let height = document.documentElement.clientHeight;
            let devicePixelRatio = height / width  // 屏幕宽高率
            let whichSide = height; // 竖屏用高度计算，横屏用宽度计算
            if (devicePixelRatio > 2) {
                V.carNum = whichSide / 13.34 * 0.9;
            } else if (devicePixelRatio > 1.8) {
                V.carNum = whichSide / 13.34 * 0.85;
            } else {
                V.carNum = whichSide / 13.34;
            }
        };
    }

    render(){
        let loadflag = 0;
        //加载Loading资源
        for(let i=0;i<V.loadingImages.length;i++){
            V.I["loading"+i] = new Image();
            let url= V.loadingImages[i];
            V.I["loading"+i] .src = require(url+".png");
            V.I["loading"+i] .onload = ()=>{
                loadflag++;
                if(loadflag==2){//3张load图片加载完成后显示并且
                     this.loadingInter = setInterval(()=>{
                        V.ctx.clearRect(0,0,V.windowWdth,V.windowHeight);
                        V.ctx.drawImage(V.I["loading"+this.loadIndex], V.windowWdth/2 - V.I["loading"+this.loadIndex].width/2, V.windowHeight * (1-0.618));
                        V.ctx.font = '24px SimSun, Songti SC';
                        V.ctx.textAlign='center';
                        V.ctx.fillText(`加载中。。(${V.images.length+"/"+this.allImages})`, V.windowWdth/2, V.windowHeight * (0.518));
                        this.loadIndex++;
                        if(this.loadIndex > 2)this.loadIndex = 0;
                     },400)
                     this.loadingAll();
                }
                
            }
        }



        
    }

    loadingAll(){
        //加载所有资源
        for(let i=0;i<V.images.length;i++){
            V.I[V.images[i].name] = new Image();
            let url= V.images[i].url;
            V.I[V.images[i].name].src = require(url+".png");
            V.I[V.images[i].name].onload = ()=>{
                this.allImages++;
                if(this.allImages == V.images.length){
                    clearInterval(this.loadingInter);//清除加载动画定时器;
                    V.C = new Controler();//实例化控制器类
                }
            }
        }

    
    }


}


