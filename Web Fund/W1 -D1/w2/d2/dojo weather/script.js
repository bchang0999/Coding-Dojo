var cookie=document.querySelector("#cookie")

function cookieMonster(){
cookie.remove();
}

var chigh = document.querySelector('.bc-bottom p')
function heat(element){
    chigh = chigh*2+30 
    document.querySelector(".bc-bottom p").innerText = chigh
}