// you're officiating a rock-paper-scissors tournament.
// each player only ever plays one type of hand (always rock, always paper, or always scissors).
// given the strategies for all players and two names, output the winner of a game of rock paper scissors.

// Define the type for a player's strategy
type Strategy = 'rock' | 'paper' | 'scissors';

// Define the type for a player object
interface Player {
  age: number;
  strategy: Strategy;
}

// Define the type for the players object (object with string keys and Player values)
interface PlayerStrategies {
  [key: string]: Player;
}

const playerStrategies: PlayerStrategies = {
  steve: { age: 20, strategy: 'rock' },
  john: { age: 25, strategy: 'paper' },
  cathy: { age: 31, strategy: 'scissors' },
  joe: { age: 21, strategy: 'rock' },
  nancy: { age: 41, strategy: 'paper' },
  bob: { age: 39, strategy: 'paper' },
  tim: { age: 18, strategy: 'rock' },
  sally: { age: 22, strategy: 'scissors' },
}

const calculateWinner = (playerObj: PlayerStrategies, name1: string, name2: string): string | null => {
  // Check if both players exist in the object
  if (!playerObj[name1] || !playerObj[name2]) {
    return null; // Return null if either player doesn't exist
  }
  
  let player1Move = playerObj[name1].strategy
  let player2Move = playerObj[name2].strategy

  if(player1Move === "rock" && player2Move === 'paper' ){
    return name2
  } else if(player1Move === "paper" && player2Move === 'scissors'){
    return name2
  } else if( player1Move === 'scissors' && player2Move === 'rock'){
    return name2
  } else if( player1Move === player2Move){
    return null
  } 
  else {
    return name1
  }
}

console.log(calculateWinner(playerStrategies, "steve", "john") )// john wins, paper beats rock
