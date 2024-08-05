let arr=[5,7,9];
let arr2=[4,6,8];
let arr3=[]
let i=0 ;
let j=0 ;
let d=arr.length;
let d2=arr2.length;

while(i<d && j<d2){
    if(arr[i]<arr2[j]){
        arr3.push(arr[i]);
        i++;
    }
    else{
        arr3.push(arr2[j]);
        j++;
    }
}

while(i<d){
    arr3.push(arr[i]);
    i++;
}

while(j<d2){
    arr3.push(arr2[j]);
    j++;
}

console.log(arr3);

