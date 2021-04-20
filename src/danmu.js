export default class DanMu{
    constructor({content,time,speed,color},context){
        this.content = content
        this.time = time
        this.context = context
        this.speed = speed
        this.color = color 
        this.canvasctx = this.context.ctx
        this.init()
    }
    init(){
        let {width,height} = this.context.canvas
        this.width=this.canvasctx.measureText(this.content).width
        this.x=width
        this.y=Math.floor(height*Math.random())
    }   
    draw(){      
        this.canvasctx.fillStyle=this.color
        this.canvasctx.fillText(this.content,this.x,this.y,this.width)
    }
}