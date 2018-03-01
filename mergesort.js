function split(wholeArray) {

    let firstHalf = [];
    let secondHalf = [];

    if (wholeArray.length % 2 === 0) {
        //even split
        firstHalf = wholeArray.slice(0, wholeArray.length / 2)
        secondHalf = wholeArray.slice(wholeArray.length / 2, wholeArray.length)

    } else if (wholeArray.length % 2 === 1) {
        firstHalf = wholeArray.slice(0, (wholeArray.length + 1) / 2);
        secondHalf = wholeArray.slice((wholeArray.length + 1) / 2, wholeArray.length)
    }

    return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
    let ans = [];
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] <= arr2[j]){
                ans.push(arr1[i])
                i++;
                j = 0;
            }
            else {
                console.log("hellow orld")
                ans.push(arr2[j])
                console.log("arr2[j]",arr2[j])
            }
            console.log(ans)
            
        }
    }
    return ans;
}
function mergeSort(array) {
    // if(array.length === 1);
    // [3,2], [1]
    // [3], [2], [1]
    // 
    
    
}