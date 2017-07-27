function bubbleSort(arr) {
    let swapCount = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if(swapCount){
            swapCount = 0;
            for (let j = 0; j < i; j++) {
                if (aIsGreaterThanB(arr[j], arr[j + 1])) {
                    swap(arr, j, j+1);
                    swapCount++;
                }
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

function swap(arr, current, next) {
  debugger;
  let a = arr[current];
  arr[current] = arr[next];
  arr[next] = a;
  
}

function aIsGreaterThanB(a,b) {
  return a > b;
}
