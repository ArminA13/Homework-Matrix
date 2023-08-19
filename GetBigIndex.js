//Տրված է թվերի մատրիցա(զանվածների երկարթյնը կարող է տարբեր լինել) գտնել
//ամենամեծ գմարը նեցող array-ի ինդեքսը

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function getIndex(arr) {
    let result = [];

    arr.forEach((element, index) => {
        let sum = 0;
        
        element.forEach((val, idx) => {
            sum += val;
        });

        result.push(sum);
    });

    return result.indexOf(Math.max(...result));
}

console.log(getIndex(matrix));
