let arr = [1, 1, 2, 3, 4, 5, 5, 6, 7, 8];
// ^

let target = 5;

const getTarget = (array) => {
  let newSet = new Set(array);
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    let num2 = target - num1;
    if (newSet.has(num2)) {
      return [num1, num2];
    }
  }
};
console.log(getTarget(arr));

var deleteDuplicates = function (head) {
  // let newArr = [];
  // let newHead = new Set(head);
  // for (let key of newHead) {
  //   newArr.push(key);
  // }

  return Array.from(new Set(head));
};
console.log(deleteDuplicates(arr));
