export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // validate input
  if (!(endpoint instanceof Object)) throw new TypeError('Invalid input type');

  // Track within the weakMap the number of times queryAPI is called for each endpoint
  if (!(weakMap.has(endpoint))) { // check if weakmap already has endpoint
    weakMap.set(endpoint, 0);
  }

  const currentCount = weakMap.get(endpoint); // retrieve the endpoint count
  weakMap.set(endpoint, currentCount + 1); // increment the count for the endpoint
  if (currentCount + 1 >= 5) throw new Error('Endpoint load is high');
}
