export function rangeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}

export function iterationCount(a) {
    let count = 0;
    let num = a;
    while (num > 0.1) {
        num = num / 2;
        count++;
    }
    return count;
}

export function symbolsReplace(message) {
    let result = '';
    let i = 0;
    do {
        if ((i + 1) % 3 === 0) {
            result = result + '_';
        } else {
            result = result + message[i];
        }
        i++;
    } while (i < message.length);
    return result;
}
