//Opgave 2
class Average {
    constructor(valueOne, valueTwo, valueThree) { //Constructor method
        this.valueOne = valueOne;
        this.valueTwo = valueTwo;
        this.valueThree = valueThree;
    }
    calculateAverage() {
        return `The average of the numbers in the object is: ${((this.valueOne + this.valueTwo + this.valueThree) / 3).toFixed(4)}` //Calculating average, and returning string + answer.
    }
}

const averageOne = new Average(10, 20, 30); //Creating new object
const averageTwo = new Average(116, 2, 567); //Creating new object
const averageThree = new Average(-17, 29, -36.36); //Creating new object
console.log(averageOne.calculateAverage()); //Logging answer
console.log(averageTwo.calculateAverage()); //Logging answer
console.log(averageThree.calculateAverage()); //Logging answer