// defines a function that returns a promise
export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const Success = true;
    if (Success) {
      resolve('Operation successful');
    } else {
      reject(new Error('Operation failed'));
    }
  });
  return promise;
}
