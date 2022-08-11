/*
Write a function isPalindrome that will receive one argument, a string. Your function should return true if the string is a palindrome (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), and return false if it is not a palindrome.

To keep things simple, your function only needs to deal with lowercase strings that are all letters (don't worry about spaces or special characters).
*/

function isPalindrome(word) {
  if (word.length <= 1) {
    return true;
  }
  return word.charAt(0) == word.charAt(word.length-1) && isPalindrome(word.slice(1,-1))
}

/* 
  pseudocode for recursive methods is hard, sorry
*/

/*
  Recursivley checks the first if last letters match in the inputted word

  Basically, here is what happens:
  isPalindrome("racecar")
    = "r" == "r" && isPalindrome("aceca")
      = "a" == "a" && isPalindrome("cec")
  
  it does this recursive check of the first and last letters.
  then, to close the recursion, when we either have 0 or 1 letters remaining, we just return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
