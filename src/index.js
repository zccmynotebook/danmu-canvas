import list from './list.js'
import DanMuVideo from './dminVideo.js'
const video=document.querySelector('video')
const canvas=document.querySelector('canvas')
const dmswitch = document.querySelector('#dmswitch')
const dv=new DanMuVideo(video,canvas,{
    data: list
})
!dv.danmuPause&&dv.render()
dmswitch.onclick=function(){
    dv.danmuPause=this.checked
    !dv.danmuPause&&dv.render()
}