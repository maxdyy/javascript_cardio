// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('').reverse().join('');
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
return str === str.split('').reverse().join('');
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  // checking if positive
  const isPositive = int > 0;
  // reversing int
  const tni = parseInt(int.toString().split('').reverse().join(''));
  // returning positive or negative reversed int
  return isPositive ? tni : (tni * -1);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charObj = {};
  str.split('').forEach(char => {
    charObj[char] ? charObj[char]++ : charObj[char] = 1;
  });
  let topVal = 0;
  let topChar;
  for(char in charObj) {
    if(charObj[char] > topVal) {
      topVal = charObj[char];
      topChar = char;
    }
  }
  return topChar
}


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (i = 0; i < 100; i++) {
    if(i % 3 === 0 && i % 5 === 0 ) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}


// Call Function
const output = fizzBuzz();
console.log(output);
