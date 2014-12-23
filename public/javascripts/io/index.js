$(document).ready(function () {

  var ajax = function (input, dataCity) {
    input.autocomplete({
      source: function (request, response) {
        $.ajax({
          url: "/dependency/getModel",
          dataType: "json",
          method: 'post',
          data: dataCity,
          success: function (data) {
            var cities = [];
            var city;
            $.each(data.results, function (index, value) {
              city = [];
              city['value'] = value['id'];
              city['label'] = value['name'];
              cities.push(city);
            });
            response(cities);
          }
        });
      },
      minLength: dataCity.minChar,
      select: function (event, ui) {
        input.val(ui.item.label);
        return false;
      },
      focus: function (event, ui) {
        return false;
      },
      change: function (event, ui) {
        var idHidden = "#" + input.attr("name") + "_id";
        if (ui.item == null) {
          $(idHidden).removeAttr('value');
        } else {
          $(idHidden).val(ui.item.value);
        }
      }
    });
  };

  $('#acronimo').on('keyup', function () {
    var dataCity = {
      'value': $(this).val(),
      'model': 'Acronym',
      'minChar': 0
    };
    ajax($(this), dataCity);
  });

  $('#provincia').on('keyup', function () {
    var dataCity = {
      'value': $(this).val(),
      'model': 'State',
      'minChar': 3
    };
    ajax($(this), dataCity);
  });


  $('#localidad').on('keyup', function () {
    var dataCity = {
      'value': $(this).val(),
      'model': 'Location',
      'minChar': 3
    };
    ajax($(this), dataCity);
  });

  $('#pais').on('keyup', function () {
    var dataCity = {
      'value': $(this).val(),
      'model': 'Country',
      'minChar': 3
    };
    ajax($(this), dataCity);
  });

  $('#sitio').on('keyup', function () {
    var dataCity = {
      'value': $(this).val(),
      'model': 'Site',
      'minChar': 3
    };
    ajax($(this), dataCity);
  });

});