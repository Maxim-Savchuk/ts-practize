// const reverse = <T>(array: T[]) => {
//   return [...array].reverse();
// };

// console.log(reverse<number>([5, 6, 6, 7, 8]));
// console.log(reverse(['5', '6', '6', '7', '8', true]));

////////////////////////////////////////////////

// const isEqual = <T, Y>(a: T, b: Y) => {
//   return Object.is(a, b);
// };

// console.log(isEqual(3, 3));
// console.log(isEqual(3, '3'));

/////////////////////////////////////////////////

// const makeArray = <T, Y>(a: T, b: Y) => {
//   return [a, b];
// };

// console.log(makeArray(5, 5));
// console.log(makeArray('5', '5'));
// console.log(makeArray(true, 5));

////////////////////////////////////////////////

//Rest
// const foo = <N, T>(mult: N, ...rest: T[]) => {};
// const foo = (mult: number, ...rest: number[]) => {};

// console.log(foo(2, 1, 2, 3));
// console.log(foo(2, [1, 2, 3]));
// console.log(foo('2', ['1', '2', '3']));

export {};
