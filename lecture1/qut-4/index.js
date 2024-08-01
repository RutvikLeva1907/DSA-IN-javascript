let arr = [1, 2, 3, 4, 5]
let n = arr.length - 1;
const reversnum = () => {
    for (let i = n; i > 0; i--) {
        console.log(arr[i])
    }
}

let result = reversnum(arr)
console.log(result);




