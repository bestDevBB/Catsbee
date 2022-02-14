"use strict";

const id = document.getElementById("id"),
    name = document.getElementById("name"),
    password = document.getElementById("password"),
    confirmPassword = document.getElementById("confirm-password"),
    registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", register);

function register() {
  if(!id.value) return alert("아이디를 입력해주세요.");
  if(!name.value) return alert("이름을 입력해주세요.");
  if(password.value !== confirmPassword.value) return alert("비밀번호를 확인해주세요.");

  axios.post("/register", {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  })
  .then((res) => {
    if(res.success) {
      location.href = "/login";
    } else {
      if(res.err) return alert(res.err);
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error(new Error("회원가입 중 에러 발생!"));
  });
}