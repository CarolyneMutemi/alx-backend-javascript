/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  promise.then((response) => ({ status: 200, body: 'success' }))
  .catch((error) => new Error())
  .then((response) => {
    console.log('Got a response from the API');
  });
}
