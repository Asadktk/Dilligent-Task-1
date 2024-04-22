/*----------------------------Start Qno2 Combine Array-----------------------*/
function combineArray(arr1, arr2) {

    var combineArr = [];

    for (var i = 0; i < arr1.length; i++) {
        combineArr.push(arr1[i]);
    }

    for (var j = 0; j < arr2.length; j++) {
        combineArr.push(arr2[j]);
    }

    return combineArr;
}

var arr1 = [1, 2, 3, 4];
var arr2 = [4, 5, 6];
var combinedOutput = combineArray(arr1, arr2);
console.log("Output:", combinedOutput);
/*--------------------------------End Q2-------------------------------------*/


function combineArr2(a1, a2) {
    // var newArr = [];
    for (let i = 0; i < a2.length; i++) {
        a1.push(a2[i]);
    }

    return a1
}

var a1 = [1, 2, 3, 4, 5, 6];
var a2 = [7, 8, 9];
var combineArrResult = combineArr2(a1, a2);
console.log("Second method Result: ", combineArrResult);

/*--------------------------------End Q2-------------------------------------*/