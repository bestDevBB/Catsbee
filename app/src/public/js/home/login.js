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
    password: password.value,
    // body: JSON.stringify(req)
  })
//   const req = {
//     id: id.value,
//     password: password.value
// };
//   fetch("/login", { // 로그인을 요청하는 fetch, 서버에 전달
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json" // 내가 보내는 데이터의 타입
//     }, // JSON 데이터라고 알려줌
//     body: JSON.stringify(req) // req를 문자열로 바꿔줌
// })
  .then((res) => { console.log(res);
  //   if(res.success) {
  //     location.href = "/";
  //   } else {
  //     if(res.err) return alert(res.err);
  //     alert(res.msg);
  //   };
  // })
  // .catch((err) => {
  //   console.error(new Error("로그인 중 에러 발생!"));
  });
};