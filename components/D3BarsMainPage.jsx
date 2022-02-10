import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import * as d3 from 'd3';

export default function D3Bars() {
  const partyProgress = [
    {
      name: 'Слуга народу',
      done: 36,
      not_done: 13,
      in_progress: 21,
      all: 60,
    }
  ];
  const [data] = useState(partyProgress);
  const svgRef = useRef();
  const router = useRouter()
  useEffect(() => {
    const widthCal = window.innerWidth > 590 ? 600 : 360;

    const margin = { top: 0, right: 30, bottom: 40, left: 40 },
      width = widthCal - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    const barHeight = 56;
    // append the svg object to the body of the page
    const svg = d3
      .select(svgRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Add X axis
    const x = d3.scaleLinear().domain([0, 74]).range([0, width]);

    svg
      .append('g')
      .attr('transform', 'translate(0,130)')
      .call(d3.axisBottom(x))
      .attr('color', '#ccc')
      .attr('opacity', 0.7);

    // Y axis
    const y = d3
      .scaleBand()
      .range([0, height])
      // .domain(data.map(function(d) { return d.name; }))
      .padding(0.1);

    

    //Bars SLUGA
    // bar — done
    svg
      .selectAll('myRect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', x(0))
      .attr('y', function (d) {
        return y(d.name);
      })
      .attr('width', function (d) {
        return x(d.done);
      })
      .attr('height', barHeight )
      .attr('fill', '#009f08')
      .attr('opacity', 0.7)
      .text(function (d) {
        return d.done;
      });
  // text — done
    svg
      .append('text')
      .data(data)
      .text(function (d) {
        return d.done;
      })
      .attr('transform', 'translate(0, 34)')
      .attr('x', d => x(d.done) - 24)
      .attr('fill', '#ccc')
      .attr('font-size', '16px');


// bar — not_done
    svg
      .selectAll('myRect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', function (d) {
        return x(d.done);
      })
      .attr('y', function (d) {
        return y(d.name);
      })
      .attr('width', function (d) {
        return x(d.not_done);
      })
      .attr('height', barHeight )
      .attr('fill', '#ff4716')
      .attr('opacity', 0.7);
      // .attr('transform', 'translate(0,' + 20 + ')');

// text — not_done
    svg
      .append('text')
      .data(data)
      .text(function (d) {
        return d.not_done;
      })
      .attr('transform', 'translate(0, 34)')
      .attr('x', d => x(d.done) + x(d.not_done) - 24)
      .attr('fill', '#ccc')
      .attr('font-size', '16px');


// bar — in_progress
    svg
      .selectAll('myRect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', function (d) {
        return x(d.done) + x(d.not_done);
      })
      .attr('y', function (d) {
        return y(d.name);
      })
      .attr('width', function (d) {
        return x(d.in_progress);
      })
      .attr('height', barHeight)
      .attr('fill', '#ddb800')
      .attr('opacity', 1);


// text — in_progress
    svg
      .append('text')
      .data(data)
      .text(function (d) {
        return d.in_progress;
      })
      .attr('transform', 'translate(0, 34)')
      .attr('x', d => x(d.done) + x(d.not_done) + x(d.in_progress) - 24)
      .attr('fill', '#30201C')
      .attr('font-size', '16px')
      .attr('text-anchor', 'middle');
  
    // END of sluga
//////////////////////////////////////////////////////////////////////////////////////
    //Bars ES
    // bar — done
    svg
      .selectAll('myRect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', x(0))
      .attr('y', function (d) {
        return y(d.name);
      })
      .attr('width', function (d) {
        return x(d.done);
      })
      .attr('height', barHeight )
      .attr('fill', '#009f08')
      .attr('opacity', 0.7)
      .text(function (d) {
        return d.done;
      })
      .attr('transform', 'translate(0, 64)');
  // text — done
    svg
      .append('text')
      .data(data)
      .text(function (d) {
        return d.done;
      })
      .attr('transform', 'translate(0, 98)')
      .attr('x', d => x(d.done) - 24)
      .attr('fill', '#ccc')
      .attr('font-size', '16px');


// bar — not_done
    svg
      .selectAll('myRect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', function (d) {
        return x(d.done);
      })
      .attr('y', function (d) {
        return y(d.name);
      })
      .attr('width', function (d) {
        return x(d.not_done);
      })
      .attr('height', barHeight )
      .attr('fill', '#ff4716')
      .attr('opacity', 0.7)
      .attr('transform', 'translate(0, 64)');
      // .attr('transform', 'translate(0,' + 20 + ')');

// text — not_done
    svg
      .append('text')
      .data(data)
      .text(function (d) {
        return d.not_done;
      })
      .attr('transform', 'translate(0, 98)')
      .attr('x', d => x(d.done) + x(d.not_done) - 24)
      .attr('fill', '#ccc')
      .attr('font-size', '16px');


// bar — in_progress
    svg
      .selectAll('myRect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', function (d) {
        return x(d.done) + x(d.not_done);
      })
      .attr('y', function (d) {
        return y(d.name);
      })
      .attr('width', function (d) {
        return x(d.in_progress);
      })
      .attr('height', barHeight)
      .attr('fill', '#ddb800')
      .attr('opacity', 1)
      .attr('transform', 'translate(0, 64)');


// text — in_progress
    svg
      .append('text')
      .data(data)
      .text(function (d) {
        return d.in_progress;
      })
      .attr('transform', 'translate(0, 98)')
      .attr('x', d => x(d.done) + x(d.not_done) + x(d.in_progress) - 24)
      .attr('fill', '#30201C')
      .attr('font-size', '16px')
      .attr('text-anchor', 'middle');
  
    // END of ES

  }, [data]);

  return (<>
  
          <ul style={{display: 'flex'}}>
            <li style={ {color: '#009f08'}}>Виконано</li>
            <li style={ {color: '#ff4716', marginLeft: '40px'}}>Не виконано</li>
            <li style={ {color: '#ffd500', marginLeft: '40px'}}>В процесі</li>
            
          </ul>

  <div ref={svgRef}></div></>);
}
