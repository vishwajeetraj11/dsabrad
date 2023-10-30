function formatPhoneNumber(arr) {
    // return `(${arr.slice(0,3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6).join('')}`
    const strNum = arr.join('')
    return `(${strNum.substring(0,3)}) ${strNum.substring(3,6)}-${strNum.substring(6)}`
}

module.exports = formatPhoneNumber;
