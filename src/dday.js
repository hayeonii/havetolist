const ddayBtn = document.querySelector('.input__icon');
const ddayForm = document.querySelector('.dday__input');
const now = new Date();

let ddayCount = 'passedDay';

ddayForm.addEventListener('submit', (event) => {
    event.preventDefault();
    dday();
})

function removeForm(){
    const inputForm = document.querySelector('.dday__input');
    inputForm.parentNode.removeChild(inputForm);
}

function dday(){
    const dday = new Date(document.querySelector('.date__input').value);
    const passedTime = now.getTime()-dday.getTime();
    const passedDay = Math.round(passedTime/(24*60*60*1000));
    document.querySelector('.dday__result').innerHTML = "시작한지 " + passedDay + "일째";
    localStorage.setItem(ddayCount, passedDay);
    removeForm();
    
}

function passedDday(){
    if (localStorage.getItem(ddayCount) === null){
        ddayBtn.addEventListener('submit', dday);
    } else {
        removeForm();
        const getDday = localStorage.getItem(ddayCount);
        document.querySelector('.dday__result').innerHTML = "시작한지 " + getDday + "일째";
    }
}

document.addEventListener('DOMContentLoaded', passedDday);


//removeChild
//dday new Date 받아온 다음 getTime 쓰는 이유