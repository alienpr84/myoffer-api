function sum(numbers: number[]): number {
  return numbers.reduce((acumulator, number) => (acumulator += number));
}

export default sum;
