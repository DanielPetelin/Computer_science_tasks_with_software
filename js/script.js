let arr = [];
let yourNum = document.querySelector('#num').value;

function sp() {
    let result = yourNum /= 2;
    document.querySelector('#num').value /= 2;

    arr.push(1);
    document.querySelector('#out').innerHTML = result + ' ваш выбор ( 1 )';

    if (yourNum == 3) {
        document.querySelector('#out2').innerHTML = 'Вы победили! Количество ваших действий равно ' + arr.length + '. Лучший рекорд 5';
    };
};

function delOne() {
    let result = yourNum -= 1;
    document.querySelector('#num').value--;
    
    arr.push(2);
    document.querySelector('#out').innerHTML = result + ' ваш выбор ( 1 )';

    if (yourNum == 3) {
        document.querySelector('#out2').innerHTML = 'Вы победили! Количество ваших действий равно ' + arr.length + '. Лучший рекорд 5';
    };
};

// console.log(arr);