import React from 'react'
import * as d3 from "d3"

export default class LabelByChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        data : {
                                    "A": [{
                                        "label": "A",
                                        "value": "20"
                                    }, {
                                        "label": "B",
                                        "value": "50"
                                    }, {
                                        "label": "C",
                                        "value": "30"
                                    }],
                                    "B": [{
                                        "label": "A",
                                        "value": "10"
                                    }, {
                                        "label": "B",
                                        "value": "30"
                                    }, {
                                        "label": "C",
                                        "value": "20"
                                    }],
                                     "C": [{
                                        "label": "A",
                                        "value": "50"
                                    }, {
                                        "label": "B",
                                        "value": "20"
                                    }, {
                                        "label": "C",
                                        "value": "40"
                                    }]
                                },
                        chartSection : null
        };
    }

    componentWillMount() {
        this.makeChartDOM();
    }

    componentDidMount() { //after DOM make D3 Chart
        this.makeChart();
    }

    makeChart(){ 
        const chartSection1 = [];
        let section = d3.keys(this.state.data);
        for (const numSection of section){
            this.createChart(numSection, this.state.data);
        }
    }

    makeChartDOM(){
        const chartSection1 = [];
        let section = d3.keys(this.state.data);
        for (const numSection of section){
            chartSection1.push(<dl className='data-box' key = {numSection}>
                                <dt><span className="circle-yellow">{numSection}</span></dt>
                                <dd id={numSection}></dd>
                            </dl>);
        }
        this.setState({chartSection: chartSection1});   
    }

    createChart(section, allData){
            let data = allData[section];
            var w = 400;
            var h = 400;
            var r = h/4;
            var color = d3.scale.category20c();

            var vis = d3.select('#'+ section).append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
            var pie = d3.layout.pie().value(function(d){return d.value;});

            // declare an arc generator function
            var arc = d3.svg.arc().outerRadius(r);

            // select paths, use arc generator to draw
            var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
            arcs.append("svg:path")
                .attr("fill", function(d, i){
                    return color(i);
                })
                .attr("d", function (d) {
                    return arc(d);
                });

            // add the text
            arcs.append("svg:text").attr("transform", function(d){
                        d.innerRadius = 0;
                        d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
                return data[i].label;}
                    );
    }

    render() {
        return (   
                    <article>
                        {this.state.chartSection}
                    </article>
        )
    }
}