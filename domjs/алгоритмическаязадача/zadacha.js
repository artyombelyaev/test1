function verify() {
    console.log("year")
    let year = parseInt(elementY.value);
    console.log(year)

    let century = Math.floor(year / 100) + 1;
    let answer
    if (year >= 1584 && ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))) {
        answer = "Високосный, ";
        check = true;
    }
    else {
        answer = "Невисокосный, ";
        check = false;
    }

    result = answer + century + "век.";
    document.getElementById("result").innerText = messageText + result;
    document.getElementsByName('result')[0].value = result;

}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0]
        .innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit()
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send()
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementY = document.getElementById("year");
elementY.addEventListener('input', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send)