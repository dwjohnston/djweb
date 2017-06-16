import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
require('styles/module/d3.scss');
let  d3Chart = {};

d3Chart.create = function(el, props, state) {
  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height)
      .attr('transform', "scale(1, -1)"); //Make y=0 the bottom of the svg

  svg.append('g')
      .attr('class', 'd3-points');

console.log(state);
  this.update(el, state);
};

d3Chart.update = function(el, state) {

  console.log("d3 update");
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

  this.width = el.offsetWidth;
  this.height = el.offsetHeight;




  var x = d3.scaleLinear()
    .range([0, this.width])
    .domain(domain.x);

  var y = d3.scaleLinear()
    .range([0, this.height ])
    .domain(domain.y);

  var z = d3.scaleLinear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};




d3Chart._drawPoints = function(el, scales, data) {
  var g = d3.select(el).selectAll('.d3-points');
  let barWidth = scales.x(1);
       console.log(data);
  var point = g.selectAll('.d3-point')
    .data(data)           .attr('x', function(d, i) {
                     console.log(d);
                     return (i * 2 + 1) * barWidth;
                   })
                   .attr('y', 0)
                   .attr('width', barWidth)
                   .attr("value", function(d) {
                     return d.value;
                   })
                   .attr('height', function(d) {
                     console.log("height");
                     console.log(d);
                     console.log(scales.y(d.value));
                     return  scales.y(d.value);});




    point.enter().append('rect')
           .attr('class', function(d) {
             console.log("append rect");
             return 'd3-point';
           })
           .attr('x', function(d, i) {
                 console.log(d);
                 return i * barWidth * 2;
               })
               .attr('y', 0)
               .attr('width', barWidth)
               .attr("value", function(d) {
                 return d.value;
               })
               .attr('height', function(d) {
                 console.log("height");
                 console.log(d);
                 console.log(scales.y(d.value));
                 return  scales.y(d.value);});




console.log(this);
console.log(scales);
console.log(point);

  // EXIT
  point.exit()
      .remove();
};


class D3Module extends React.Component {

constructor() {
  super();

console.log("con strauct");

console.log("foo");
  this.state = {};
  this.state.data = [
     {id: '5fbmzmt c', value: 25},
     {id: 's4f8phwm', value: 50},
     {id: "foo", value: 20},
          {id: "foo", value: 20},
               {id: "foo", value: 20},
                    {id: "foo", value: 20},
  ];

}


  componentDidMount() {

    console.log("did  mount");
  var el = ReactDOM.findDOMNode(this);
  d3Chart.create(this.svgEl, {
    width: '100%',
    height: '300px'
  }, this.getChartState());

}

componentDidUpdate() {

console.log("component did up date");

  var el = ReactDOM.findDOMNode(this);
  console.log(el);

  d3Chart.update(this.svgEl, this.getChartState());
}

getChartState() {

  console.log(this.state);

  let maxY = Math.max.apply(Math, this.state.data.map(function(o){return o.value})) * 1.1;

  let domain = {};

  domain.x = [0, this.state.data.length *2 + 1];
  domain.y = [0,maxY];

  return {
    data: this.state.data,
    domain: domain
  };
}

componentWillUnmount() {

  console.log("will unmount");

  var el = ReactDOM.findDOMNode(this);
  console.log(el);
  d3Chart.destroy(this.svgEl);
}

handleTextChange(v,i) {
console.log("handle text change");
  console.log(v);
  console.log(i);

  console.log(v.target.value);

console.log(this);
  let newState = this.state;

  newState.data[i].value = v.target.value;
  this.setState(newState)

  d3Chart.update(this.svgEl, this.getChartState());


}

  render() {
    console.log("render");
    console.log(this);

    this.textInputs = this.state.data.map((v,i) => {
      console.log(v);
        return <div className = "input-pair"><input
          type = "text"
          key = {"textInput" + i}

          onChange = {(v) => {
            this.handleTextChange(v,i);
          }}/>
          <span class ="error"/>
          </div>

    });

    return <div className ="module" id = "d3">
      <div className ="header"> D3</div>

      <div className ="body">
        <div className = "svg-container" ref={(input) => {this.svgEl = input}}/>
        <div className ="controls">
          {this.textInputs}
        </div>


      </div>
    </div>;
  }
}

export default D3Module;
