const clearBtn = document.querySelector('.clear button');
const failBtn = document.querySelector('.fail button');
const clearNumber = document.querySelector('.clear__count');
const failNumber = document.querySelector('.fail__count');

let count = "memoryCurrent";
let failcount = "failMemory";

function clear(){
    const current = parseInt(clearNumber.innerText, 10);
    const memoryCurrent = current +1;
    localStorage.setItem(count, memoryCurrent);
    clearNumber.innerHTML = `${memoryCurrent}`;
}

function nowClear() {
    const getClear = localStorage.getItem(count);
    clearNumber.innerHTML = `${getClear}`
}

function fail(){
    const current = parseInt(failNumber.innerText, 10);
    const failMemory = current+1;
    localStorage.setItem(failcount, failMemory);
    failNumber.innerHTML = `${failMemory}`;
}

function nowFail() {
    const getFail = localStorage.getItem(failcount);
    failNumber.innerHTML = `${getFail}`
}

nowClear();
clearBtn.addEventListener('click', clear);
nowFail();
failBtn.addEventListener('click', fail);
// 왜안됏을까............
// ㄴ 바보 아님?? clear()이렇게해놓으니까안되지