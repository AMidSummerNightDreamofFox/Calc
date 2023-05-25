const readline = require('readline-sync')
const input = readline.question

const sep_oper = /<<|>>>|>>|\+|\*|-|&|\||\/|\^/g;

// 계산기 객체 파트 
const cal = {
    oper : function(num1, num2 = 0, operand) {
        switch(operand) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '&':
                return num1 & num2;
            case '|':
                return num1 | num2;
            case '^':
                return num1 ^ num2;
            case '<<':
                return num1 << num2;
            case '>>':
                return num1 >> num2;
            case "/":
                return num1 * 1.0 / num2;
            default: 
                console.log("Invalid Input");
                break;
        }
    }
};


while(true){
    // 값을 입력받는 파트
    let formula = input("Input The Formula(press q to exit): " );
    if(formula === 'q') {
        console.log("Terminate");
        break;
    }
    // 입력받은 연산자 확인하기
    let operand = formula.match(sep_oper)[0];
    cal.operand = operand;
    // 입력받은 수식에서 연산자 제거하면서 split 하고, 배열로 2개 저장
    switch(operand) {
        case '+':
            var DelAddArr = formula.split('+');
            break;
        case '-':
            var DelSubArr = formula.split('-');
            break;
        case '*':
            var DelMulArr = formula.split('*');
            break;
        case '&':
            var DelAndArr = formula.split('&');
            break;
        case '|':
            var DelOrArr = formula.split('|');
            break;
        case '^':
            var DelXorArr = formula.split('^');
            break;
        case '<<':
            var DelLeftArr = formula.split('<<');
            break;
        case '>>':
            var DelRightArr = formula.split('>>');
            break;
        case "/":
            var DelDvsArr = formula.split('/');
            break;
        default:
        }
    // 숫자1, 숫자2 저장하기
    switch(operand) {
        case '+':
            cal.num1 = Number(DelAddArr[0]);
            cal.num2 = Number(DelAddArr[1]);
            break;
        case '-':
            cal.num1 = Number(DelSubArr[0]);
            cal.num2 = Number(DelSubArr[1]);
            break;
        case '*':
            cal.num1 = Number(DelMulArr[0]);
            cal.num2 = Number(DelMulArr[1]);
            break;
        case '&':
            cal.num1 = Number(DelAndArr[0]);
            cal.num2 = Number(DelAndArr[1]);
            break;
        case '|':
            cal.num1 = Number(DelOrArr[0]);
            cal.num2 = Number(DelOrArr[1]);
            break;
        case '^':
            cal.num1 = Number(DelXorArr[0]);
            cal.num2 = Number(DelXorArr[1]);
            break;
        case '<<':
            cal.num1 = Number(DelLeftArr[0]);
            cal.num2 = Number(DelLeftArr[1]);
            break;
        case '>>':
            cal.num1 = Number(DelRightArr[0]);
            cal.num2 = Number(DelRightArr[1]);
            break;
        case "/":
            cal.num1 = Number(DelDvsArr[0]);
            cal.num2 = Number(DelDvsArr[1]);
            break;
        default:
        }
    // cal 객체 불러서 연산하기
    let ans = cal.oper(cal.num1, cal.num2, cal.operand);
    console.log(ans);
}