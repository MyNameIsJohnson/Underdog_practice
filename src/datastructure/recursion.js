const sum = (n) => {
  if (n === 0) {
    return 0;
  } else {
    return n + sum(n - 1);
  }
};
//
// console.log(sum(3));

const grid_paths = (n, m) => {
  if (n === 1 || m === 1) {
    return 1;
  } else {
    return grid_paths(n, m - 1) + grid_paths(n - 1, m);
  }
};
// console.log(grid_paths(3, 5));

let test = [];
function reverse(str, len) {
  if (len === str.length) {
    return;
  }
  str + reverse(str, len + 1);
  // 'G'
  // 'e'
  // 'e'
  // 'k'
  // 's
  // ' '
  // 'f'
  // 'o'
  // 'r'
  // ' '
  // 'G'
  // 'e'
  // 'e'
  // 'k'
  // 's'
  // 's' // reverse(str.length = 15, 15) --> len === str.length, console.log kicks in logging 's'
  // logging 'k'
  // logging 'e'
  // ...

  console.log(str[len]);
  test.push(str[len]);
}

/* Driver program to test above function */

let a = "Geeks for Geeks";

console.log("reverse", reverse(a, 0));

// palindrome with recursion
//
let palindrome = [];
const isPalindrome = (str, len) => {
  if (str.length === len) {
    return;
  }
  isPalindrome(str, len + 1);

  palindrome.push(str[len]);
  if (str === palindrome.join("")) {
    return true;
  } else {
    return false;
  }
};
// console.log(isPalindrome("racear", 0));
// console.log(palindrome);

const count_partitions = (n, m) => {
  if (n === 0) {
    return 1;
  } else if (m === 0 || n === 0) {
    return 0;
  } else {
    return count_partitions(n - m);
  }
};
