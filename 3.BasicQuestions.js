// let arr = [10,20,30,40,50] 
// print sqaure  of each number of arrays
// change each value of arrays with its sqaure
// find the sqaure of each number and put it in a new array


// for(let t of arr){
//     console.log(t**2)
// }

// console.log(arr)



// for(let i = 0; i<=arr.length-1; i++){
//     // console.log(i , arr[i])
//     // arr[0] = arr[0]**2
//     // arr[1] = arr[1]**2
//     // arr[2] = arr[2]**2
//     arr[i] = arr[i]**2
// }

// console.log(arr)




// let arr = [10,20,30,40,50] 

// let newArr = []


// for(let i = 0; i<=arr.length-1; i++){
//        // i, arr[i]
//     //    newArr[0] = arr[0]**2
//     //      newArr[1] = arr[1]**2
//     //         newArr[2] = arr[2]**2
//      newArr[i] = arr[i]**2
// }
// console.log(newArr)



let arr1 = [10,20,30,40,50]
let arr2 = [60,70,80,90,100]

let arr3 = []


for(let i = 0; i<=arr1.length-1;i++){
    // i, arr1[i], arr2[i]

    // arr3[0] = arr1[0] + arr2[0] //  arr3[0] = 10 + 60
    arr3[i] = arr1[i] + arr2[i]

}

console.log(arr3)