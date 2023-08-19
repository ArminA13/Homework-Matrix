//Տրված է տողերի մատրիցա (nxm) եւ բառ: Հայտնաբերել արդյոք բառը գոյթյն նի
//մատրիցայմ թե ոչ

let matrix = [
    [7, 'h', 'a', 3],
    [4, 'e', 'l', 'k'],
    ['r', 'l', 'p', 'u'],
    ['t', 'l', 'a', 'o'],
    ['w', 'o', 'f', '3']
];

function isInArray(matrix, word) {
    let transpose = matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
  
    return matrix.some(a => a.join('').includes(word)) || transpose.some(a => a.join('').includes(word))
  }
  
  console.log(isInArray(matrix, 'hello'));

