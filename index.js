const navBar = document.getElementById("navBar")
const main = document.getElementById("main")
const slider = document.getElementById("slider")
const playBtn = document.getElementById("play-btn")
const stopBtn = document.getElementById("stop-btn")
const pauseBtn = document.getElementById("pause-btn")
const sound = new Audio("/sounds/bells.mp3")
const bell = document.getElementById("bell")

slider.addEventListener("click" , changeTheme)
console.log(navBar.className)
function changeTheme(){
    if(navBar.className===""){
    navBar.classList.add("dark")
    main.classList.add("dark")
    }else{
        navBar.classList.remove("dark")
        main.classList.remove("dark")
    }
}
/*playBtn.onClick =()=>{
    sound.play()
}
*/

playBtn.addEventListener("click", playAudio)
pauseBtn.addEventListener("click", pauseAudio)
stopBtn.addEventListener("click", stopAudio)

function playAudio(){
    sound.play()
    bell.classList.add("animate")
}
function pauseAudio(){
    sound.pause()
    bell.classList.remove("animate")
}

function stopAudio(){
    sound.pause()
    sound.currentTime = 0
    bell.classList.remove("animate")
}