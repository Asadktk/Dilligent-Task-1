/*--------------------------------Start Q5 Adjecent Element Product-------------------------------------*/

function adjacentElementProduct(arr) {
    // Check if the array has at least two elements
    // if (arr.length < 2) {
    //     return "Array should have at least two elements";
    // }

    let maxProduct = arr[0] * arr[1];

    for (let i = 1; i < arr.length - 1; i++) {
        // Calculate the product of current adjacent elements
        const currentProduct = arr[i] * arr[i + 1];

        // Update maxProduct if the current product is greater
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
        }
    }

    return maxProduct;
}

// Test the function with a sample input array
const arr = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementProduct(arr)); // Output: 21


// function adjecentElementProduct(arr) {
//     var newArr = [];

//     for (var i = 1; i < arr.length; i++) {
//         newArr.push(arr[i] * a[i - 1]);
//     }

//     function compareNum(a, b) {
//         return a - b;
//     }

//     newArr.sort(compareNum).reverse();
//     return newArr[0];
// }

// var a = [5, 6, -4, 2, 3, 2, -23, 7, 8];
// var result = adjecentElementProduct(a);
// console.log("Youre largest product is:", result);

/*--------------------------------End Q5-------------------------------------*/