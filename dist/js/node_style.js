var commonStyle = [
    {
        selector: 'node',
        style: {
            content: 'data(name)',
            shape: 'rectangle',
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
              opacity: '0.1',
            },
        },

      {
          selector: 'node[NodeType = "tunel"]',
          style: {
              opacity: '0',
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
];
var customStyle = [
  {
      selector: 'node',
      style: {
          label: 'data(label)',
          shape: 'rectangle',
          'text-valign': 'center',
          'text-halign': 'center',
          color: '#ffffff',
        },
    },
  {
      selector: 'node[NodeType = "fila"]',
      style: {
          'background-color': '#cdcb00',
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
            opacity: '0.1',
          },
      },
  {
      selector: 'node[NodeType = "title"]',
      style: {
          width: 100,
          height: 60,
          'text-valign': 'center',
          'text-outline-width': 3,
          'background-color': 'rgba(255,255,255,0)',
          'text-outline-color': '#1a6916',
          color: '#ffffff',
        },
    },
  {
      selector: ':selected',
      style: {
        'border-width': 3,
        'border-color': '#333000',
      },
    },
  {
      selector: '.title-par',
      style: {
        'text-valign': 'center',
        'text-halign': 'center',
        'font-size': '70px',
      },
    },
];