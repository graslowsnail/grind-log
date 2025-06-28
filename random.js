//
const triangle = () => {
    let str = '#'
  console.log(str)
  for (let i = 2; i <=7 ; i++ ) {
    str = str + '#'
  console.log(str)
  }

};

//triangle()


const fizzBuzz = (num) => {
  for (let i = 1 ; i <= num ; i++)
  if (i % 3 === 0 && i % 5 === 0){
    console.log("fizzBuzz")
  } else if (i % 5 === 0) {
    console.log("buzz")
  } else if (i% 3 === 0) {
    console.log("fizz")
  } else {
    console.log(i)
  }

};

fizzBuzz(100)
