let numbers = [ 47, 91, 23];

// how to add a new Element set END of an array--------
numbers.push(111);
// numbers.shift(111);----------like push but its work first of an array
console.log(numbers);

// how to add a new Element remove END of an array-------
numbers.pop();
// numbers.unshift();------------like pop but its work first of an array
console.log(numbers);

// / how to set a remove element  END of an array--------
const outNum = numbers.pop();
console.log(outNum);


