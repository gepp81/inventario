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

router.get('/delete/:id', function (req, res) {
  /*req.models.IO.get(req.params.id, function (err, io) {
    req.models['Deposit'].find({
      id: io.yacimiento_id
    }).remove(function (err) {
      res.render('io/list');
    });

    /*io.remove(function (err) {
      res.render('io/list');
    });*
  });*/

  res.redirect("/");
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
  createOrGet(req, yacimiento, "sitio", "Site");
  createOrGet(req, yacimiento, "localidad", "Location");
  createOrGet(req, yacimiento, "provincia", "State");
  createOrGet(req, yacimiento, "pais", "Country");

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