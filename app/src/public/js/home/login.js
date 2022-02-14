"use strict";

const id = document.getElementById("id"),
  password = document.getElementById("password"),
  loginBtn = document.getElementById("loginBtn");

// console.log(id); // null, #id를 가져오기 전에 console가 먼저 실행되서 null이 뜸

loginBtn.addEventListener("click", login);

function login() {
  if(!id.value) return alert("아이디를 입력해주세요.");
  if(!password.value) return alert("비밀번호를 입력해주세요.");

  axios.post("/login", {
    id: id.value,
    password: password.value
  })
  .then((res) => {
    if(res.success) {
      location.href = "/";
    } else {
      if(res.err) return alert(res.err);
      alert(res.msg);
    };
  })
  .catch((err) => {
    console.error(new Error("로그인 중 에러 발생!"));
  });
};