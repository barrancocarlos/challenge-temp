var cy = cytoscape({
  container: document.getElementById('cy'),
  elements: [ // nodes
    {
      data: {
        id: 'a',
        count: 50
      }
    },
    {
      data: {
        id: 'b',
        count: 30
      }
    },
    {
      data: {
        id: 'c'
      }
    },
    {
      data: {
        id: 'd'
      }
    },
    {
      data: {
        id: 'e'
      }
    },
    {
      data: {
        id: 'f'
      }
    },
    // edges
    {
      data: {
        id: 'ab',
        source: 'a',
        target: 'b'
      }
    },
    {
      data: {
        id: 'ac',
        source: 'a',
        target: 'c'
      }
    },
    {
      data: {
        id: 'be',
        source: 'b',
        target: 'e'
      }
    },
    {
      data: {
        id: 'bf',
        source: 'b',
        target: 'f'
      }
    },
    {
      data: {
        id: 'fd',
        source: 'f',
        target: 'd'
      }
    }
  ],
  style: [{
    selector: 'node',
    style: {
      label: 'data(id)',
      color: '#343232',
      'background-color': '#0077b6',
      width: 'data(count)',
      height: 'data(count)'

    },
  }],
  layout: {
    name: "cose"
  }
});
