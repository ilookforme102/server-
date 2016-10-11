var express         = require('express');
var router          = express.Router();
var usrdb    = require('../src/usersData');
var bodyParser      = require('body-parser');
var randomID        = require('random-id')

router.use(bodyParser.json());

var users = usrdb.all();
function authorization(req, res){

    var u = users.find(function(element){
        return (element.username === req.body.username) && (element.password === req.body.password);        
    });

    if(u !== undefined)
    {
        return res.json(u);
    }
    else
    {
        return res.sendStatus(401);
    }
}
function random_ID() {
    var random_id = randomID(6, "a0");
    var i = users.find(function(element){
        return (element.id === random_id);
    });

    if (i == undefined) {
        return random_id;
    }
    else 
    {
        random_ID();
    }
}
function register(req, res) {
    var u = users.find(function(element){
        return (element.username === req.body.username);
    });

    if(u == undefined)
    {
        var mybody = req.body;
        mybody["id"]=random_ID();
        console.log(mybody);
        //mybody.push(random_ID());

        usrdb.add(mybody);
        return res.sendStatus(201);
    }
    else
    {
        return res.sendStatus(400);
    }

}
function editUserInfo(req, res) {
    usrdb.edit(req.params.id, req.body);
    console.log(usrdb.all());
    return res.sendStatus(200);
}

router.route('/user').get(function(req, res) {
    res.json(usrdb.all());
})

router.route('/login').post(authorization);
router.route('/register').post(register);
router.route('/edit/:id').put(editUserInfo);
module.exports = router;
