function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        if (arr[i] == 'food') {
            console.log('yummy');
            count++;
        }
    }
    if (count == 0) {
        console.log("I'm hungry");
    }

}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    sum = sum / arr.length
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > sum) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reverse(arr) {
    var temp = []
    arr.push("e")
    arr[5] = arr[0]
    arr[0] = arr[4]
    arr[4] = arr[5]
    arr[5] = arr[1]
    arr[1] = arr[3]
    arr[3] = arr[5]
    arr.pop()


    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i = 0; i < n-2; i++) {
        var x = fibArr.length - 1
        var y = fibArr.length - 2
        z= fibArr[x]+fibArr[y]
        fibArr.push(z)
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





