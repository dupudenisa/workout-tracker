const db = require("../models")


module.exports = function (app) {
    app.post("/api/workouts", function (req, res) {
        db.Exercise.create(req.body)
            .then(function (Exercise) {
                res.json(Exercise)
            })
            .catch(function (err) {
                console.log(err.message);
            });
    })

    app.get("/api/workouts/", function (req, res) {
        db.Exercise.find(req.body)
            .then(function (Exercise) {
                res.json(Exercise);
            })
            .catch(function (err) {
                console.log(err.message)

            })
    });
     app.put ("/api/workouts/:id", function (req,res){
        db.Exercise.update(req.body)

        .then(function (Exercise){
            res.json(Exercise);
        })
        .catch(function (err) {
            console.log(err.message)

        })
    })
}

//    app.put ("/api/workouts/:id", function (req,res){
//    const id = req.params.id;
//    const data = req.body  

//    res.json();

// })

