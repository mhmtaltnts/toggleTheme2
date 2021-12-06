const navBar = document.getElementById("navBar")
const main = document.getElementById("main")
const slider = document.getElementById("slider")

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