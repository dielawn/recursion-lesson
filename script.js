const containerDiv = document.getElementById('container')

function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(n, i)
    }
    console.log('we made it out')
}
countDown(10)

function countDownRecursive(n) {
    if (n <= 0) {
        console.log('we made it out recursively')
        return
    }
    countDownRecursive(n - 1)
}
countDownRecursive(10) 


function sumRange(n) {
    let total = 0
    for (let i = n; i > 0; i--) {
        total += i
    }
    return total
}

console.log(sumRange(3))

function sumRangeRecursive(n, total = 0) {
    if (n <= 0) {
        console.log('the end')
        return total
    }    
    return sumRangeRecursive(n - 1, total + n)
}

console.log(sumRangeRecursive(3))


function printChildren(t) {

}

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
printChildrenRecursive(tree)


// four factotrial  4! === 4 * 3 * 2 * 1 = 24

function factotrial(n) {
    if (n <= 0) 
        return 1
    else 
        return n * factotrial(n-1)    
}
console.log(factotrial(4))



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

console.log(collatz(7))

function power(n,x) {
    if (x === 0) {
        return 1
    } else {
      return  n * power(n, x - 1)
    }
}
console.log(power(2, 4)) // 16
console.log(power(2, 3)) // 8
console.log(power(2, 2)) // 4 
console.log(power(2, 1)) // 2
console.log(power(2, 0)) // 1

let allLessThanSeven = all([1,2,6], function(num) {
    return num < 7
})

function all(array, callback) {
    var copy = copy || array.slice()
    if(copy.length === 0) return true
    if (callback(copy[0])) {
        copy.shift()
        return all(copy, callback)
    } else {
        return false
    }
}

console.log(allLessThanSeven)