import V from "./Variable";


export default class BG{
    constructor(){
        this.y = 0;
    }

    update(){
        this.y+=V.speedBg;
        if(this.y-V.windowHeight>=0){
            this.y = 0;
        }
    }


    render(){
        V.ctx.drawImage(V.I["bg0"], 0 , this.y ,V.windowWdth, V.windowHeight);
        V.ctx.drawImage(V.I["bg0"], 0 , this.y-V.windowHeight ,V.windowWdth, V.windowHeight);
        V.ctx.drawImage(V.I["bg0"], 0 , this.y-V.windowHeight*2 ,V.windowWdth, V.windowHeight);
    }


}