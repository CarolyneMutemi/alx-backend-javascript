/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  promise.then((response) => {return { status: 200, body: 'success' }})
    .catch((error) => {return new Error()})
    .then((response) => {
      console.log('Got a response from the API');
    });
}
