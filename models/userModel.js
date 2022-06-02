module.exports = {
    readData: (db, callback) => {
        db.query("SELECT * FROM user", callback)
    },
    getData: (db, id, callback) => {
        db.query("SELECT * FROM user WHERE id_user = " + id, callback)
    },
    createData: (db, data, callback) => {
        db.query("INSERT INTO user SET ?", data, callback)
    },
    updateData: (db, id, data, callback) => {
        db.query("UPDATE user SET ? WHERE id_user = " + id, data, callback)
    },
    deleteData: (db, id, callback) => {
        db.query("DELETE FROM user WHERE id_user = " + id, callback)
    }
}