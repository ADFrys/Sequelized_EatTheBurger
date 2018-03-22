var db = require("../models")
var path = require("path");

module.exports = function(app) {

app.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(burgerObject) {

    var burgerObject = {
      burgers: burgerObject
    };
    res.render("index", burgerObject);
  });
});

// Post request to add the new burger
app.post("/api/burgers", function(req, res) {

  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  })
  .then(function(dbBurger) {
    res.json(dbBurger);
  });
});

app.put("/api/burgers/:id", function(req, res) {

  db.Burger.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
}).then(function(dbBurger) {
  res.json(dbBurger);
  });
});


};