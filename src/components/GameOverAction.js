import V from "./Variable";


export default class GameOverAction{
    constructor(){
    }

    


    render(grade = 0){
        V.ctx.drawImage(V.I["gameover"], 0 , 0 ,V.windowWdth, V.windowHeight);
        V.ctx.textAlign = "center";
        V.ctx.font = "30px 微软雅黑";

        V.ctx.fillText("99999",V.windowWdth/2,V.windowHeight*.35);
        V.ctx.fillText(grade,V.windowWdth/2,V.windowHeight*.72);
    }




}