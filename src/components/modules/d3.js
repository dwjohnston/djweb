import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
let  d3Chart = {};

d3Chart.create = function(el, props, state) {
  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

  svg.append('g')
      .attr('class', 'd3-points');

  this.update(el, state);
};

d3Chart.update = function(el, state) {
  // Re-compute the scales, and render the data points
  var scales = this._scales(el, state.domain);
  this._drawPoints(el, scales, state.data);
};

d3Chart.destroy = function(el) {
  // Any clean-up would go here
  // in this example there is nothing to do
};
d3Chart._scales = function(el, domain) {
  if (!domain) {
    return null;
  }

  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = d3.scaleLinear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scaleLinear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scaleLinear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};

d3Chart._drawPoints = function(el, scales, data) {
  var g = d3.select(el).selectAll('.d3-points');

  var point = g.selectAll('.d3-point')
    .data(data, function(d) { return d.id; });

  // ENTER
  point.enter().append('circle')
      .attr('class', 'd3-point');

  // ENTER & UPDATE
  point.attr('cx', function(d) { return scales.x(d.x); })
      .attr('cy', function(d) { return scales.y(d.y); })
      .attr('r', function(d) { return scales.z(d.z); });

  // EXIT
  point.exit()
      .remove();
};


class D3Module extends React.Component {

constructor() {
  super();
  this.state = {};
  this.state.data = [
     {id: '5fbmzmtc', x: 7, y: 41, z: 6},
     {id: 's4f8phwm', x: 11, y: 45, z: 9}
  ];

  this.state.domain =  {x: [0, 30], y: [0, 100]};
}


  componentDidMount() {
  var el = ReactDOM.findDOMNode(this);
  d3Chart.create(el, {
    width: '100%',
    height: '300px'
  }, this.getChartState());

}

componentDidUpdate() {
  var el = ReactDOM.findDOMNode(this);
  d3Chart.update(el, this.getChartState());
}

getChartState() {
  return {
    data: [
       {id: '5fbmzmtc', x: 7, y: 41, z: 6},
       {id: 's4f8phwm', x: 11, y: 45, z: 9}
    ],
    domain: {x: [0, 30], y: [0, 100]}
  };
}

componentWillUnmount() {
  var el = ReactDOM.findDOMNode(this);
  d3Chart.destroy(el);
}


  render() {
    return <div className ="module" id = "d3">
      <div className ="header"> D3</div>

      <div className ="body">
      d3
      </div>
    </div>;
  }
}

export default D3Module;
