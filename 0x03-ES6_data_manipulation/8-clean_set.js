export default function cleanSet(set, startString) {
  const wordList = [];

  for (const word of set) {
    if (word.startsWith(startString) && word[0] === startString[0]) {
      wordList.push(word.slice(startString.length));
    }
  }

  return wordList.join('-');
}
