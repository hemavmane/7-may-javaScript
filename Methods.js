// concat()

// let arr = [4, 3,34,3,34,65,2,19]
// let arr2 = [4,4,3,83,30,9,2,5]
// let str1= ['hello','world']
// let str2 = ['lets','start','code']


// // let arr3 = arr.concat(arr2)
// // console.log(arr3)

// let str3 = str1.concat(str2)
// console.log(str3)

// // entries
// let arr = [4, 3,34,3,34,65,2,19]
// let arr2 = [4,4,3,83,30,9,2,5]
// let str1= ['hello','world']
// let str2 = ['lets','start','code']


// let k= arr.entries().next().value
// console.log(k)


// let arr = [4, 3,34,6,34,65,2,19]
// let arr2 = [4,4,3,83,30,9,2,5]
// let str1= ['hello','world']
// let str2 = ['lets','start','code']

// copyWithin(target)
// copyWithin(target, start)
// copyWithin(target, start, end)

// arr.copyWithin(0,4)
// console.log(arr)

//return  the modified array.it copy the element to index which is selected by us



// let arr = [4,3,8,6,2,9]
// let arr2 = [4,4,3,83,30,9,2,5]
// let str1= ['hello','world']
// let str2 = ['lets','start','code']
// arr.every() it will see each condition  in case of some() it will if one conditon satisfied measn
// it sreturn true 

// arr.fill(5,3)
// arr.fill('hema',3)
// console.log(arr)
// The modified array, filled with value.

// let arr = [4,3,8,6,2,9]
// let arr2 = [4,4,3,83,30,9,2,5]
// let str1= ['hello','world']
// let str2 = ['lets','start','code']

// let findarr= arr.find((ele)=>ele>1)
// let findarr2= arr.find((ele)=>ele>12)
// console.log(findarr,findarr2)
// The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.



let arr = [4,3,8,6,2,9,23]
let arr2 = [4,4,3,83,30,9,2,5]
let str1= ['hello','world']
let str2 = ['lets','start','code']




// let filteredArray = arr.filter((ele)=> {
//       console.log(ele%2==0 ? "even" :'odd')
// })

// console.log(filteredArray)

// let findindexofTargetEle = arr.findIndex((ele)=>ele>8)

// console.log(findindexofTargetEle)


// find() for find first match number
// findLast() use for last element 
// findLastIndex() similar to findIndexit will find index of value from last depends on conditon
// findindex() it find first index of element if condtion tur it will stop checking
// 

// A new array with the sub-array elements concatenated into it.

// let array= [[[8,[[[[5][[[[[[[[[[[[[[[[[[[[[[7]]]]]]]]][[[[[[[[[[[[[[[[[[[[[[[[[[[98]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],6]]]

// console.log(array.flat(Infinity))
// arr = [4,5,3]
// let ar=arr.flatMap((ele)=>ele>4 ? [5,34,323,] : 6)
// console.log(ar)

// arr = [3,23,5,322,324,3,4,234,2,5,32]
// arr.forEach((element)=>console.log(element))