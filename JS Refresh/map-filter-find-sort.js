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

console.log(output);



/*
filter function

*/