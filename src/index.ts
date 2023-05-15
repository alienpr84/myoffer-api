const sum = (numbers: number[]): number =>
  numbers.reduce((acumulator, number) => (acumulator += number));

console.log(sum([3, 4, 1, 8]));

let a;
