// const names=['suthagr','Nayomi']

// console.log(...names);

// const name='suthagar';
// console.log(...name);

// function add(...args) {
//     let result = 0;
  
//     for (let arg of args) result += arg;
  
//     return result
//   }

//   console.log(add(1));
//   console.log(add(1,2));

//   console.log(add(5,5,5));



// function xyz(x, y, ...z) {
//     console.log(x, ' ', y); // hey hello
  
//     console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
//     console.log(z[0]); // wassup
//     console.log(z.length); // 4
//   }
  
//   xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")


// function someFunction() {
//     return arguments;
//   }
  
//   console.log(someFunction("joykare", 100, false));


// const arr = ["Joy", "Wangari", "Warugu"];
// const newArr = ["joykare", ...arr];

// console.log(newArr);

// const myNames = [...arr, "joykare"];
// console.log(myNames)

// const arr = [1, 2, 3];
// const arr2 = [...arr];

// console.log(arr2)


// function add(a, b, c) {
//     return a + b + c ;
//   }
//   const args = [1, 2, 3];
  
//   console.log(add(...args))


// const object1 = {
//   name: 'Flavio'
// }

// const object2 = {
//   age: 35
// }

// const object3 = {...object1, ...object2 }
// console.log(object3)







// const NameList={
//   Name:'suthagar',Age:30,skill:'.Net'
// }

// //const {Name}=NameList;

// // const {Name,Age}=NameList;
// //console.log(Name, Age)
// const {Name:n,Age:a}=NameList;
// console.log(n, a)





// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // expected output: 10

// console.log(b);
// // expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // expected output: Array [30,40,50]


// let map=new Map();
// map.set('Name','Suthagar')
// map.set('Lname','T')

// console.log(map)
// console.log(map.get('Name'))
// console.log(map.has('Name'))
// console.log(map.size)

// for(let ele of map){
//   console.log(`${ele[0]} : ${ele[1]}`)
// }







// let set=new Set();
// set.add(1);
// set.add(2);
// set.add(3);

// console.log(set);


// let promise = new Promise(function(resolve, reject) {
 
//   setTimeout(() => resolve("done"), 1000);
// });

// console.log(promise)



// const arr = ["Joy", "Wangari", "Warugu"];
// console.get(arr)


let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `name: ${this.name}, age: ${this.age}`;
    }
  };
  
  console.log(user.toString()  ); // {name: "John", age: 30}



let a=10;
var b=a+10;
console.log(b);

var aa=10;
let bb=a+15;
console.log(bb);







