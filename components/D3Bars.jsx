import React, {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';

const partyProgress = [
  {
    name: "Слуга народу",
    done: 17,
    not_done: 20,
    in_progress: 21
  },
  {
    name: "ЄС",
    done: 26,
    not_done: 17,
    in_progress: 31
  },
  {
    name: "Батьківщина",
    done: 30,
    not_done: 20,
    in_progress: 10
  },

  {
    name: "ОБЗЖ",
    done: 27,
    not_done: 30,
    in_progress: 20
  },
  {
    name: "Голос",
    done: 35,
    not_done: 20,
    in_progress: 10
  }
];
export default function D3Bars() {
  const [data] = useState(partyProgress)
  const svgRef = useRef()
  useEffect(() => {

  const widthCal = window.innerWidth > 590 ? 600 : 360;
 
  const margin = {top: 20, right: 30, bottom: 40, left: 120},
    width = widthCal - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select(svgRef.current)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append('g')
    
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

   const bar =  svg.selectAll("g")
          .data(data)
          .enter()
          .append("g");

  // Add X axis
  const x = d3.scaleLinear()
    .domain([0, 80])
    .range([ 0, width]);

  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .attr('color', '#ccc')
    .attr('opacity', 0.7);
    


  // Y axis
  const y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data.map(function(d) { return d.name; }))
    .padding(.1);
    
  svg.append("g")
    .call(d3.axisLeft(y))
    .attr("class", "axisLeft")
    .attr("font-size","14")
    .attr('color', '#ccc');
   
   
   
  //Bars
 bar
    .append("rect")
    .attr("x", 0 )
    .attr("y", d => y(d.name))
    .attr("width", function(d) { return x(d.done); })
    .attr("height", y.bandwidth() )
    .attr("fill", "#009f08")
    .attr('opacity', 0.7);

  bar
    .append('text')
      .text(d => d.done)
      .attr("dy", ".35em") //vertical align middle
      .attr('transform', 'translate(0, 30)')
      .attr('x', d => x(d.done) - 24)
      .attr("y", d => y(d.name))
      .attr('fill', '#ccc')
      .attr('font-size', '16px');

  
  bar
    .append("rect")
    .attr("x", function (d) {
      return x(d.done);
    } )
    .attr("y", function(d) { return y(d.name); })
    .attr("width", function(d) { return x(d.not_done); })
    .attr("height", y.bandwidth() )
    .attr("fill", "#ff4716")
    .attr('opacity', 0.7);

   bar
    .append('text')
      .text(d => d.not_done)
      .attr("dy", ".35em") //vertical align middle
      .attr('transform', 'translate(0, 30)')
      .attr('x', d => x(d.done) + x(d.not_done) - 24)
      .attr("y", d => y(d.name))
      .attr('fill', '#ccc')
      .attr('font-size', '16px');

  bar
    .append("rect")
    .attr("x", function (d) {
      return x(d.done) + x(d.not_done);
    })
    .attr("y", function(d) { return y(d.name); })
    .attr("width", function(d) { return x(d.in_progress); })
    .attr("height", y.bandwidth() )
    .attr("fill", "#ffd500")
    .attr('opacity', 0.7);
  bar
    .append('text')
      .text(d => d.in_progress)
      .attr("dy", ".35em") //vertical align middle
      .attr('transform', 'translate(0, 30)')
      .attr('x', d => x(d.done) + x(d.not_done) + x(d.in_progress) - 24)
      .attr("y", d => y(d.name))
      .attr('fill', '#31201c')
      .attr('font-size', '16px');
  }, [data])

  return <>
  <ul style={{display: 'flex'}}>
            <li style={ {color: '#009f08'}}>Виконано</li>
            <li style={ {color: '#ff4716', marginLeft: '40px'}}>Не виконано</li>
            <li style={ {color: '#ffd500', marginLeft: '40px'}}>В процесі</li>
            
          </ul>
  <div ref={svgRef}></div></>;
}
