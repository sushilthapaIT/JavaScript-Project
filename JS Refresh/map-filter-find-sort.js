// map, filter, find, sort

/*
map() - creates a new array by performing some operation on each array element
it is mainly used in transformation suppose to make a 
arr = [5, 1, 3, 2, 6]
double = [10, 2, 6, 4, 12]
triple = [15, 3, 9, 6, 18]
binary = ["101", "1", "11", "10", "110"]
*/

const arr = [5, 1, 3, 2, 6];

function double(x){
    return x * 2;
}

function binary(x){
    return x.toString(2);
}

const output = arr.map(double);

// console.log(output);



/*
filter function
*/
// forEach is used when you have multiple value

let newAee = [1,2,3,4,5,6,7];
let neAee = [1,2,3,4,5,6,7];

let ne= newAee.filter(n => n%2 === 0) //takes argument and send ahead if it is true
              .map( n => n*2) //take value and double it in this method
              .forEach( n => {
                console.log(n ,"\n");
              })


let neww= neAee.filter(n => n%2 === 0) //takes argument and send ahead if it is true
              .map( n => n*2) //take value and double it in this method
              .reduce((a, b) => a+b); 
console.log(neww)