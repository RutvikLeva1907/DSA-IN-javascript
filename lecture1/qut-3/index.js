let arr = [1, 2, 3, 4, 5]

const similernum = (arr) => {
    let similer = arr[0]
    for (let i = 1; i<arr.length; i++){
        if(arr[i]<similer)
        {
            similer = arr[i];
        }
    }
    return similer;

}
let result = similernum(arr);
console.log(result);