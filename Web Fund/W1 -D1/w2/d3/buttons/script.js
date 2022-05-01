function goAway(element){
    element.remove();
}

function triple(){
    var three = document.querySelector("#three")
    var four = document.querySelector("#four")
    var five = document.querySelector("#five")
    three.remove()
    four.remove()
    five.remove()
}

function fireDrill(){
    var two = document.querySelector("#two")
    alert(two.innerText) 
}

function trans(element){
    var three = document.querySelector("#three")
    three.innerText = "HaHa!"
}

function change(element){
    var one = document.querySelector("#one").innerText
    one = "kajsdgflkjhasdjklfh"
    element.innerText=one
}

function godzirra(){
    var three = document.querySelector("#three")
    var four = document.querySelector("#four")
    var five = document.querySelector("#five")
    three.classList.add("glow")
    four.classList.add("glow")
    five.classList.add("glow")
}

function isGone(){
    var three = document.querySelector("#three")
    var four = document.querySelector("#four")
    var five = document.querySelector("#five")
    three.classList.remove("glow")
    four.classList.remove("glow")
    five.classList.remove("glow")
}