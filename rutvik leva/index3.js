

const target1=(arr, target)=>{
    let i=0;
    let j=arr.length-1;


    while(i<j){
        if(arr[i]+arr[j]==target){
           return[arr[i],arr[j]]
         
        }
        else if(arr[i]+arr[j]>target){
            i--;
        }
        else{
            j++;
        }
    }

    return[arr[i-1],arr[j]]

}
let arr=[1,3, 4,7,10,12]
let trget=15;
let result=target1(arr,)
console.log(result);


