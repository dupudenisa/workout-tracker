const db = require("../models")


module.exports = function (app) {
    app.post("/api/workouts", function (req, res) {
        db.Exercise.create({})
            .then(function (Exercise) {
                res.json(Exercise)
            })
            .catch(function (err) {
                console.log(err.message);
            });
    })

      app.get("/api/workouts/", function (req, res) {
        db.Exercise.find({})
            .then(function (Exercise) {
                res.json(Exercise);
            })
            
   });
//      app.put ("/api/workouts/:id", function (req,res){
//         db.Exercise.update(req.body)

//         .then(function (Exercise){
//             res.json(Exercise);
//         })
//         .catch(function (err) {
//             console.log(err.message)

//         })
//      })
// }


}


