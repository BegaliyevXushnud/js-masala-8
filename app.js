

// 35-masala
// function longestName(arr) {
//    return arr.sort(function (a,b) {return b.length - a.length})[0]
// }
// console.log(longestName(["Alice", "Bob", "Christina", "David"])); // "Christina"

// 36-masala

// function removeConsecutiveDuplicates(str) {
//    return str.split('').filter((item,index,arr) => arr.indexOf(item) === index).join('');
// }
//
// console.log(removeConsecutiveDuplicates("aaabbbcccaaa")); // "abc"

// 37-masala

// function rotateArray(arr, k) {
//   let n =arr.length;
//   k = k % n;
//    return arr.slice(-k).concat(arr.slice(0,n - k));
// }
//
// console.log(rotateArray([1, 2, 3, 4, 5], 2));







// 38-masala

// function flattenArray(arr) {
//   let new_arr = []
//    for(let i = 0; i < arr.length; i++) {
//       new_arr = new_arr.concat(arr[i]);
//    }
//    return new_arr
// }
//
// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]




// 39-masala
// function multiplicationTable(n) {
// let r = []
//     for(let i = 1; i <= n; i++) {
//         let x = [];
//         for(let j = 1; j <= n; j++) {
//             x.push(i * j)
//         }
//         r.push(x)
//     }
//     return r
// }
//
// console.log(multiplicationTable(3));




// 40-masala
// function splitArrayInHalf(arr) {
// let result = []
//    let middle = Math.ceil(arr.length / 2);
//    let first = arr.splice(0,middle);
//    let second = arr.splice(-middle);
// result.push(first,second)
// return result
// }
//
// console.log(splitArrayInHalf([1, 2, 3, 4, 5])); // [[1, 2, 3], [4, 5]]
// console.log(splitArrayInHalf([1, 2, 3, 4]));    // [[1, 2], [3, 4]]


// 41-masala
// function swapDiagonals(matrix) {
//    let result = []
//   for (let i = 0; i < matrix.length; i++) {
//     let arr = matrix[i].reverse();
//      result.push(arr);
//   }
//
//   return result
// }
//
// console.log(swapDiagonals([
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]
// ]));


// 42-masala

// function gcd(a, b) {
//     if (b === 0) {
//         return a;
//     }
//     return gcd(b, a % b);
// }
//
// function findGCD(arr) {
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         result = gcd(arr[i], result);
//         if (result === 1) {
//             return 1;
//         }
//     }
//     return result;
// }
// console.log(findGCD([24, 36, 48])); // 12
// console.log(findGCD([7, 14, 21]));  // 7
