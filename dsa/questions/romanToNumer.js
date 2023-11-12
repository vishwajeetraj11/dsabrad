/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let string = '';
    while(num) {
        if(num >= 1000) {
            string += 'M';
            num -= 1000;
        } else if(num >= 900) {
            string += 'CM';
            num -= 900;
        }
        else if(num >= 500) {
            string += 'D';
            num -= 500;
        }
        else if(num >= 400) {
            string += 'CD';
            num -= 400;
        }
        else if(num >= 100) {
            string += 'C';
            num -= 100;
        }
        else if(num >= 90) {
            string += 'XC';
            num -= 90;
        }
        else if(num >= 50) {
            string += 'L';
            num -= 50;
        }
        else if(num >= 40) {
            string += 'XL';
            num -= 40;
        }
        else if(num >= 10) {
            string += 'X';
            num -= 10;
        }
        else if(num >= 9) {
            string += 'IX';
            num -= 9;
        }
        else if(num >= 5) {
            string += 'V';
            num -= 5;
        }
        else if(num >= 4) {
            string += 'IV';
            num -= 4;
        }
        else if(num >= 1) {
            string += 'I';
            num -= 1;
        }
        else
        break
    }
    return string
};

console.log(intToRoman(5003))
console.log(intToRoman(5))