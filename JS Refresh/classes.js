// classes
// class give structure that be used multiple times
// class is a blueprint

class Animal{
    constructor(name, legCount, speaks){ //attributes
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }  

    speak(){ // we do not write function inside class because inside of the class every method is counted as a function
        console.log("hi there, "+ this.speaks)
    }

}

// creating a object of a class
let dog = new Animal("dog", 4, "bhow bhow"); 
let cat = new Animal("cat", 4, "meow meow");


dog.speak(); // call function on object