
// to print the even number in array
const ages = [21 ,22, 23, 24, 25, 26, 27, 28]

for(let i = 0; i < ages.length; i++)
{
    if (ages[i]%2 == 0)
    {
        console.log(ages[i]); 
    }
}


//to print the biggest number in array
const number = [21 ,22, 23, 24, 25, 26, 27, 28]

let bigNum = 0


const perosnArray = ["sushil", "thapa", "priya"]
const genderArray = ["male", "male", "female"]

for (let i = 0; i < perosnArray.length; i++)
{
    if(genderArray[i] == "male")
    {
        console.log(perosnArray[i]);
    }
}


const initialArray = [1, 2, 3];
console.log(initialArray)
initialArray.push(9);
console.log(initialArray)

//add new item from first
const initaArr = [1,2,3]
initaArr.unshift(100);
console.log(initaArr)

//add new item from last
const initalArr = [1,2,3]
initalArr.push(2);
console.log(initalArr)

//delete from last
const newA = [1,2,3,4,5]
newA.pop()
console.log(newA)

//delete from first
const neA = [1,2,3,4,5]
neA.shift()
console.log(neA)


//concate/merge two array
const firstArray = [5,6,7,8,9];
const secondArray = [1,2,3,4,];
console.log(firstArray.concat(secondArray));

const iniAA = [1,2,3,4,5]

for(let i = 0; i < iniAA.length; i++){
    console.log(iniAA[i])
}

const myArr = [11,22,33,44]

function logThing(str){
    console.log(str);
}

myArr.forEach(logThing);