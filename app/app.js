"use strict";

// 모듈
const express = require("express"),
  bodyParser = require("body-parser"),
  dotenv = require("dotenv");

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home/index.js");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어
app.use(express.static(`${__dirname}/src/public`)) // 정적 경로 추가, __ dirname : app.js의 위치
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(home); // router

module.exports = app;