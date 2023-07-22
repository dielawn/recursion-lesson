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
fibs(8)

function fibs(n) {
    // if (n <= 0) return [0];
    if (n === 1) return [0, 1];
    
    const fibArray = fibs(n - 1);
    fibArray.push(fibArray[n - 1] + fibArray[n - 2]);
    return fibArray;
  }
  
function fibonacciIterative(n) {
    if (n <= 0) return [0];
    if (n === 1) return [0, 1];
  
    const fibArray = [0, 1];
    for (let i = 2; i <= n; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
  
    return fibArray;
  }

 

//   function visualizeFibs() {
//     let elementHorizontal = true
//     let x = 0
//     let y = 0


//     for (const fibNum of fibsArray[0]) {
//         const fibDiv = document.createElement('div')
//         fibDiv.classList.add('fib-div')
//         fibDiv.style.position = 'absolute'
//         fibDiv.style.backgroundColor = 'black'
//         let elementLength = fibNum * 10
        

//         if( elementHorizontal) {
//             fibDiv.style.height = '5px'
//             fibDiv.style.width = elementLength + 'px'   
//             fibDiv.style.top = y + 'px'
//             fibDiv.style.left = x + 'px'       
//             x += elementLength
       
            
//         } else {
//             fibDiv.style.width = '5px'
//             fibDiv.style.height = elementLength + 'px'
//             fibDiv.style.top = y + 'px'
//             fibDiv.style.left = x + 'px'
//             y += elementLength
          
          
//         }

//         elementHorizontal = !elementHorizontal
//         containerDiv.appendChild(fibDiv)   
//    }
 
//   }

//   visualizeFibs()


function visualizeFibs(num) {
    const numOfFibs = num; // Replace with the number of Fibonacci numbers you want to generate.
    fibs(numOfFibs);

    let x = 0;
    let y = 0;
    let direction = 0; // 0 = right, 1 = down, 2 = left, 3 = up
    console.log(direction)
    for (let i = 0; i < fibsArray.length; i++) {
      const fibNum = fibsArray[i];
      const fibDiv = document.createElement('div');
      fibDiv.classList.add('fib-div');
      
      direction++
      if(direction === 4) {
        direction = 0
      }
       console.log(direction)
      if (direction === 0) {
        fibDiv.style.width = fibNum * 10 + 'px';
        fibDiv.style.height = '10px';
        fibDiv.style.top = y + 'px';
        fibDiv.style.left = x + 'px';
        x += fibNum * 10;
      } else if (direction === 1) {
        fibDiv.style.height = fibNum * 10 + 'px';
        fibDiv.style.width = '10px';
        fibDiv.style.top = y + 'px';
        fibDiv.style.left = (x - 10) + 'px';
        y += fibNum * 10;
      } else if (direction === 2) {
        fibDiv.style.width = fibNum * 10 + 'px';
        fibDiv.style.height = '10px';
        fibDiv.style.top = (y - 10) + 'px';
        fibDiv.style.left = (x - fibNum * 10) + 'px';
        x -= fibNum * 10;
      } else if (direction === 3) {
        fibDiv.style.height = fibNum * 10 + 'px';
        fibDiv.style.width = '10px';
        fibDiv.style.top = y + 'px';
        fibDiv.style.left = x + 'px';
        y -= fibNum * 10;
      }

      containerDiv.appendChild(fibDiv);
      direction = (direction + 1) % 4;
    }
  }



function onDocumentLoad() {
    // Your initialization code goes here
    console.log('Document is fully loaded.');
    visualizeFibs(8);
  }
  document.addEventListener('DOMContentLoaded', onDocumentLoad);
