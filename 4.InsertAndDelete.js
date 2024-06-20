
// let arr = [10,20,30,40,50]

// Push and Pop:
// pop => remove the last element of array
// let x = arr.pop()  // [10,20,30,40]
// let y = arr.pop() // [10,20,30]
// console.log(arr, x,y)
// console.log(arr, arr.length)

// push => add the element at the end of array


// arr.push(100)
// 5
// let x = arr.push(60,70,80,90,100)
// 10

// console.log( x)


// shift and unshift (start of array)

// let arr = [10,20,30,40,50]

// let x = arr.shift()

// arr.unshift(100,200,300,400)

// console.log(arr)









// console.log("before delete", arr.length)
// delete arr[0]
// console.log("after delete", arr.length)


// console.log(arr) // [ <1 empty item>, 20, 30, 40, 50 ]





// let arr = [10,20,30,40,50,60,70,80,90,100] 

// delete 40(index=3) from the array
// let deletedIndex = 3

// let arr1 = []

// for(let i = 0; i<=deletedIndex; i++){
//     arr1[i] = arr[i]
// }
// arr1.pop()
// console.log(arr1) // [10,20,30]


// for(let i = deletedIndex+1; i<=arr.length-1; i++){
//    arr1.push(arr[i])
// }

// console.log(arr1) // [10,20,30,50,60,70,80,90,100]




// let arr = [10,20,30,40,50,60,70,80,90,100]

// // add an element at index 6 => "apple"

// let toBeAddedIndex = 6
// let arr1 = []

// for(let i = 0; i<=toBeAddedIndex-1; i++){
//     arr1[i] = arr[i]
// }
// // console.log(arr1) // [10,20,30,40,50,60]

// arr1.push("apple")

// // console.log(arr1) // [10,20,30,40,50,60, "apple"]


// for(let i = toBeAddedIndex; i<=arr.length-1; i++){
//      arr1.push(arr[i])
// }

// console.log(arr1) // [10,20,30,40,50,60, "apple", 70,80,90,100]



// shift and unshift => redo the above example




// let numbersArr = [10,20,30,40,50,60,70]

// arr = [10,20,30,40,50,60,70]
// step 1: [10,20,40,40,50,60,70]
// step 2: [10,20,40,50,50,60,70]
// step 3: [10,20,40,50,60,60,70]
// step 4: [10,20,40,50,60,70,70]


// let toBeDeletedIndex = 2

// for(let i = toBeDeletedIndex; i<=numbersArr.length-2;i++){
//       // arr[2] = arr[3]
//       // arr[3] = arr[4]
//         // arr[4] = arr[5]
//         // arr[5] = arr[6]
//         numbersArr[i] = numbersArr[i+1]

    
// }
// numbersArr.pop()
// console.log(numbersArr)


// insert an element at index 3 => 100