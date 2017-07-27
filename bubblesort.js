function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (aIsGreaterThanB(arr[j], arr[j + 1])) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

// const count = {
//   swap: function(arr, i, j) {
//     const a = arr[i];
//     arr[j] = a;
//     arr[i] = arr[j];
//   },
//   aIsGreaterThanB: function(a,b) {
//     return a > b;
//   }
// };

function swap(arr, i, j) {
  const a = arr[i];
  arr[j] = a;
  arr[i] = arr[j];
}

function aIsGreaterThanB(a,b) {
  return a > b;
}

