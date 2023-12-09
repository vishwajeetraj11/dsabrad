// 271 Encode and Decode String

const encode = (str) => {
    if(!str.length) return null;
    return str.join('--encode-r-')
}

const decode = (s) => {
    if(s===null) return [];
    return s.split('--encode-r-');
}