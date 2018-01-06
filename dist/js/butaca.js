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
            cols: 8,
            padding: 20
        },

        style: [
            {
                selector: 'node',
                style: {
                    'content': 'data(id)',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'color': '#ffffff',
                    'background-color': '#3C8DBC'
                }
            },

            {
                selector: 'node[NodeType = "activo"]',
                style: {
                    'background-color': '#008000'
                }
            },

            {
                selector: 'node[NodeType = "reservada"]',
                style: {
                    'background-color': '#ff4500'
                }
            },

            {
                selector: 'node[NodeType = "pendiente"]',
                style: {
                    'background-color': '#ffa500'
                }
            },

            {
                selector: 'node[NodeType = "libre"]',
                style: {
                    'background-color': '#808080'
                }
            },

            {
                selector: 'edge',
                style: {
                    'curve-style': 'bezier',
                    'width': 4,
//                          'target-arrow-shape': 'triangle',
                    'line-color': '#9dbaea',
                    'target-arrow-color': '#9dbaea',
                    'content': 'data(label)'
                }
            }
        ],
        elements: {
            nodes: [
                { data: {id: '01', NodeType: 'activo'} },{ data: {id: '02', NodeType: 'libre'} },{ data: {id: '03', NodeType: 'libre'} },{ data: {id: '04', NodeType: 'activo'} },{ data: {id: '05', NodeType: 'libre'} },{ data: {id: '06', NodeType: 'libre'} },{ data: {id: '07', NodeType: 'libre'} },{ data: {id: '08', NodeType: 'libre'} },
                { data: {id: '09'} },{ data: {id: '10'} },{ data: {id: '11'} },{ data: {id: '12'} },{ data: {id: '13'} },{ data: {id: '14'} },{ data: {id: '15'} },{ data: {id: '16'} },
                { data: {id: '17'} },{ data: {id: '18'} },{ data: {id: '19'} },{ data: {id: '20'} },{ data: {id: '21'} },{ data: {id: '22'} },{ data: {id: '23'} },{ data: {id: '24'} },
                { data: {id: '25'} },{ data: {id: '26'} },{ data: {id: '27'} },{ data: {id: '28'} },{ data: {id: '29'} },{ data: {id: '30'} },{ data: {id: '31'} },{ data: {id: '32'} },
                { data: {id: '33'} },{ data: {id: '34'} },{ data: {id: '35'} },{ data: {id: '36'} },{ data: {id: '37'} },{ data: {id: '38'} },{ data: {id: '39'} },{ data: {id: '40'} },
                { data: {id: '41'} },{ data: {id: '42'} },{ data: {id: '43'} },{ data: {id: '44'} },{ data: {id: '45'} },{ data: {id: '46'} },{ data: {id: '47'} },{ data: {id: '48'} },
                { data: {id: '49'} },{ data: {id: '50'} },{ data: {id: '51'} },{ data: {id: '52'} },{ data: {id: '53'} },{ data: {id: '54'} },{ data: {id: '55'} },{ data: {id: '56'} },
                { data: {id: '57'} },{ data: {id: '58'} },{ data: {id: '59'} },{ data: {id: '60'} },{ data: {id: '61'} },{ data: {id: '62'} },{ data: {id: '63'} },{ data: {id: '64'} }
            ],
            edges: [
                // { data: { source: '01', target: '02'} },
                // { data: { source: '01', target: '03'} },
                // { data: { source: '02', target: '04'} },
                // { data: { source: '03', target: '04'} },
            ]
        },
        ready: function () {
            //
        }
    });

    // ACCION TRAS CLIC SOBRE NODOS O ASIENTOS
    cy.$('#01').on('tap', function (evt) {
        $('#butaca-par-info').show('slow');
    });

    cy.on('tap', 'node', function (evt) {
        var node = evt.target;
        console.log('Prueba de clic ' + node.id() );
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
