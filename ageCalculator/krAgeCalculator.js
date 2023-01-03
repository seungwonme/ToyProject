// let now = new Date();
// let year = now.getFullYear() + "1231";
// let thisYear = parseInt(year);
function ageCalculator() {
    const now = parseInt(new Date().getFullYear() + '1231');
    let birthDate = prompt('숫자로만 생년월일을 입력하세요. ex) 19910101', '');
    if (isNaN(parseInt(birthDate))) {
        alert('숫자를 입력해주세요.');
    } else if (birthDate > 19000101 && birthDate < now) {
        let age = now - birthDate;
        let realAge = age / 10000 + 1;
        document.querySelector('.age').textContent = '당신의 나이는 ' + parseInt(realAge) + '세입니다.';
    } else {
        alert('잘못된 양식입니다.');
    }
}
document.querySelector('button').addEventListener('click', ageCalculator);
