const orm = require("../config/orm");

const burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, cond, cb) {
        orm.update("burgers", objColVals, cond, function (res) {
            cb(res);
        });
    },

    delete: function (cond, cb) {
        orm.delete("burgers", cond, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;