
const sort = (A: string[], B: number[]) => {
    if (A && A.length > 0 && B && B.length === A.length) {
        const str: string[] = [];
        B.map((current, index) => {
            str[current] = A[index]
        })
        return str.join('')
    } else {
        return "There is problem in the input"
    }
}


const A = ["A", "C", "L", "I", "V", "E", "U"];
const B = [3, 0, 4, 1, 2, 6, 5];

const C = sort(A, B)
console.log(C)