let arr = [2, 6, 7, 1, 8]

const larzetnum = () => {
    let larzest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > larzest) {
            larzest = arr[i]
        }
       
    }
    return larzest;
}
let result = larzetnum(arr);
console.log(result);
