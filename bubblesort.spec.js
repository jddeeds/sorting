describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( swapStuff([]) ).toEqual( [] );
  });
  var arr = [3,2,1];
  it("sorts the array", function(){
    expect(swapStuff(arr)).toEqual([1,2,3])
  });
});

describe("Spy", function(){
  beforeEach(function(){
    spyOn(BubbleSort, 'swap').and.callThrough();
  });
  it("calls bubbleSort should be true", function(){
    expect(BubbleSort.prototype.calls.any()).toEqual(true)
  })

  // it("spies on swap function", function(){
  //   bubbleSort(arr);
  //   console.log(swap)
  //   expect(swap.calls.count()).toEqual(2);
    
  // })
})