/**
 * Created by sergiow on 03-01-18.
 */
$(document).ready(function () {
    // CAPTURA DATOS DEL SERVIDOR
    $('#mis-redes').removeClass('active');
    $('#principal').addClass('active');

    $('.select2').select2();

    // DIBUJA LOS NODOS O ASIENTOS
    var cy = window.cy = cytoscape({
        container: document.getElementById('butacas-pares'),

        minZoom: 3e-1,
        maxZoom: 0.1e1,
        boxSelectionEnabled: false,
        autounselectify: false,
        selectionType: 'single',
        autoungrabify: true, //avoid drag and drop

        layout: {
            name: 'preset',
            width: 6000,
            fit: true,
          },

        style: customStyle,
        elements: {
            nodes: nodoc,
            edges: [],
          },
        ready: function () {
            //
          },
      });

    // ACCION TRAS CLIC SOBRE NODOS O ASIENTOS
    cy.$('#01').on('tap', function (evt) {
        $('#butaca-par-info').show('slow');
      });

    cy.on('tap', 'node', function (evt) {
        var node = evt.target;
        console.log('Prueba de clic ' + node.id());
        var type = node.data().NodeType;
        if (type != 'fila' && type != 'pasillo' && type != 'title' && type != 'entrada') {
          $('#butaca-par-nro').text('Nro: ' + node.id());
          $('#butaca-par-info').show('slow');
        }
      });

  });

function cerrar_par() {
  $('#butaca-par-info').hide('slow');
}

function reset_par() {
  cy.reset();
  cy.fit();
}
