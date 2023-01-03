// let minimum = prompt("가장 작은 수는 몇으로 할건가요?","") 로 했다가 오류떠서 30분 갈렸다.. "10" < "9"다.. 문자열 "10" 과 "9" 의 앞자리부터 비교하기 때문이다. isNaN(parseInt())말고 !parseInt())가 더 간단하다.
let minimum, maximum;
function limit() {
    minimum = parseInt((prompt("가장 작은 수를 정해주세요.","")))
    while (!parseInt(minimum)) {
        minimum =parseInt((prompt("숫자만 입력해주세요. 가장 작은 수를 정해주세요.")))
    }
    maximum =parseInt((prompt("가장 큰 수를 정해주세요.","")))
    while (!parseInt(maximum)) {
        maximum =parseInt((prompt("숫자만 입력해주세요. 가장 큰 수를 정해주세요.")))
    }
}

limit();
while (minimum >= maximum) {
    alert("가장 작은 수로 입력한 값이 가장 큰 수로 입력한 값보다 크거나 같습니다. 다시 입력해주세요.")
    limit();
} 
// 최소값 구현하느라고 30분 갈렸다 이 쉬운 걸
const targetNumber = Math.floor(Math.random() * (maximum-minimum + 1) + minimum)
let guess = prompt(`${minimum}~${maximum} 사이의 수를 입력해주세요. (q를 입력하면 종료됩니다.)`,``)
let attempts = 0;
while (guess !== targetNumber){
    attempts++ ;
    if (guess === "q") {
        document.querySelector("h1").innerText = "종료되었습니다.";
        break;
    } else if (!parseInt(guess)){
        guess = prompt("숫자만 입력해주세요. (q를 입력하면 종료됩니다.)")
    } else {
        if (guess > targetNumber) {
            guess = prompt(`${guess}보다 작습니다. (${minimum}~${maximum})`,``)
        } else if (guess < targetNumber) {
            guess = prompt(`${guess}보다 큽니다. (${minimum}~${maximum})`,``)
        } else {
            document.querySelector("p").innerText = `${attempts}번만에 성공했습니다 !`
            break;
        }
    }
}