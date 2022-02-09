import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function D3Bars({ done, not_done, in_progress }) {
  const partyProgress = [
    {
      name: 'Слуга народу',
      done,
      not_done,
      in_progress
    }
  ];
  const [data] = useState(partyProgress);
  const svgRef = useRef();
  useEffect(() => {
    const widthCal = window.innerWidth > 590 ? 600 : 360;

    const margin = { top: 0, right: 30, bottom: 40, left: 10 },
      width = widthCal - margin.left - margin.right,
      height = 100 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select(svgRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Add X axis
    const x = d3.scaleLinear().domain([0, 100]).range([0, width]);

    svg
      .append('g')
      .attr('transform', 'translate(0,64)')
      .call(d3.axisBottom(x))
      .attr('color', '#ccc')
      .attr('opacity', 0.7);

    // Y axis
    const y = d3
      .scaleBand()
      .range([0, height])
      // .domain(data.map(function(d) { return d.name; }))
      .padding(0.1);

    svg
      .append('g')
      .call(d3.axisLeft(y))
      .attr('class', 'axisLeft')
      .attr('font-size', '14')
      .attr('color', '#ccc')
      .attr('transform', 'translate(-4,0)');

    // var bar = svg.selectAll('g').data(data).enter().append('g');

    //Bars
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
      .attr('height', y.bandwidth() / 3)
      .attr('fill', '#009f08')
      .attr('opacity', 0.7)
      .text(function (d) {
        return d.done;
      });
    svg
      .append('text')
      .data(data)
      .text(function (d) {
        return d.done + '%';
      })
      .attr('transform', 'translate(36, 14)')
      .attr('x', d => (d.done * 10) / 2)
      .attr('fill', '#ccc')
      .attr('font-size', '13px');

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
        return x(d.not_done);
      })
      .attr('height', y.bandwidth() / 3)
      .attr('fill', '#ff4716')
      .attr('opacity', 0.8)
      .attr('transform', 'translate(0,' + 20 + ')');

    svg
      .append('text')
      .data(data)
      .text(function (d) {
        return d.not_done + '%';
      })
      .attr('transform', 'translate(36, 34)')
      .attr('x', d => (d.not_done * 10) / 2)
      .attr('fill', '#ccc')
      .attr('font-size', '13px');

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
        return x(d.in_progress);
      })
      .attr('height', y.bandwidth() / 3)
      .attr('fill', '#ffd500')
      .attr('opacity', 0.8)
      .attr('transform', 'translate(0,' + 40 + ')');

    svg
      .append('text')
      .data(data)
      .text(function (d) {
        return d.in_progress + '%';
      })
      .attr('transform', 'translate(36, 54)')
      .attr('x', d => (d.in_progress * 10) / 2)
      .attr('fill', '#ccc')
      .attr('font-size', '13px');
  }, [data]);

  return <div ref={svgRef}></div>;
}
