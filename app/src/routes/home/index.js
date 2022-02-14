"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl.js");

// 라우터
// router.get("/", (req, res) => {
//     res.render("home/index.ejs"); // 컨트롤러
//     // 앱 세팅에서 ./views로 지정해줘서 그 하위폴더인 Home부터
// });
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;