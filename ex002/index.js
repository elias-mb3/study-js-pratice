function uniqueInOrder(sequence) {
    if (!sequence) return [];
    let array = typeof sequence === 'string' ? sequence.split('') : sequence;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        // Adiciona o elemento à lista se ele for diferente do último elemento adicionado
        if (i === 0 || array[i] !== array[i - 1]) {
            result.push(array[i]);
        }
    }
    return result;
}

// Exemplos de uso
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));        // ['A', 'B', 'C', 'c', 'A', 'D']
