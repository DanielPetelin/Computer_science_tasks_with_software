let arr = [];

function sp() {
    let result = document.querySelector('#num').value /= 2;

    arr.push(1);
    document.querySelector('#out').innerHTML = result + ' ваш выбор ( 1 )';
};

function delOne() {
    let result = document.querySelector('#num').value -= 1;
    
    arr.push(2);
    document.querySelector('#out').innerHTML = result + ' ваш выбор ( 1 )';
};

console.log(arr);