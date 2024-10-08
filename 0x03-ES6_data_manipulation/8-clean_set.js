export default function cleanSet(inputSet, startString) {
  // validate input
  if (!(inputSet instanceof Set) || typeof startString !== 'string') throw new TypeError('Invalid input type');
  if (startString === '') return '';

  // check for startString in values of inputSet and compute a string of matching values
  let outputString = '';
  for (const value of inputSet) {
    if (value.startsWith(startString)) {
      outputString += `${value.replace(startString, '')}-`;
    }
  }

  // return the string of matching value
  return outputString.slice(0, -1);
}
