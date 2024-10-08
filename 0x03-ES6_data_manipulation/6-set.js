export default function setFromArray(inputArray) {
  // validate input
  if (!Array.isArray(inputArray)) throw TypeError;

  // use array to generate set
  const newSet = new Set(inputArray);

  // return the generated set
  return newSet;
}
