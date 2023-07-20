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
    console.log(n)
    countDownRecursive(n - 1)
}
countDownRecursive(10) 


function sumRange(n) {
    let total = 0
    for (let i = 0; i > 0; i--) {
        total += i
        console.log(total)
    }
    console.log(total)
    return total
}

sumRange(5)