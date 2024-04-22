/*--------------------------------Start Q5 Adjecent Element Product-------------------------------------*/

function adjecentElementProduct(arr) {
    var newArr = [];

    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] * a[i - 1]);
    }

    function compareNum(a, b) {
        return a - b;
    }

    newArr.sort(compareNum).reverse();
    return newArr[0];
}

var a = [5, 6, -4, 2, 3, 2, -23, 7, 8];
var result = adjecentElementProduct(a);
console.log("Youre largest product is:", result);

/*--------------------------------End Q5-------------------------------------*/