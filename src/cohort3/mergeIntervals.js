// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// [1,3],[2,6]
// sort intervals in ascending or by intervals[i][0]
// if index at intervals[0][1] < intervals[1][1] && intervals[0][1] > intervals[1][1]
//

// Output: [[1,6],[8,10],[15,18]]

var merge = function (intervals) {
  let mergedIntervals = [];
  let sortedIntervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let previousIntervalStart = sortedIntervals[0][0];
  let previousIntervalEnd = sortedIntervals[0][1];

  for (let i = 0; i < sortedIntervals.length; i++) {
    let start = sortedIntervals[i][0];
    let end = sortedIntervals[i][1];
    let doesOverlap = start <= previousIntervalEnd;

    if (doesOverlap) {
      previousIntervalEnd = Math.max(end, previousIntervalEnd);
    } else {
      mergedIntervals.push([previousIntervalStart, previousIntervalEnd]);
      previousIntervalStart = start;
      previousIntervalEnd = end;
    }
  }
  mergedIntervals.push([previousIntervalStart, previousIntervalEnd]);
  return mergedIntervals;
};
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
