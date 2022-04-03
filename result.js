const clearBtn = document.querySelector('.clear button');
const failBtn = document.querySelector('.fail button');
const clearNumber = document.querySelector('.clear__count');
const failNumber = document.querySelector('.fail__count');

function clear(){
    const current = parseInt(clearNumber.innerText, 10);
    clearNumber.innerText = current+1;
}

function fail(){
    const current = parseInt(failNumber.innerText, 10);
    failNumber.innerText = current+1;
}

clearBtn.addEventListener('click', clear);
failBtn.addEventListener('click', fail);
// 왜안됏을까............
// ㄴ 바보 아님?? clear()이렇게해놓으니까안되지