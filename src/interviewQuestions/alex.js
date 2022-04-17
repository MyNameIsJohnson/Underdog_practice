// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// var maxSubArray = function(nums) {
//   //     loop through nums
//     let highestNum = nums[0] 
//       for(let i = 0; i < nums.length; i++){
//         let a = nums.slice(i, i+4);
//         let sum = 0; 
//         for(let j = 0; j < a.length; j++){
//           sum+=a[j]          
//         }
//         if (highestNum < sum){
//           highestNum = sum
//         }
//       }
//       return highestNum;
//   };


// const maxSubArray = (nums) => {
//   let maxSum = nums[0];
//   let currentSum = nums[0];
//   for(let i = 1; i < nums.length; i++){
//     currentSum = Math.max(nums[i], currentSum + nums[i])
//     maxSum = Math.max(currentSum, maxSum)
//     console.log('currentSum',currentSum)
//   }
//   return maxSum
// }

var maxSubArray = function(nums) {
    let highestNum = nums[0] 
      for(let i = 0; i < nums.length; i++){
        for ( let k = 1; k < nums.length; k++){
            let a = nums.slice(i, i+k);
            let sum = 0; 
            for(let j = 0; j < a.length; j++){
              sum+=a[j]          
            }
            if (highestNum < sum){
              highestNum = sum
            }
        }
      }
      return highestNum;
  };

console.log(maxSubArray([5,4,-1,7,8]))

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))