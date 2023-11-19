/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function (n) {
    if (n == 0) return 1;
    if (n == 1) return 10;
    let k = 9;
    for (let i = 0; i < n - 1; i++) {
      k *= (9 - i);
    }
    return k + countNumbersWithUniqueDigits(n-1);
  };

  console.log(countNumbersWithUniqueDigits(3))