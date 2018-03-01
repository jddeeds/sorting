describe('Merge Sort', function(){

    // it('handles an empty array', function(){
    //   expect( split([]) ).toEqual( [] );
    // });
    var arr = [3,2,1,5];
    var arrOdd = [3,1,27,8,9]
    it("sorts the array", function(){
      expect(split(arr)).toEqual([[3,2],[1,5]])
    });
    it("sorts the array", function(){
        expect(split(arrOdd)).toEqual([[3,1,27],[8,9]])
      });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([1,4,7],[2,3,9])).toEqual([1,2,3,4,7,9]);
    });
  });

  describe('MergeSort function', function(){
    it("it is able to sort", function(){
      expect(mergeSort([3,2,1])).toEqual([1,2,3])
    });
  })