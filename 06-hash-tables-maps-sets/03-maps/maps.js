const nameMap = new Map([
    [1,'John'],
    [2,'Jack'],
    [3, 'Jill']
]);

console.log(nameMap);

const myFunction = () => {};
const emptyObj = {};

const map2 = new Map([
  ['name', 'John'],
  [1, 'number one'],
  [true, 'really true'],
  [null, 'null'],
  [myFunction, 'empty function'],
  [emptyObj, 'empty object'],
]);


console.log(map2.get(true))
console.log(map2.get(myFunction))

map2.set('wops', 'anon')
console.log(map2)


// Checking values
console.log(nameMap.has(1));
console.log(nameMap.has(6));

// Deleting values
nameMap.delete(1);
console.log(nameMap);


// Looping keys and values
console.log(nameMap.keys());
console.log(nameMap.values());

// Clearing
nameMap.clear();
console.log(nameMap.size);

// console.log(nameMap);


// Iterating (for...of)
for (let [key, value] of nameMap) {
    console.log(key, value);
  }
  
  // Using forEach
  nameMap.forEach((value, key) => {
    console.log(key, value);
  });
  