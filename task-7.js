function palindromeFind(val) {
    const len = val.length;

    for (let i = 0; i < len / 2; i++) {

        if (val[i] !== val[len - 1 - i]) {
            return "It is not a palindrome";
        }

        return "It is palindrome";
    }
}

const string = 'madam';
const chek = palindromeFind(string);
console.log(chek);