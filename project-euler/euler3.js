// euler # 3
//The prime factors of 13195 are 5, 7, 13, and 29.
// What is the largest prime factor of the number 600851475143?
// prim factors, 
// prime number is a only divisable by 1 and its self 

let number = 600851475143;
//let number = 13195;
let primeNumbers = [];

const isPrime = (factor) => {
  if ( factor < 2 ) {
    return false
  }
  for (let i = 2 ; i < factor ; i++) {
    if (factor % i === 0) {
      return false; // not prime
    }
  }
    return true;
};

const isFactor= (number) => {
  for (let i = 1 ; i <= number ; i++) {
    if (number % i === 0  ) {
      primeNumbers.push(i)
    }
  } 
      console.log(`factors of ${number } are ${primeNumbers}`)
  primeNumbers.forEach((item) => {
    //isPrime(item)
    if (isPrime(item) === true) {
    console.log(`${item}`)

    }
    

  })
}; 

isFactor(number);

// answer : 6857

// took forever to run, maybe refactor later. 

