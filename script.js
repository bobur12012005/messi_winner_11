// const romains = (str) => {
//     const map = {
//         "I": 1,
//         "V": 5,
//         "X": 10,
//         "L": 50,
//         "C": 100, 
//         "D": 500,
//         "M": 1000
//     }

//     let result = 0
//     let prev = 0

//     for (let i = str.length - 1; i >= 0; i--) {
//         let curr = map[str[i]]

//         if(curr >= prev) {
//             result += curr
//         } else {
//             result -= curr
//         }

//         prev = curr
//     }

//     return result
// }



const toArabic = (number) => {
    let map = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };

    let nums = number.split('');
    let result = 0;
    for (let i = 0; i < nums.length; i ++) {
        let first = map[nums[i]];
        let second = map[nums[i + 1]] ?? 0;
        if (first < second) {
            result += second - first;
            i += 1;
        } else {
            result += first;
        }
    }
    return result;
};
console.log(toArabic('CMXI'))
console.log(toArabic('MXXIV'))