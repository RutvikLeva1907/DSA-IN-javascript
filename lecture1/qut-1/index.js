
let sum=0;
    
const arrsum=()=>{


    for (let i = 0; i < arr.length; i++) {
      sum+= arr[i];
        
    }

   return sum;

}
let arr=[1,2,3,4,5];
let result =arrsum(arr);
console.log(result);