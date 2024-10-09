export default function hasValuesFromArray(inputSet, inputArray) {
  // validate input
  if (!Array.isArray(inputArray) || !(inputSet instanceof Set)) throw new TypeError('Invalid input types');

  // check if all elements in array exist in set
  const bool = inputArray.every((arrayValue) => inputSet.has(arrayValue));

  // return boolean
  return bool;
}
