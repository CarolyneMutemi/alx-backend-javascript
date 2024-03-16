/* eslint-disable no-throw-literal */

export const weakMap = new WeakMap();

let counter = 0;

export function queryAPI(endpoint) {
  if (counter >= 5) {
    throw 'Endpoint load is high';
  }
  counter += 1;
  weakMap.set(endpoint, counter);
}
