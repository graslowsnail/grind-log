// euler 6
// sum of every number squared from 1-100

let sqrSum= 0
let sumSqr = 0

const squaredThenSum = (num) => {
  for (let i = 1 ; i <= num; i++) {
  let squaredNumber = Math.pow(i, 2) 
    sqrSum = sqrSum + squaredNumber;
  }
    console.log(sqrSum)
};

const sumThenSquare = (num) => {
  let sum = 0
  for (let i = 1; i <= num ; i++) {
    sum = sum + i
  };

  sumSqr = Math.pow(sum,2 )
  console.log(sumSqr)
}

const diffBetween = () => {


};

squaredThenSum(100)
sumThenSquare(100)


console.log(sumSqr - sqrSum); 
// ANSWER : 25164150

