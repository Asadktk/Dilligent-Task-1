function polygon(n) {
    if (n === 1) {
        return 1;
    } else {
        return (n ** 2) + ((n - 1) ** 2);
    }

}

console.log(polygon(8))