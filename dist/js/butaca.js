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

        boxSelectionEnabled: false,
        autounselectify: true,
        selectionType: 'single',
        autoungrabify: true, //avoid drag and drop

        layout: {
            name: 'grid',
            cols: 44,
            padding: 20,
          },

        style: [
            {
                selector: 'node',
                style: {
                    content: 'data(name)',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    color: '#ffffff',
                    'background-color': '#3C8DBC',
                  },
              },

            {
                selector: 'node[NodeType = "fila"]',
                style: {
                    'background-color': '#b4b62a',
                  },
              },

            {
                selector: 'node[NodeType = "activo"]',
                style: {
                    'background-color': '#046c04',
                  },
              },

            {
                selector: 'node[NodeType = "reservada"]',
                style: {
                    'background-color': '#ff4500',
                  },
              },

            {
                selector: 'node[NodeType = "pendiente"]',
                style: {
                    'background-color': '#ffa500',
                  },
              },

            {
                selector: 'node[NodeType = "libre"]',
                style: {
                    'background-color': '#808080',
                  },
              },

              {
                  selector: 'node[NodeType = "pasillo"]',
                  style: {
                      'background-color': '#000000',
                    },
                },

              {
                  selector: 'node[NodeType = "tunel"]',
                  style: {
                      'background-color': '#2b7baf',
                    },
                },
            {
                selector: 'edge',
                style: {
                    'curve-style': 'bezier',
                    'width ': 4,
                    'line-color': '#9dbaea',
                    'target-arrow-color': '#9dbaea',
                    content: 'data(label)',
                  },
              },
        ],
        elements: {
            nodes: nodos,
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
        $('#butaca-par-nro').text('Nro: ' + node.id());
        $('#butaca-par-info').show('slow');
      });

  });

function cerrar_par() {
  $('#butaca-par-info').hide('slow');
}

function reset_par() {
  cy.reset();
}
