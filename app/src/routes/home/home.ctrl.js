"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index.ejs"); // 컨트롤러
        // 앱 세팅에서 ./views로 지정해줘서 그 하위폴더인 Home부터
    },
    
    login: (req, res) => {
        res.render("home/login.ejs")
    }
}

module.exports = {
    output
}