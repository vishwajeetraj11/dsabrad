function phoneNumberDirectory(phoneArr) {
    const map = new Map();
    phoneArr.forEach(phone => {
        const [name, _phone] = phone.split(':');
        map.set(name, _phone)
    })
    return map;
}

module.exports = phoneNumberDirectory;
