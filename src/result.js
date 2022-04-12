const clearBtn = document.querySelector('.clear button');
const failBtn = document.querySelector('.fail button');
const clearNumber = document.querySelector('.clear__count');
const failNumber = document.querySelector('.fail__count');

let clearCount = "clearMemory";
let failcount = "failMemory";

function clear(){
    const clearCurrent = parseInt(clearNumber.innerText);

    const clearMemory = clearCurrent +1;
    clearNumber.innerText = `${clearMemory}`;
    localStorage.setItem(clearCount, clearMemory);
}

function fail(){
    const failCurrent = parseInt(failNumber.innerText);
   
    const failMemory = failCurrent+1;
    failNumber.innerText = `${failMemory}`;
    localStorage.setItem(failcount, failMemory);
}

function nowClear() {
    if(localStorage.getItem(clearCount) === null){
        clearNumber.innerText = 0;
    } else {
        const getClear = localStorage.getItem(clearCount);
    clearNumber.innerText = `${getClear}`;
    }
}

function nowFail() {
    if(localStorage.getItem(failcount) === null) {
        failNumber.innerText = 0;
    } else {
        const getFail = localStorage.getItem(failcount);
        failNumber.innerText = `${getFail}`;
    }
}

document.addEventListener('DOMContentLoaded', nowClear);
document.addEventListener('DOMContentLoaded', nowFail);
clearBtn.addEventListener('click', clear);
failBtn.addEventListener('click', fail);
// 왜안됏을까............
// ㄴ 바보 아님?? clear()이렇게해놓으니까안되지