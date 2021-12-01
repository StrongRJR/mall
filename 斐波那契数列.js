let arr = [0, 1];
var fib = function (n){
    if (n == 0) return 0
    if (n == 1 || n == 2) {
        return 1
    }
    if (arr[n]) return arr[n];
    arr[n] = fib[n - 1] + fib[n - 2]
    return arr[n] % (1e9 + 7)
}

