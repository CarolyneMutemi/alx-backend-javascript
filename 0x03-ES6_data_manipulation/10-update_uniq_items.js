/* eslint-disable no-throw-literal */

export default function updateUniqueItems(map) {
  if (map instanceof Map === false) {
    throw ('Cannot process');
  }

  // console.log('Hey')
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
