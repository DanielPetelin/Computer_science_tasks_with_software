let arr = [];
let out = '';
let yourNum = document.querySelector('#num').value;

function sp() {
    let result = yourNum /= 2;
    document.querySelector('#num').value /= 2;

    arr.push(1);
    document.querySelector('#out').innerHTML = result + ' ваш выбор ( 1 )';

    if (arr.length == 5 && yourNum == 3) {
        document.querySelector('#out2').innerHTML = 'Это гениально!';
    };
};

function delOne() {
    let result = yourNum -= 1;
    document.querySelector('#num').value--;
    
    arr.push(2);
    document.querySelector('#out').innerHTML = result + ' ваш выбор ( 1 )';

    if (arr.length == 5 && yourNum == 3) {
        document.querySelector('#out2').innerHTML = 'Это гениально!';
    };
};

console.log(arr);