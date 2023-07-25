const containerDiv = document.getElementById('container')

function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(n, i)
    }
    console.log('we made it out')
}
// countDown(10)

function countDownRecursive(n) {
    if (n <= 0) {
        console.log('we made it out recursively')
        return
    }
    countDownRecursive(n - 1)
}
// countDownRecursive(10) 


function sumRange(n) {
    let total = 0
    for (let i = n; i > 0; i--) {
        total += i
    }
    return total
}

// console.log(sumRange(3))

function sumRangeRecursive(n, total = 0) {
    if (n <= 0) {
        console.log('the end')
        return total
    }    
    return sumRangeRecursive(n - 1, total + n)
}

// console.log(sumRangeRecursive(3))


const tree = {
    name: 'John', 
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                {name: 'Kyle', children: [] },
                {name: 'Sophia', children: [] }
            ]
        }
    ]
}

function printChildrenRecursive(t) {
    if (t.children.length === 0) {
        return
    }
    t.children.forEach(child => {
        console.log(child.name)
        printChildrenRecursive(child)
    })
}
// printChildrenRecursive(tree)


// four factotrial  4! === 4 * 3 * 2 * 1 = 24

function factotrial(n) {
    if (n <= 0) 
        return 1
    else 
        return n * factotrial(n-1)    
}
// console.log(factotrial(4))



function isEven(number) {
    return number % 2 === 0;
  }


function collatz(n) {
    if (n === 1) {
       return 1
    } else if (isEven(n)) {
        return 1 + collatz(n/2)
    } else 
         return 1 + collatz(3 * n + 1)
}

// console.log(collatz(7))

function power(n,x) {
    if (x === 0) {
        return 1
    } else {
      return  n * power(n, x - 1)
    }
}
// console.log(power(2, 4)) // 16
// console.log(power(2, 3)) // 8
// console.log(power(2, 2)) // 4 
// console.log(power(2, 1)) // 2
// console.log(power(2, 0)) // 1

const testArray = [7,8,9,2,7,3,4,5,6]

let allLessThanValue = all(testArray, function(num, valueToCheck) {
    return num < valueToCheck
}, 7)




function all(array, callback, valueToCheck) {
    var copy = copy || array.slice()
    // console.log(copy)
    if(copy.length === 0) return true
    if (callback(copy[0], valueToCheck)) {
        copy.shift()
        return all(copy, callback, valueToCheck)
    } else {
        return false
    }
}

// console.log(allLessThanValue)

const newArray = []

function productOfArray(array) {
   if (array.length === 0) return 1
   return array.shift() * productOfArray(array)
}

// console.log(productOfArray(testArray))


var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(object, valueToCompare) {
    for (var key in object) {
        // console.log(key)
        if (typeof object[key] === 'object') {
            return contains(object[key], valueToCompare)
        }
        if (object[key] === valueToCompare) {
            // console.log(object[key])
            return true
        }
       
    }
    return false
}




let hasIt = contains(nestedObject, 44) // true
let doesntHaveIt = contains(nestedObject, 'foo') //false
// console.log(doesntHaveIt)

const fdUpArray = [[[5], 3], 0, 2, 56, ['foo'], [], [4, [5, 6]]]


function totalIntegers(array) {
    if(array.length === 0) return 0
    let total = 0
     let first = array.shift()

     if (Array.isArray(first)) {
        total += totalIntegers(first)
     } else if (Number.isInteger(first)) {
        total += 1
     } 
     return total + totalIntegers(array)
}

// console.log(totalIntegers(fdUpArray))

const numArray1 = [1,2,3] //14
const numArray2 = [[1,2],3] //14 
const numArray3 = [[[[[[[[[1]]]]]]]]] //1
const numArray4 = [10,[[10],10],[10]] //400 


function sumsSquares(array) {
    if (array.length === 0) return 0
    let total = 0

    for (let i = 0; i < array.length; i++) {
        console.log(typeof array[i])
        if (Array.isArray(array[i])) {
            total += sumsSquares(array[i])
          
        } else if (typeof array[i] === 'number') {
            total += array[i] * array[i]
        }
    }
    return total
}


// console.log(sumsSquares(numArray1))
// console.log(sumsSquares(numArray2))
// console.log(sumsSquares(numArray3))
// console.log(sumsSquares(numArray4))

function replicate(times, number) {
    if(times <= 0) return []
    return [number].concat(replicate(times - 1, number))
}

// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []
// console.log(replicate(12, 24))

const fibsArray = []

function fibs(n) {
  if (n === 0) {
    fibsArray.push(0);
    return [0];
  }
  if (n === 1) {
    fibsArray.push(1);
    return [0, 1];
  }

  const fibNum = fibs(n - 1);
  const nextFib = fibNum[n - 1] + fibNum[n - 2];
  fibsArray.push(nextFib);
  return [...fibNum, nextFib];
}



function fibonacciIterative(n) {
    if (n <= 0) return [0];
    if (n === 1) return [0, 1];
  
    const fibArray = [0, 1];
    for (let i = 2; i <= n; i++) {
      fibsArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
  
    return fibArray;
  }

 

  function visualizeFibs1() {
    let elementHorizontal = true
    let x = 0
    let y = 0


    for (const fibNum of fibsArray) {
        const fibDiv = document.createElement('div')
        fibDiv.classList.add('fib-div')
        fibDiv.style.position = 'absolute'
        fibDiv.style.backgroundColor = 'black'
        let elementLength = fibNum * 10
        

        if( elementHorizontal) {
            fibDiv.style.height = '5px'
            fibDiv.style.width = elementLength + 'px'   
            fibDiv.style.top = y + 'px'
            fibDiv.style.left = x + 'px'       
            x += elementLength
       
            
        } else {
            fibDiv.style.width = '5px'
            fibDiv.style.height = elementLength + 'px'
            fibDiv.style.top = y + 'px'
            fibDiv.style.left = x + 'px'
            y += elementLength
          
          
        }

        elementHorizontal = !elementHorizontal
        containerDiv.appendChild(fibDiv)   
   }
 
  }

  visualizeFibs1()


function visualizeFibs() { 
    
    

    let x = 0;
    let y = 0;
    let direction = 4 // 0 = right, 1 = down, 2 = left, 3 = up
    console.log(fibsArray)
    for (let i = 0; i < fibsArray.length; i++) {
      const fibNum = fibsArray[i];
     
      const fibDiv = document.createElement('div');
      fibDiv.id = `fibDiv${i}`
      fibDiv.classList.add('fib-div');
      let thickness = 5
      direction + 1
      if(direction === 4) {
        direction = 0
      }
      if (direction === 0) {
        fibDiv.style.width = fibNum + 'px';
        fibDiv.style.height = `${thickness}px`;
        fibDiv.style.top = y + 'px';
        fibDiv.style.left = x + 'px';
        console.log(x - fibNum, x, y, '0')
        fibDiv.style.backgroundColor = 'red'
        x += fibNum ;
      } else if (direction === 1) {
        fibDiv.style.height = fibNum + 'px';
        fibDiv.style.width = `${thickness}px`
        fibDiv.style.top = y + 'px';
        fibDiv.style.left = x + 'px';
        console.log(x - fibNum, x, y, '1')
        fibDiv.style.backgroundColor = 'green'
        y += fibNum ;
      } else if (direction === 2) {
        fibDiv.style.width = fibNum + 'px';
        fibDiv.style.height = `${thickness}px`
        fibDiv.style.top = y + 'px';
        console.log(x - fibNum,  x, y, '2')
        fibDiv.style.left = (x - fibNum) + 'px';
        fibDiv.style.backgroundColor = 'blue'
        x -= fibNum ;
      } else if (direction === 3) {
        fibDiv.style.height = fibNum + 'px';
        fibDiv.style.width = `${thickness}px`
        fibDiv.style.top = (y - fibNum ) + 'px';
        fibDiv.style.left = x + 'px';
        console.log(x - fibNum, x,  y, '3')
        fibDiv.style.backgroundColor = 'orange'
        y -= fibNum ;
      }
    
      containerDiv.appendChild(fibDiv);
      direction = (direction + 1) % 4;
    }
  }

  const unsortedArray = [359, 69, 0, 45, 345, 346, 347, 343, 344, 345, 5,2,1,3,6, 1000000, 345, 4,7,8, 9, -12]

  function sortMerge(array) {
   
    if (array.length <= 1) {
        return array;
      }
       //divide the array in two
    const middleIndex = Math.floor(array.length / 2)  
    const firstArray = array.slice(0, middleIndex)
    const secondArray = array.slice(middleIndex)
    
  //sort the left half
 const firstSorted = sortMerge(firstArray)
   //sort the right half
 const secondSorted = sortMerge(secondArray)
  //merge the two
 return mergeArrays(firstSorted, secondSorted)
  }

  function mergeArrays(left, right) {
    const merged = []
    let firstIndex = 0
    let secondIndex = 0

    while (firstIndex < left.length && secondIndex < right.length) {
       if (left[firstIndex] < right[secondIndex]) {
        merged.push(left[firstIndex])
        firstIndex++
       } else {
        merged.push(right[secondIndex])
        secondIndex++
       }
        
    } 
   merged.push(...left.slice(firstIndex))
   merged.push(...right.slice(secondIndex))

   return merged
   
  }

const alphaArray = ['bob', 'alice', 'dennis', 'cindy', 'roberto', 'megan', 'gina', 'alex', 12, 7]

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    const middleIndex = Math.floor(arr.length / 2) 
    const leftHalf = arr.slice(0, middleIndex)
    const rightdHalf = arr.slice(middleIndex)
    console.log('unsorted: ',leftHalf, rightdHalf)

    const leftSorted = mergeSort(leftHalf)
    const righSorted = mergeSort(rightdHalf)
    console.log('sorted: ', leftSorted, righSorted)

    return merge(leftSorted, righSorted)
}

const merge = (left, right) => {
    const merged = []
    let leftIndex = 0
    let rightIndex = 0
    console.log('Left: ', left, 'Right: ', right)

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex])
            leftIndex++
        } else {
            merged.push(right[rightIndex])
            rightIndex++
        }
    }
    merged.push(...left.slice(leftIndex));
    merged.push(...right.slice(rightIndex));
  
    return merged;
}

const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            console.log(arr[i], arr[i - 1])
            return false
        }
    }
    return true
}


  


function reverseArray(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined
    let total = 0
    for (let i of arr1) {
        for (let j of arr2) {
            total += i * j
        }
    }
    return total
}

const firstArray = [1, 2, 3, 4]
const secondArray = [5, 3, 1, 8]


function logTime(arr) {
    let numberOfLoops = 0
    for (let i = 1; i < arr.length; i *= 2) {
        numberOfLoops++
    }
    return numberOfLoops
}

let loopsA = logTime([1]) // 0 loops
let loopsB = logTime([1, 2]) // 1 loop
let loopsC = logTime([1, 2, 3, 4]) // 2 loops
let loopsD = logTime([1, 2, 3, 4, 5, 6, 7, 8]) // 3 loops
let loopsE = logTime(Array(16)) // 4 loops

// don't use this it crashes the browser if n > 1
// function linearithnic(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j = j * 2) {
//             console.log('Hello')
//         } 
//     }
// }

const fruits = ["apple", "strawberry", "watermelon"]

function printAndPair(arr) {
    const totalPairs = arr.length * arr.length
    console.log(`Estimated paired elements length: ${totalPairs}`)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) console.log(`${arr[i]} - ${arr[j]}`)
    }
}

function sumArr(arr) {
    const copyArr = arr.slice()
    let sum = 0
    copyArr.forEach((number) => {
        sum += number
    })
    return sum
}

const arrayOneZero = [11, 1, 23, 8, 14, 30, 9, 6, 17, 22, 28, 25, 15, 7, 10, 19]
const binaryArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const binarySearch = (arr, target) => {
    
    // repeat until array is size 0
    if(arr.length <= 0) return 'Target not found'
    //calculate middle of array
    const middleIndex = Math.floor(arr.length / 2)
    console.log(arr[middleIndex])
    console.log(arr[target])
    console.log(arr[middleIndex] < arr[target])
    //if target is at the middle stop
    if (arr[middleIndex] === arr[target]) return `Target found at ${arr[middleIndex]}`
    //otherwise if the target is less then middle, repeat, changing the end point to be just to the left of the middle
    else if(arr[target] < arr[middleIndex]) return binarySearch(arr.slice(0, middleIndex), middleIndex) 
    //otherwise if the target is greater than the middle, repeat, changing the start point to be just to right of the middle
    else if(arr[target] > arr[middleIndex]) return binarySearch(arr.slice(middleIndex), middleIndex)

}

//CHECK FUNCTION SPEED
const t0 = performance.now()
// Add function here...
const t1 = performance.now()

console.log("The function took: " + (t1 - t0) + " milliseconds.")





function onDocumentLoad() {

    // Your initialization code goes here
    console.log('Document is fully loaded.');
    fibs(20)
  console.log(fibsArray)
    visualizeFibs();
    console.log(unsortedArray) 
    const sortedArray = sortMerge(unsortedArray)
    console.log(sortedArray)
    const backwardSortedArray = reverseArray(sortedArray)
    console.log(backwardSortedArray)
   


if (isSorted(sortedArray)) {
    console.log(`Success! - unsorted: ${unsortedArray} sorted: ${sortedArray}`)
} else {
    console.log(`Failed - unsorted: ${unsortedArray} sorted: ${sortedArray}`)
}

console.log(multiplyAll(firstArray, secondArray))
console.log(loopsE)

printAndPair(fruits)

console.log(sumArr([1,200]))
const sorted = mergeSort(arrayOneZero)
console.log(binarySearch(sorted, 10))

  }
  document.addEventListener('DOMContentLoaded', onDocumentLoad);
