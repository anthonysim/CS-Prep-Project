// Player creation
class Player {
  constructor(name, bet) {
    this.name = name
    this.bet = bet
    this.moneyFinal = this.bet
    this.points = 0
    this.counter = 0
  }
  rollOutcome() {
  let rolls = [];

  for (let i = 0; i < 5; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
    rolls = rolls.sort((a, b) => a - b);
    console.log(" ") 
    console.log("dice rolling.....")
    console.log(rolls)

  let countTotal = rolls.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = null
    }
    acc[val]++
    return acc
  }, {})

  let length = Object.values(countTotal).length

  let straight = rolls.every((num, index, arr) => !index || arr[index - 1] + 1 === num)
  let fourOfAKind = Object.values(countTotal).some(num => num === 4)
  let threeOfAKind = Object.values(countTotal).some(num => num === 3)
  let twoOfAKind = Object.values(countTotal).some(num => num === 2)

  if (length === 1){  
    this.points += 50
    this.moneyFinal = Math.round(this.moneyFinal * 2)
    return console.log(`RICOHTZEE!!! 
    ${this.name}, you won 50 points and an ALL INCLUSIVE STAY AT A HOTEL RESORT IN WAIKIKI BEACH HAWAII with SPA SERVICES, GOLF, and a MICROWAVE!! You now have ${this.points} points and $${this.moneyFinal}.`)
    }
  else if (straight){  
    this.points += 40
    this.moneyFinal = Math.round(this.moneyFinal * 1.5)
    return console.log(`STRAIGHT! 
    ${this.name}, you won 40 points! You now have ${this.points} points and $${this.moneyFinal}.`)
    }   
  else if (fourOfAKind && length === 2){  
    this.points += 15
    this.moneyFinal = Math.round(this.moneyFinal * 1.3)
    return console.log(`FOUR OF A KIND! 
    ${this.name}, you won 15 points! You now have ${this.points} points and $${this.moneyFinal}.`)
    }
  else if (length === 2){  
    this.points += 25
    this.moneyFinal = Math.round(this.moneyFinal * 1.4)
    return console.log(`FULL HOUSE! 
    ${this.name}, you won 25 points! You now have ${this.points} points and $${this.moneyFinal}.`)
    }     
  else if (threeOfAKind && length > 2){  
    this.points += 10
    this.moneyFinal = Math.round(this.moneyFinal * 1.2)
    return console.log(`THREE OF A KIND! 
    ${this.name}, you won 10 points! You now have ${this.points} points and $${this.moneyFinal}.`)
    } 
   else if (twoOfAKind && length === 3){  
    this.points += 5
    this.moneyFinal = Math.round(this.moneyFinal * 1.1)
    return console.log(`DOUBLE TWO OF A KIND! 
    ${this.name}, you won 5 points! You now have ${this.points} points and $${this.moneyFinal}.`)
    } 
    else if (twoOfAKind && length > 3){  
    this.points += 2
    this.moneyFinal = Math.round(this.moneyFinal * 1.05)
    return console.log(`TWO OF A KIND! 
    ${this.name}, you won 2 points! You now have ${this.points} points and $${this.moneyFinal}.`)
    }
  else {
    if (this.counter < 2) {
      this.moneyFinal = Math.floor(this.bet - this.moneyFinal / 3)
      this.counter++
    } else {
      this.moneyFinal = 0
    }
    return console.log(`Sorry ${this.name}, no points. Better Luck Next Time. Your total points is ${this.points}. You have $${this.moneyFinal}!`)
    }
  }
}

// Beginning Game
function BeginGame() {
  alert(
    `Welcome to  C A S I N O   R I C O T T A !!!`
    )
  directions()
    let name1 = prompt('Player 1 enter your name: ')
    let bet1 = bets()
  console.log()
    let name2 = prompt('Player 2 enter your name: ')
    let bet2 = bets()

  let player1 = new Player(name1, bet1)
  let player2 = new Player(name2, bet2)

  alert(`
          ${player1.name} is betting $${player1.bet}! 
          ${player2.name} is betting $${player2.bet}!`)

  prompt(`
  ${player1.name}, please press ENTER for your first roll of the dice!`)
  player1.rollOutcome()

  prompt(`
  ${player2.name}, please press ENTER for your first roll of the dice!`)
  player2.rollOutcome()

  prompt(`
  ${player1.name}, please press ENTER for your second roll of the dice!`)
  player1.rollOutcome()

  prompt(`
  ${player2.name}, please press ENTER for your second roll of the dice!`)
  player2.rollOutcome()

  prompt(`
  ${player1.name}, last try! Please press ENTER to roll the dice!`)
  player1.rollOutcome()

  prompt(
    `
    ${player2.name}, last try! Please press ENTER to roll the dice!`)
  player2.rollOutcome()

  prompt(`
  HERE ARE THE FINAL RESULTS:

  ${player1.name}, you ended with $${player1.moneyFinal} and ${player1.points} points.
  ${player2.name}, you ended with $${player2.moneyFinal} and ${player2.points} points. 
  `)


if (player1.points > player2.points) {
  player2.moneyFinal = Math.floor(player2.moneyFinal * 0.50)
  console.log(`
  ${player1.name.toUpperCase()} IS THE WINNER!!

  ${player2.name} please hand over your $${player2.moneyFinal} to the CASINO.`)
  }
else if (player1.points < player2.points) {
  player1.moneyFinal = Math.floor(player1.moneyFinal * 0.50)
  console.log(`
  ${player2.name.toUpperCase()} IS THE WINNER!! 
  
  ${player1.name} please hand over $${player1.moneyFinal} to the CASINO.`)
} else  
  console.log(`No winner, TIE! You can both keep your $$`)
}

// Game directions
function directions() {
  alert(`
Let's play RICOTHZEE! (2-Player Game) Place a bet and compete with another player. Roll the 5 dice 3 times! You'll get points:

      2 of-a-Kind (2 points), + 5% back!
      2 doubles (5 points), + 10% 
      3 of-a-Kind (10 points), + 20%
      4-of-a-Kind (15 points), + 30%
      a Full House (25 points), + 40%
      a Straight (40 points), and win half back!
      RICOHTZEE (50 points) DOUBLE YOUR $$ PLUS PRIZES!

Win money on your bet!! Accumulate your points from the 3 rolls. For each "NO POINTS" roll you lose 1/3 of your money to CASINO RICOTTA. Highest points wins! Loser forfeits 50% (if left) to the house! 

Please contact http://www.gamblersanonymous.org/ga if you think you have a gambling problem! 

CASINO RICOTTA LLC is not in any way liable for individual's economic loss in any form (emphasis on NOT and ANY).
      `)                                  
}

// prompt that forces player to type in a NUMBER
function bets() {
  let bet = prompt('Player please enter your bet: ')

  if (!bet.match(/^\d+$/g)) {
    console.log('Please type in a NUMBER!')
    return bets()
  } else 
    return bet
}

// starts the game
BeginGame()
