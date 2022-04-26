var username = document.querySelector("#JaneDoe").innerText

function change() {
    username = "G.i Jane"
    document.querySelector("#JaneDoe").innerText = username;
    console.log("New name is:" + username)
}

var friends= document.querySelector("#friends").innerText


function gone(element) {
    if (element.alt == "accept") {
        document.querySelector(".phil").remove()
            friends ++ 
            document.querySelector("#friends").innerText = friends
        
    }
    else if (element.alt == "close") {
        document.querySelector(".phil").remove()
        friends --
        document.querySelector("#friends").innerText = friends
    }

}



function gone1(element) {
    if (element.alt == "accept") {
        document.querySelector(".todd").remove()
        friends ++
        document.querySelector("#friends").innerText = friends
    }
    else if (element.alt == "close") {
        document.querySelector(".todd").remove()
        friends --
        document.querySelector("#friends").innerText = friends
    }
}

