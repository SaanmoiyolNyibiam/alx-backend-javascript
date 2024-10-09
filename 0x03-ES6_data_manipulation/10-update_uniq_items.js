export default function updateUniqueItems(inputMap) {
  // validate input
  if (!(inputMap instanceof Map)) throw new TypeError('Cannot process');

  // iterate through inputMap and update where quantity is 1
  const updates = [];
  inputMap.forEach((value, key) => {
    if (value === 1) {
      updates.push([key, value]);
    }
  });

  updates.forEach(([key, value]) => {
    inputMap.delete(value); // Remove the old value (1)
    inputMap.set(key, 100); // Add the new key (100)
  });

  // return updated map
  return inputMap;
}
