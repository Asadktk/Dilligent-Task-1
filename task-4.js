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