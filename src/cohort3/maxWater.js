var maxArea = function (height) {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    // multiply the smaller of the two endpoints by the length between to two
    // find the smaller of the two

    let first = height[i];
    for (let j = 1; j <= height.length; j++) {
      let second = height[j];
      // multiply the smaller by the length between

      let min = Math.min(first, second);
      let currentProduct = min * (j - i);

      if (currentProduct >= max) {
        max = currentProduct;
      }
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
