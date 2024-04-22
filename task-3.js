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