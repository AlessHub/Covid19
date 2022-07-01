
// ajax table

$(document).ready( function () {
    $('#example').DataTable({
      'ajax' : 'data.json',
      'columns' : [
          {'data' : 'country'},
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