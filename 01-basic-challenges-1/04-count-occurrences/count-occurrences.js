// function countOccurrences(string, char) {
//   let frequency = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       frequency++;
//     }
//   }
//   return frequency;
// }

const countOccurrences = (string, char) => string.split(char).length-1

module.exports = countOccurrences;

console.log(countOccurrences("apples", "p"));
