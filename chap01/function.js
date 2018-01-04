// 函数分为 有返回值 和 没有返回值

// 定义一个函数，给所有传进来的number 加a
function add1 (num, a) {
    return num + a
}
console.log(add1(66, 4))

// 定义一个没有返回值的函数？？？
function add2 (a, b) {
    var c 
    c = a
    a = b
    b = c
}

console.log(add2(2, 4))

// 没有参数的函数, 不管传入什么参数，始终只执行函数自己的参数结果
function add3 () {
    var a = 2
        b = 3
    return a + b
}
console.log(add3(1, 2))
