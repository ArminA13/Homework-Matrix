// Տրված է թվերի մատրիցա (nxm), դրս բերել բոլոր տողերի մինիմմներից բաղկացած
// զանգվածը:

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function getMin (arr) {
    return arr.map(element => {
        return Math.min(...element)   
    });
}

console.log(getMin(matrix));