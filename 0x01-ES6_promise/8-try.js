// this is a module that defines a devideFunction function

export default function devideFunction(numerator, denominator) {
  if ((typeof numerator === 'string') || (typeof denominator === 'string')) {
    throw TypeError;
  }
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }

  const quotient = numerator / denominator;
  return quotient;
}
