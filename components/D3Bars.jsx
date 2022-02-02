import React, {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';

const partyProgress = [
  {
    name: "Слуга народу",
    done: 47.3,
    not_done: 30.3,
    in_progress: 32.4
  },
  {
    name: "ЄС",
    done: 97.3,
    not_done: 10.3,
    in_progress: 32.4
  },
  {
    name: "Батьківщина",
    done: 17.3,
    not_done: 50.3,
    in_progress: 42.4
  },

  {
    name: "ОБЗЖ",
    done: 37.3,
    not_done: 40.3,
    in_progress: 32.4
  },
  {
    name: "Голос",
    done: 47.3,
    not_done: 22.3,
    in_progress: 32.4
  }
];
export default function D3Bars() {
  const [data] = useState(partyProgress)
  const svgRef = useRef()

  useEffect(() => {
      // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 40, left: 120},
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(svgRef.current)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width]);

  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .attr('color', '#ccc')
    .attr('opacity', 0.7);
    


  // Y axis
  var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data.map(function(d) { return d.name; }))
    .padding(.1);
    
  svg.append("g")
    .call(d3.axisLeft(y))
    .attr("class", "axisLeft")
    .attr("font-size","14")
    .attr('color', '#ccc')
    .attr('opacity', 0.7);

  //Bars
  svg.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.name); })
    .attr("width", function(d) { return x(d.done); })
    .attr("height", y.bandwidth() / 3)
    .attr("fill", "#009f08")
    .attr('opacity', 0.7)
   

    svg.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.name); })
    .attr("width", function(d) { return x(d.not_done); })
    .attr("height", y.bandwidth() / 3)
    .attr("fill", "#ff4716")
    .attr('opacity', 0.8)
    .attr("transform", "translate(0," + 20 + ")")

    svg.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.name); })
    .attr("width", function(d) { return x(d.in_progress); })
    .attr("height", y.bandwidth() / 3)
    .attr("fill", "#ffd500")
    .attr('opacity', 0.8)
    .attr("transform", "translate(0," + 40 + ")")
    

  }, [data])

  return <div><svg ref={svgRef} style={{height: '400px', width: '100%'}}></svg></div>;
}
