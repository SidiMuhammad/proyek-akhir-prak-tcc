module.exports = {
    readData: (db, callback) => {
        db.query("SELECT * FROM post", callback)
    },
    getData: (db, id, callback) => {
        db.query("SELECT * FROM post WHERE id_post = " + id, callback)
    },
    createData: (db, data, callback) => {
        db.query("INSERT INTO post SET ?", data, callback)
    },
    updateData: (db, id, data, callback) => {
        db.query("UPDATE post SET ? WHERE id_post = " + id, data, callback)
    },
    deleteData: (db, id, callback) => {
        db.query("DELETE FROM post WHERE id_post = " + id, callback)
    }
}