export default function cleanSet(inputSet, startString) {
  // validate input
  if (!(inputSet instanceof Set) || typeof startString !== 'string') throw new TypeError('Invalid input type');
  if (startString === '' || startString.length === 0 || startString === undefined) return '';

  // check for startString in values of inputSet and compute a string of matching values
  // for (const value of inputSet) {
  //   if (value.startsWith(startString)) {
  //     outputString += `${value.replace(startString, '')}-`;
  //   }
  // }
  // // return the string of matching value
  // return outputString.slice(0, -1);

  const outputString = [...inputSet]
    .filter((setValue) => (typeof setValue === 'string' && setValue.startsWith(startString) && setValue !== undefined))
    .map((eachString) => eachString
      .replace(startString, ''))
    .join('-');

  return outputString;
}
