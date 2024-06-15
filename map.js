const numbers = [4, 5, 2, 8, 10];

let doubled;
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }

doubled = numbers.map((num) => num * 2);
console.log(doubled);
