// Տրված է հավասարաչափ մատրիցա (nxm). շրջել մատրիցան այնպես որ տողերը դառնան
// սյներ, իսկ սյները՝ տողեր

let matrix = [
    [1, 2, 3, 6],
    [4, 5, 6, 7],
    [7, 8, 9, 8],
];

function transpose(matrix) {
    return matrix[0].map((col, c) => {
        return matrix.map((row, r) => {
            return matrix[r][c];
        });
    });
}

console.log(transpose(matrix));
