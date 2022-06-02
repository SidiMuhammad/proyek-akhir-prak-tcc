const User = require('../models/userModel')

module.exports = {
    readUserPage: (req, res) => {
        res.render('user/index')
    },
    createUserPage: (req, res) => {
        res.render('user/create-user')
    },
    updateUserPage: (req, res) => {
        var id = req.params.id
        res.render('user/update-user', { id_user: id })
    },
    readUser: (req, res) => {
        User.readData(req.db1, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
                console.log(result)
            }
        })
    },
    createUser: (req, res) => {
        var email = req.body.email
        var user_name = req.body.user_name
        var password = req.body.password
        User.createData(req.db1, { email, user_name, password }, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
                console.log(result)
            }
        })
    },
    getUser: (req, res) => {
        var id = req.body.id_user
        User.getData(req.db1, id, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
                console.log(result)
            }
        })
    },
    updateUser: (req, res) => {
        var id = req.body.id_user
        var email = req.body.email
        var user_name = req.body.user_name
        var password = req.body.password
        User.updateData(req.db1, id, { email, user_name, password }, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
                console.log(result)
            }
        })
    },
    deleteUser: (req, res) => {
        var id = req.body.id_user
        User.deleteData(req.db1, id, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
    }
}