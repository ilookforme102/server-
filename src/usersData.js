var users = [{
        id: "1",
        username: "admin",
        password: "admin"
    },
    {
        id: "2",
        username: "sang",
        password: "sang"
    }
];
exports.all = function() {
    return users;
}
exports.add = function(user) {
    users.push(user);
}
exports.edit = function (userID, newinfo) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userID)) {
            users.splice(i,1);
            users.push(newinfo);
        }
    }
}
