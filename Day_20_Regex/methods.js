let str = 'Hello all, Hello AIT, Hello ait students, welcome to js. js is nice content, hello';

let reg = /hello/gi;
let reg1 = /js/gi;
//match
console.log(str.match(reg));
console.log(str.match(reg1));
//test

console.log(reg.test(str));
console.log(reg1.test(str));

//search
console.log(str.search(reg));


// using constructor way

let str1 = 'Good morning ALl. Have a good day all, see you all, Take care all.';

let reg2 = new RegExp(/all/,'gi');
let reg3 = new RegExp(/good/, 'gi')

console.log(str1.match(reg2));
console.log(str1.match(reg3));

//test
console.log(reg2.test(str1));
console.log(reg3.test(str1));











