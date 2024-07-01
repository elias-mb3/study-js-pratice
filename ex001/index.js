function countBits (num) {
    let binary = num.toString(2)
    let contador = binary.split('1').length - 1;
    return contador
}

let num = 1234
console.log(countBits(num))