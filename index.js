const video1=document.getElementById("projectvideo1");
const video2=document.getElementById("projectvideo2");
const video3=document.getElementById("projectvideo3");
const hoverSign=document.querySelector(".hover-sign");
const slideBar=document.querySelector(".sidebar");
const menu=document.querySelector(".menu-icon");
const close=document.querySelector(".close-icon");

const videoList=[video1,video2,video3];
videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout',function(){
        video.pause();
        hoverSign.classList.remove("active")
    })
})




menu.addEventListener("click",function(){
    slideBar.classList.remove("close-sidebar")
    
    slideBar.classList.add("open-sidebar")
    
})

close.addEventListener("click",function(){
    slideBar.classList.remove("open-sidebar")
    slideBar.classList.add("close-sidebar")
})
