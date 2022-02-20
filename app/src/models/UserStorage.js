"use strict";

class UserStorage {
    static #users = {
        id: ["aaa", "bbb", "ccc"],
        password: ["1234", "1212", "3434"],
        name: ["이보람", "뭉이", "조이"]
    }

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field, index) => { // 누적, 현재, 인덱스
            // console.log(newUsers, field, index);
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        // console.log(newUsers);
        return newUsers;
    }
};

module.exports = UserStorage;