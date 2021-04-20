import DanMu from './danmu.js'
export default class DanMuVideo{
    constructor(video,canvas,options={
        speed: 2,
        color:'yellowgreen',
        time:0,
        data: []
    }){
        //简单，为空和类型就不写了
        this.canvas = canvas
        this.video = video
        this.video.muted=true
        this.ctx=canvas.getContext('2d')
        this.canvas.width=video.offsetWidth
        this.canvas.height=video.offsetHeight
        this.danmuPause=false
        this.data=options.data
        this.danmuPool=this.createDMPool()
        console.log(this.danmuPool)
    }
    createDMPool(){
        return this.data.map(v=>{
            return new DanMu(v,this)
        })
    }
    render(){
        this.clear()
        this.drawDM()
        !this.danmuPause&&requestAnimationFrame(this.render.bind(this))
    }
    drawDM(){
        let currenttime=this.video.currentTime
        this.danmuPool.forEach(dm=>{
            if(!dm.stop&&currenttime>=dm.time){
                if(!dm.inited){
                    dm.init()
                    dm.inited=true
                }
                dm.x-=dm.speed
                dm.draw()
            }
            if(dm.x<=dm.width*(-1)) dm.stop = true
        })
    }
    clear(){
        let {width,height} = this.canvas
        this.ctx.clearRect(0,0,width,height)
    }
}