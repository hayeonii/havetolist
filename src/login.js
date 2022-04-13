const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#name_input");
const greeting = document.querySelector("#greeting");
const reset = document.querySelector('#reset');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
  }
  
  function paintGreetings(username) {
    greeting.innerText = `${username} 님, 오늘도 파이팅!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    reset.innerHTML = `
    <button type="submit" class="logout">
      <i class="fa-solid fa-rotate-right"></i>
    </button>
    `
  }
  
  
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  
  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    paintGreetings(savedUsername);
  }

  function removeStorage() {
    localStorage.clear();
    // window.location.reload();
  }


  const resetBtn = document.querySelector('.logout');

  resetBtn.addEventListener('click', removeStorage);