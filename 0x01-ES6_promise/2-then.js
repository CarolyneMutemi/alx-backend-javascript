/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  promise.then((response) => ({ status: 200, body: 'success' })).then((response) => {
    console.log('Got a response from the API');
  }).catch((error) => new Error());
}
