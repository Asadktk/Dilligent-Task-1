function centuryFromYear(year) {
    let centuryCount = 0;
    while (year > 0) {
        year = year - 100;
        centuryCount = centuryCount + 1;
    }
    return centuryCount;
}

var centuryAdd = 101;
console.log(centuryFromYear(centuryAdd));