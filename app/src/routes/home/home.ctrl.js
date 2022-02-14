"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index.ejs"); // 컨트롤러
        // 앱 세팅에서 ./views로 지정해줘서 그 하위폴더인 Home부터
    },
    
    login: (req, res) => {
        res.render("home/login.ejs");
    },

    register: (req, res) => {
        res.render("home/register.ejs");
    }
};

const users = {
    id: ["aaa", "bbb", "ccc"],
    password: ["1234", "1212", "3434"]
};

const process = {
    login: (req, res) => {
        // console.log(req.body); // { id: 'd', password: 'd' }
        if(users.id.includes(id)) { // includes : id가 존재하는지 여부 boolean
            const idx = users.id.indexOf(id); // 해당 아이디가 몇 번째에 있는지
            // id가 존재한다면 그 id가 몇 번째에 있는지!
            if(users.password[idx] === password) { // password의 idx(몇번째)와 프론트엔드에서 전달받은 password가 같다면

            }
        }
    },

    register: (req, res) => {
        console.log(req.body);
    }
};

module.exports = {
    output,
    process
}