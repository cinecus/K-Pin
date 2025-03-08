// if-else
const calculateGrade = (score) => {
    if (score >= 80) {
        console.log("คุณได้คะแนน A");
    } else if (score >= 70) {
        console.log("คุณได้คะแนน B");
    } else if (score >= 60) {
        console.log("คุณได้คะแนน C");
    } else if (score >= 50) {
        console.log("คุณได้คะแนน D");
    } else {
        console.log("คุณได้คะแนน F");
    }
}

// ternary operator
const ternaryOperator = (word) => {
    return word === "Hello" ? "สวัสดี" : "สวัสดีครับ";
}

const ternaryOperator2 = (boolean) => {
    return boolean ? 1 : 0;
}

const calculateGradeTernary = (score) => {
    return score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : score >= 50 ? "D" : "F";
}

// and operator
const andOperator = (a, b) => {
    return a && b;
}

// or operator
const orOperator = (a, b) => {  
    return a || b;
}

// not operator
const notOperator = (a) => {
    return !a;
}

// nullish coalescing operator
const nullishCoalescingOperator = (a, b) => {
    return a ?? b;
}

// optional chaining
const optionalChaining = (obj) => {
    return obj?.name?.firstName;
}


// switch case
const calculateDay = (day) => {
    switch (day) {
        case 1:
            console.log("วันจันทร์");
            break;
        case 2:
            console.log("วันอังคาร");
            break;
        case 3:
            console.log("วันพุธ");
            break;
        case 4:
            console.log("วันพฤหัสบดี");
            break;
        case 5:
            console.log("วันศุกร์");
            break;
        case 6:
            console.log("วันเสาร์");
            break;
        case 7:
            console.log("วันอาทิตย์");
            break;
        default:
            console.log("วันที่ไม่ถูกต้อง");
    }
}

module.exports = { calculateGrade, calculateDay, calculateGradeTernary, andOperator, orOperator, notOperator, nullishCoalescingOperator, optionalChaining };