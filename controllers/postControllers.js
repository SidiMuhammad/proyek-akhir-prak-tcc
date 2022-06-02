const Post = require('../models/postModel')

module.exports = {
    readPostPage: (req, res) => {
        res.render('post/index')
    },
    createPostPage: (req, res) => {
        res.render('post/create-post')
    },
    updatePostPage: (req, res) => {
        var id = req.params.id
        res.render('post/update-post', { id_post: id })
    },
    readPost: (req, res) => {
        Post.readData(req.db2, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
                console.log(result)
            }
        })
    },
    createPost: (req, res) => {
        var title = req.body.title
        var content = req.body.content
        Post.createData(req.db2, { title, content }, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
                console.log(result)
            }
        })
    },
    getPost: (req, res) => {
        var id = req.body.id_post
        Post.getData(req.db2, id, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
                console.log(result)
            }
        })
    },
    updatePost: (req, res) => {
        var id = req.body.id_post
        var title = req.body.title
        var content = req.body.content
        Post.updateData(req.db2, id, { title, content }, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
                console.log(result)
            }
        })
    },
    deletePost: (req, res) => {
        var id = req.body.id_post
        Post.deleteData(req.db2, id, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
    }
}