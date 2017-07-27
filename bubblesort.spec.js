


describe('Bubble Sort', function(){
  let arr;

  beforeEach(function() {
    arr = [5,8,6,3,4]; // 1111 111
    // 5,6,3,4,8 111 11
    // 5,3,4,6,8 11 11
    // 3,4,5,6,8 1

    // arr = [3,2];

    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'aIsGreaterThanB').and.callThrough();
  });



  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with contents', function(){
    expect( bubbleSort(arr).length ).toEqual( 5 );
  });
  it('swaps correct number of times', function(){
    bubbleSort(arr);
    expect( window.swap.calls.count()).toEqual(7);
  });
  it('compares correct number of times', function(){
    bubbleSort(arr);
    expect( window.aIsGreaterThanB.calls.count() ).toEqual(10);
  });
  it('sorts the array', function(){
    expect( bubbleSort(arr) ).toEqual( [3,4,5,6,8] );
  });
  it('tests for exact # of pass', function(){
    bubbleSort([1,2,3,5,4]);
    expect( window.aIsGreaterThanB.calls.count() ).toEqual( 7 );
  }); 
  // it('does not make another pass if array is already sorted', function(){
  //   expect( bubbleSort(arr)).toEqual;
  // });
  // it('', function(){
  //   expect( bubbleSort([]) ).toEqual( [] );
  // });
  // it('', function(){
  //   expect( bubbleSort([]) ).toEqual( [] );
  // });
});
