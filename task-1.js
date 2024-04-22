/*-------------------------Start Qno.1 Reverse array--------------------------*/

function reverseArr(arr) {

    var rev = [];

    for (var i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
    }

    return rev;
}

var origArr = [1, 2, 3, 4, 5];
var rev = reverseArr(origArr);
console.log("Original Array:", origArr);
console.log("Reversed Array:", rev);

/*-----------------------------------End Q1----------------------------------*/