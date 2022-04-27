var cookie=document.querySelector("#cookie")

function cookieMonster(){
cookie.remove();
}

var chigh = document.querySelectorAll('#high')
var clow = document.querySelectorAll('#low')
function heat(element){
    var select = document.querySelector('select')
    var value = select.options[select.selectedIndex].value;
    console.log(value)
    console.log (element)
    
    if( value=="f"){

        for( var i=0; i<chigh.length; i++){
        x = parseInt(chigh[i].innerText[0]+chigh[i].innerText[1])
        x = x*2+30 
        chigh[i].innerHTML = x + "&#176;"
        y = parseInt(clow[i].innerText[0]+clow[i].innerText[1])
        y = y*2+30 
        clow[i].innerHTML = y + "&#176;"
        } 
    
    }else {
        for( var i=0; i<chigh.length; i++){
            x = parseInt(chigh[i].innerText[0]+chigh[i].innerText[1])
            x = (y-30)/2  
            chigh[i].innerHTML = x + "&#176;"
            y = parseInt(clow[i].innerText[0]+clow[i].innerText[1])
            y = (y-30)/2 
            clow[i].innerHTML = y + "&#176;"
            } 

    }


    

    









}

