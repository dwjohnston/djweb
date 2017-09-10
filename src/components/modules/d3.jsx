import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import Module from 'components/Module';


let  d3Chart = {};

d3Chart.create = function(el, props, state) {
  var svg = d3.select(el).append('svg')
  .attr('class', 'd3')
  .attr('width', props.width)
  .attr('height', props.height)
  .attr('transform', "scale(1, -1)"); //Make y=0 the bottom of the svg

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
  var point = g.selectAll('.d3-point')
  .data(data)           .attr('x', function(d, i) {
    return (i * 2 + 1) * barWidth;
  })
  .attr('y', 0)
  .attr('width', barWidth)
  .attr("value", function(d) {
    return d.value;
  })
  .attr('height', function(d) {

    return  scales.y(d.value);});




    point.enter().append('rect')
    .attr('class', function(d) {
      return 'd3-point';
    })
    .attr('x', function(d, i) {
      return i * barWidth * 2;
    })
    .attr('y', 0)
    .attr('width', barWidth)
    .attr("value", function(d) {
      return d.value;
    })
    .attr('height', function(d) {

      return  scales.y(d.value);});


      // EXIT
      point.exit()
      .remove();
    };


    class D3Module extends React.Component {

      constructor() {
        super();

        let getRandomInt = ()  =>  {

          let min = 0;
          let max = 1000;
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }

        this.state = {};
        this.state.data = [
          {id: "1", value: getRandomInt(), isValid: true},
          {id: "2", value: getRandomInt(), isValid: true},
          {id: "2", value: getRandomInt(), isValid: true},
          {id: "3", value: getRandomInt(), isValid: true},
          {id: "4", value: getRandomInt(), isValid: true},
          {id: "5", value: getRandomInt(), isValid: true},
          {id: "6", value: getRandomInt(), isValid: true},
        ];

      }


      componentDidMount() {

        var el = ReactDOM.findDOMNode(this);
        d3Chart.create(this.svgEl, {
          width: '100%',
          height: '300px'
        }, this.getChartState());

        d3Chart.update(this.svgEl, this.getChartState());


      }

      componentDidUpdate() {


        var el = ReactDOM.findDOMNode(this);

        d3Chart.update(this.svgEl, this.getChartState());
      }

      getChartState() {


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
        var el = ReactDOM.findDOMNode(this);
        d3Chart.destroy(this.svgEl);
      }

      handleTextChange(v,i) {

        let newState = this.state;

        let value = parseFloat(v.target.value);
        if (isNaN(value) || value <0){

          newState.data[i].value = 0;
          newState.data[i].isValid = false;

        }else {
          newState.data[i].value = value;
          newState.data[i].isValid = true;
        }

        this.setState(newState)

        d3Chart.update(this.svgEl, this.getChartState());


      }

      render() {


        this.textInputs = this.state.data.map((v,i) => {
          return <div className = "input-pair"><input
            type = "text"
            key = {"textInput" + i}
            value = {this.state.data[i].value}
            onChange = {(v) => {
              this.handleTextChange(v,i);
            }}/>
            {/*<div className =  {"error " +  (v.isValid ? "valid" : "invalid")}>
            <span className ="glyphicon glyphicon-remove"></span>
            </div>*/}

          </div>

        });

        return <Module title = "d3" className ="d3" id = "d3">
          <div className = "svg-container" ref={(input) => {this.svgEl = input}}></div>
          <div className ="controls">
            {this.textInputs}
          </div>
        </Module> ;
      }
    }

    export default D3Module;
