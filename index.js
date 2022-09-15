function isPalindrome(word) {
  const copyArray = word.split("");

  const reversedCopyArray = copyArray.reverse();

  const jointReversedArray = reversedCopyArray.join("");

  if(jointReversedArray === word) {
    return true;
  } else {
    return false;
  }
}

/* 
Here's the logic:

1. Take a copy of the string and split it into many strings, and put them in an array(.split())
2. Reverse that array
3. Join the reveresed array using .join() method 
4. Compare the resulting string with the original string
*/

/*
  Add written explanation of your solution here
*/
isPalindrome("madam");


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
