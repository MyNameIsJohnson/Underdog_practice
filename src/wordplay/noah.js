// given an input string of letters
// return a boolean of whether any permutation of the string is a palindrome

// racar -> true
// butter -> false

// 1. create varible reversedString = split the string, reverse order of string, rejoin the string
// 2. if string === reversedString
//  return true else return false

// 1. check first and last letter if not equal return false
// 2. check second and second to last if equal
// 3. up to middle letter of stirng
// 4. return true

const isPalindrome = (string) => {
  string = string.toString();
  let reversedString = string.split("").reverse().join("");
  if (reversedString !== string) {
    return false;
  }
  return true;
  // string = string.toString();
  // for (let i = 0; i < string.length / 2; i++) {
  //   if (string[i] !== string[string.length - (i + 1)]) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
};
console.log(isPalindrome(121));
// console.log(isPalindrome("butter"));

// 1. if given letter
// a -> [a]
// aa -> [aa]
// ca ->[ca, ac]
// cca -> [cca, cac, acc]

// 2. take first letter add it to a list,
// 3. take next letter add it to same list,
// 4. take next letter add it to same list
// 5. start at second letter, add to the list
// 6. take letter after second add to the list
// 7. take remaining letter add to the list
// 8. start at last letter add to the list
// 9. get next letter (from )

const getAllPermutations = () => {};
