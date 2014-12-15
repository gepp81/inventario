var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  req.models.IO.find({}, ['id'], (
    function (err, result) {
      res.render('io/list', {
        states: result
      });
    }));
});

router.get('/new', function (req, res) {
  res.render('io/new');
});

/** Funcion para cualquier tipo de campo **/
var createOrGet = function (req, value, type, model) {
  if (req.body[type + "_id"].length > 0) {
    value[type + "_id"] = req.body[type + "_id"];
  } else {
    req.models[model].create({
      name: req.body.type
    }, function (err, results) {
      value[type + "_id"] = results.id
    });
  }
}

/** Genera Yacimiento **/
var yacimiento = function (req) {
  var yacimiento = {
    coordenadas: req.body.coordenadas
  };

  createOrGet(req, yacimiento, "acronimo", "Acronym");
  createOrGet(req, yacimiento, "provincia", "State");

  return yacimiento;

}

router.post('/save', function (req, res) {

  var io = {
    yacimiento: yacimiento(req),
    museo: 'mar'
  };


  req.models.IO.create(io, function (err, results) {
    res.redirect('/io');
  });

});

module.exports = router;