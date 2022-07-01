
// ajax table

$(document).ready( function () {
    $('#example').DataTable({
      'ajax' : 'data.json',
      'columns' : [
          {'data' : 'countryInfo.flag',
          render: function (data,type) {
                return `<img class="imagetableajax" src="${data}">`
          }
          },
          {'data' : 'country'},
          {'data' : 'cases'},
          {'data' : 'oneCasePerPeople'},
          {'data' : 'deaths'},
          {'data' : 'oneDeathPerPeople'}, 
          {'data' : 'recovered'},
          {'data' : 'active'},
          {'data' : 'critical'},
          {'data' : 'tests'},
          

      ]
    });
        

  } );

  // fin ajax table