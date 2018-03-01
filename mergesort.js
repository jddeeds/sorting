function split(wholeArray) {

    let firstHalf = [];
    let secondHalf = [];

    if (wholeArray.length % 2 === 0) {
        //even split
        firstHalf = wholeArray.slice(0, wholeArray.length / 2)
        secondHalf = wholeArray.slice(wholeArray.length / 2, wholeArray.length)

        console.log(firstHalf);
        console.log(secondHalf);
    } else if (wholeArray.length % 2 === 1) {
        console.log('hello');
        firstHalf = wholeArray.slice(0, (wholeArray.length + 1) / 2);
        console.log(firstHalf);
        secondHalf = wholeArray.slice((wholeArray.length + 1) / 2, wholeArray.length)
    }

    return [firstHalf, secondHalf];
}

function merge() {
    let mergeThese = Array.from(arguments);

    let ans = [];

        mergeThese.forEach(function (arrVal) {
            console.log("the foreach input is");
            console.log(arrVal);
            for(var i = 0; i < arrVal.length; i++){
            ans.push(arrVal[i]);
            }
        });
        console.log(ans);
        console.log('test');
    // }
    return ans;
}