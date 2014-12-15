module.exports = function (db, models) {

  models.State = db.define("provincia", {
    id: 'integer',
    name: String
  });
  models.Acronym = db.define("acronimo", {
    id: 'integer',
    name: String
  });
  models.Person = db.define("arqueologo", {
    id: 'integer',
    name: String
  });
  models.Complete = db.define("completitud", {
    id: 'integer',
    name: String
  });
  models.Age = db.define("edad", {
    id: 'integer',
    name: String
  });
  models.Sex = db.define("sexo", {
    id: 'integer',
    name: String
  });
  models.Preservation = db.define("preservacion", {
    id: 'integer',
    name: String
  });
  models.Bio = db.define('bio', {
    id: 'integer',
    arqueologo: 'boolean',
    genetica: 'boolean',
    isotopos: 'boolean',
    morfologia: 'boolean',
    paleopatologia: 'boolean',
    registro: String
  });
  models.Bio.hasOne("completitud", models.Complete);
  models.Bio.hasOne("edad", models.Age);
  models.Bio.hasOne("preservacion", models.Preservation);
  models.Bio.hasOne("sexo", models.Sex);

  models.Ente = db.define("ente", {
    id: 'integer',
    name: String
  });

  models.Burial = db.define("enterramiento", {
    id: 'integer',
    name: String
  });

  models.Sepulture = db.define("sepultura", {
    id: 'integer',
    name: String
  });

  models.Position = db.define("posicion", {
    id: 'integer',
    name: String
  });

  models.Excavation = db.define("excavacion", {
    id: 'integer',
    periodo: String
  });
  models.Excavation.hasOne("arqueologo", models.Person);
  models.Excavation.hasOne("ente", models.Ente);
  models.Excavation.hasOne("enterramiento", models.Burial);
  models.Excavation.hasOne("posicion", models.Position);
  models.Excavation.hasOne("sepultura", models.Sepulture);

  models.Rest = db.define("resto", {
    id: 'integer',
    name: String
  });

  models.Form = db.define("forma", {
    id: 'integer',
    name: String
  });

  models.Incoming = db.define("ingreso", {
    id: 'integer',
    ingreso: Date,
    egreso: Date
  });
  models.Incoming.hasOne("almaceno", models.Person);
  models.Incoming.hasOne("digitalizo", models.Person);
  models.Incoming.hasOne("registro", models.Person);
  models.Incoming.hasOne("forma", models.Form);
  models.Incoming.hasOne("resto", models.Rest);

  models.Location = db.define("localidad", {
    id: 'integer',
    name: String
  });

  models.Country = db.define("pais", {
    id: 'integer',
    name: String
  });

  models.Site = db.define("sitio", {
    id: 'integer',
    name: String
  });

  models.Ubication = db.define("ubicacion", {
    id: 'integer',
    caja: String,
    estanteria: String,
    informes: 'boolean',
    plano: String,
    sala: String
  });

  models.Deposit = db.define("yacimiento", {
    id: 'integer',
    coordenadas: String
  });
  models.Deposit.hasOne("acronimo", models.Acronym);
  models.Deposit.hasOne("localidad", models.Location);
  models.Deposit.hasOne("pais", models.Country);
  models.Deposit.hasOne("provincia", models.State);
  models.Deposit.hasOne("sitio", models.Site);

  models.IO = db.define('io', {
    id: 'integer',
    bibliografia: String,
    museo: String
  });
  models.IO.hasOne("bio", models.Bio);
  models.IO.hasOne("excavacion", models.Excavation);
  models.IO.hasOne("ingreso", models.Incoming);
  models.IO.hasOne("ubicacion", models.Ubication);
  models.IO.hasOne("yacimiento", models.Deposit);


  /*  models.Asocied = db.define("asociado", {
    id: 'integer',
    name: String
  });
  models.Conservation = db.define("conservacion", {
    id: 'integer',
    name: String
  });
  models.Dating = db.define("datacion", {
    id: 'integer',
    name: String
  });




  models.Integrity = db.define("integridad", {
    id: 'integer',
    name: String
  });



  models.OtherRest = db.define("otroresto", {
    id: 'integer',
    name: String
  });



  models.Accuracy = db.define("precision", {
    id: 'integer',
    name: String
  });




  models.IO = db.define("io", {
    id: 'integer',
    ficharesumen: String,
    sitio: String,
    nroregistro: String,
    arqueologo: String,
    provincia: String
  });*/
}