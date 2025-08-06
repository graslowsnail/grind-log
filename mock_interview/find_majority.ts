// function that takes in a list of numbers
// return the the number that is a majority, < than 50% 

const testArr = [1,1,2,2]

const checkMajority = (arr: number []) => {
  const myMap = new Map()

  arr.forEach((value, key) => {
    //console.log(`${key} value ${value}`)

    if(!myMap.has(value)){
      myMap.set(value, 1)
    } else if(myMap.has(value)){
      let currentValue = myMap.get(value)
      currentValue = currentValue + 1
      myMap.set(value, currentValue)
    }
  })
  console.log(myMap)

  let arrLeangth = arr.length
  let arrHalf = arrLeangth / 2
  console.log("half bro:" ,arrHalf)
  let didFind = null 

  myMap.forEach((value, key) => {
    //console.log(`key ${key} value ${value}`)
    if(value >= arrHalf){
    //console.log(`${key}`)
    didFind = key
      return key
    }
  })
  if(didFind === null){
    console.log(`null: no majority`)
    return null
  }
  console.log(didFind)
  return didFind
}

checkMajority(testArr)