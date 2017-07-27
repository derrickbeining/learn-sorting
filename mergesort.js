function split(arr) {
  let arrays = [];
  let midpoint = Math.ceil(arr.length / 2);
  arrays.push(arr.slice(0, midpoint));
  arrays.push(arr.slice(midpoint));
  return arrays;
}

