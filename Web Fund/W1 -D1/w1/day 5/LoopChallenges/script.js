function odd(){
    for(i=0;i<=20;i++){
        if(i%2 == 1 ){
            console.log(i)
        }
    }
}
odd()

function down(){
    for(var i=100;i>=0;i--){
        if(i%3==0){
            console.log(i)
        }
    }
}
down()

function weird(){
    for(var i = 4; i>= -3.5; i -=1.5){
        console.log(i)
    }
}
weird()


function sigma(){
    sum=0
    for(var i = 1; i<=100; i ++){
    sum = sum + i
    }
    console.log(sum)
}
sigma()




function factorial(){
    sum=1
    for(var i=2; i<=12; i++) {
        sum *= i
        console.log(sum)
    }
}

factorial()