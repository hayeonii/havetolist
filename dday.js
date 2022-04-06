const ddayBtn = document.querySelector(".date__submit");
const inputDay = document.querySelector(".date__input").value;
const today = new Date();
const startDay = new Date(inputDay);

const year = startDay.getFullYear();
const month = startDay.getMonth()+1;
const day = startDay.getDate();

function dday(){
    document.querySelector(".dday__result").innerHTML = year + "년" + month + "월" + day + "일까지";
}


ddayBtn.addEventListener("submit", dday);