"use strict";

const User = require('../../models/User.js');
const UserStorage = require('../../models/UserStorage.js');

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

const process = {
    login: (req, res) => {
        // console.log(req.body); // { id: 'd', password: 'd' }
        const params = req.body;
        const id = params.id,
            password = params.password;
        console.log(params.id);
        
        const users = UserStorage.getUsers("id", "password");
        // console.log(UserStorage.getUsers("id", "password", "name"));

        // console.log(id, password);

        const response = {};

        if(users.id.includes(id)) { // includes : id가 존재하는지 여부 boolean, 프론트엔드에서 전달받은 id가 user에 있으면
            const idx = users.id.indexOf(id); // 해당 아이디가 몇 번째에 있는지
            // id가 존재한다면 그 id가 몇 번째에 있는지!

            if(users.password[idx] === password) { // id와 같은 위치에 있는 password
            // password의 idx(몇번째)와 프론트엔드에서 전달받은 password가 같다면
                response.success = true;
            // 로그인이 성공하면 success true라는 오브젝트를 json으로 만들어서 response, 프론트엔드로 전달
                return res.json(response); // 프론트엔드로 성공여부 응답
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하였습니다.";
        return res.json(response);
    },

    register: (req, res) => {
        console.log(req.body);
    }
};

module.exports = {
    output,
    process
}