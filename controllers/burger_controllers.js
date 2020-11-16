const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId })
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const cond = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    },
        cond,
        function (result) {
            if (result.changedRow === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        });
});

router.delete("/api/burgers/:id", function (req, res) {
    const cond = "id = " + req.params.id;

    burger.delete(cond, function (result) {
        if (result.affectedRow === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;