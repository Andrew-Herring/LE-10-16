// 1.Write a function that takes a string of a dog breed as an argument (like ‘border collie’)

// 2.Have the function return “my favorite dog breed is” plus the passed in string. If no argument is passed to the function, return “I like cats”.

// 3.Execute the function in a way that captures the returned value in a variable.

// 4.Console.log the string “When it comes to pets,” plus the returned value of the function.

const pets = (breed) => {
  if (breed === undefined) {
    return "I like cats!"
  } else {
    return `my favorite dog breed is ${breed}`
  }
}
console.log("When it comes to pets, " + pets())
console.log("when it somes to pets, " + pets("Duck Toller"))

// 1.Create a function that creates an object with three properties: name, age, profession. Have the function take an array as an argument. In the body of the function, loop over the array to set the values of the object’s properties. log the result to the console as a table.

const personalObjectMaker = (array)=>{
  let personalObj = {}
  const properties = ["name", "age", "profession"]
  properties.forEach((property, index) => {
    personalObj[property] = array[index]
  });
  return console.table(personalObj)
}
// 2.Create a second function that takes three arguments: name, age, profession. Have the function place the three arguments into an array and pass that array to the first function by calling it.


const personalInfo = (name, age, profession) => {
  const personalArray = [name,age,profession]
  personalObjectMaker(personalArray)
}

personalInfo("Andy",28,"Student")


// 1. Create a function that logs the result of adding two numbers

const add = (num1,num2) => num1 + num2

// 2. Create a second function called calculate that takes three arguments: two numbers and a function

const calculate = (num1, num2, operation) => operation(num1,num2)

// 3. Execute the second function and make it output 5

console.log(calculate(2,3,add));



// THANK YOU GREG FOR TRANSLATING THIS CHINEESE FOR ME