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

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combinedOutput = combineArray(arr1, arr2);
console.log("Output:", combinedOutput);
/*--------------------------------End Q2-------------------------------------*/



/*-------------------------------Start Qno.3 Rotate Array---------------------*/
function rotateArray(arr, k) {

    var len = arr.length;
    k = k % len;

    for (let i = 0; i < k; i++) {

        var lastElement = arr[len - 1];

        for (let j = len - 1; j >= 0; j--) {
            arr[j] = arr[j - 1];
        }

        arr[0] = lastElement;
    }

    return arr;
}

var arr = [1, 2, 3, 4, 5];
var k = 2;
var rotatedArray = rotateArray(arr, k);
console.log("Rotated Array:", rotatedArray);
/*---------------------------------End Q3---------------------------------------*/




/*-------------------------------Start Qno.4 Create Pattern-------------------*/

function createPatern(rows) {
    var output = '';

    for (let i = 1; i <= rows; i++) {

        for (var space = rows - i; space > 0; space--) {
            output += '.';
        }

        for (var j = 1; j <= i; j++) {
            output += i;
        }

        output += '\n';
    }

    return output;

}


var patternRows = 5;
var pattern = createPatern(patternRows);
console.log(pattern);

/*----------------------------------End Q4----------------------------------------*/