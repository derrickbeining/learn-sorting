describe('Split function', function() {
  let arr, arr2;
  beforeEach(function() {
    arr = '654321'.split()
    spyOn(window, 'split').and.callThrough();
  })

  it('splits an array into an array of two other arrays', function() {
    expect(window.split(arr).length).toEqual(2);
  })

  it('splits uneven arrays so the first half has one more element than the second', function() {
    let first = split(arr)[0].length;
    let second = split(arr)[1].length;
    expect(first - second).toEqual(1);
  })
})

describe('Merge function', function() {
  beforeEach(function() {
    arr = '9823'.split();
    arr2 = '95736'.split();
  })
  it('merges two arrays into one sorted array', function() {

  })


})

describe('Merge Sort', function() {

  beforeEach(function(){

  })

  it('')

})
