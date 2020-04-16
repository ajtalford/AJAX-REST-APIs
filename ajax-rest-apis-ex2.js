// Exercise 2 Write a function, testNum, that takes a number as an argument and returns a Promise that tests if the value is less than or greater than 50.

const testNum = num => {
    return new Promise((resolve, reject) => {
      if (num > 50) {
        resolve(`The number ${num} is greater than 50`);
      } else {
        reject(`The number ${num} is less than 50`);
      }
    });
  };
  
  testNum(60)
    .then(result => console.log(result))
    .catch(error => console.log(error));