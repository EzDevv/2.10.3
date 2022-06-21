"use strict";

let num = prompt("Введите число");

if (num > 0) {
    alert("1");
} else if (num < 0) {
    alert("-1");
} else if (num == 0) {
    alert("0");
} else {
    alert("Ошибка, можно вводить только цифровые значения, перезагрузите страницу для повтора");
}