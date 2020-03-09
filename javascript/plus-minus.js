'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    const count = [0,0,0];
    const total = arr.length;
    for(let i=0;i< total;i++){
        if(arr[i]>0){
            count[0]++;
        }else if (arr[i] < 0) {
            count[1]++;
        }else{
            count[2]++;
        }
    }
    count.map(value=> console.log((value/total).toFixed(6)));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
