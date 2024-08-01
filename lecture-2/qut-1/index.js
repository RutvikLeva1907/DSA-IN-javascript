

const givnsum =(arr,tareget)=>{

    let i= 0;
    let j=arr.length-1;
    while (i<j) {
        if(arr[i]=arr[j]==tareget){
            return [i,j]
        }
        else if(arr[i]+arr[j]<tareget){
            i++
        
    }
    else{
        j--
    }
   
}
return [-1,-1]
}
let arr=[1,2,5,8,7,9,6];
let target=4;
console.log(givnsum(arr,target));
