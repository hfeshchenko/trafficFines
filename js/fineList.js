"use strict";
window.fineList = {
    searchFines: searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey) {
    let arrOfFoundFines = [];
    let typeOfTrafficFines;
    for (let i = 0; i < DB.length; i++) {
        for (let key in DB[i]) {
            if (DB[i][key] == searchKey) typeOfTrafficFines = key;
        }
    }

    for (let i = 0; i < DB.length; i++) {
        if (DB[i][typeOfTrafficFines] === searchKey)
            arrOfFoundFines.push(DB[i]);

    }


    /*
    Напишіть свій код тут!
    Як ви бачите функція повертає статичні дані.
    Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
    так, щоб вона повертала масив відповідно переданому значенню в функцію.
    Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
    Тип штрафу може бути тільки
    - Перевищення швидкості
    - Невірне паркування
    - Їзда у не тверезому стані
    */
    if(arrOfFoundFines.length<1) return alert("Введіть корректне значення");
    return arrOfFoundFines;
}

