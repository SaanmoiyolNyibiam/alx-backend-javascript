export default function cleanSet(set, string) {
  // // validate input
  // if (!(inputSet instanceof Set) || typeof startString !== 'string') {
  // throw new TypeError('Invalid input type');
  // if (startString.length === 0 || startString === undefined) return '';

  // const outputString = [...inputSet]
  //   .filter((setValue) => (typeof setValue === 'string' && setValue
  // .startsWith(startString) && setValue !== undefined))
  //   .map((eachString) => (eachString !== undefined ? eachString.slice(startString.length) : ''))
  //   .join('-');

  // return outputString;

  if (string === undefined || string.length === 0) {
    return '';
  }
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(string) : ''))
    .map((str) => (str !== undefined ? str.slice(string.length) : ''))
    .join('-');
}
