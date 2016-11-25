import React from 'react'
import * as d3 from "d3"

export default class LabelByChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.pie = {};
        this.arcs = {};
        this.vis = {};
        this.arc = {};
        this.currAngle = {};
        this.state = {
            chartSection : null
        };
    }

    componentWillMount() {
        this.makeChartDOM();
    }

    componentDidMount() { //after DOM make D3 Chart
        this.makeChart();
    }

    componentDidUpdate() { 
        const chartSection1 = [];
        let section = d3.keys(this.props.data);
        for (const numSection of section){
            this.updateChart(numSection, 'L' + numSection, this.props.data);
        }
    }

    makeChart(){ 
        const chartSection1 = [];
        let section = d3.keys(this.props.data);
        for (const numSection of section){
            this.createChart(numSection, 'L' + numSection, this.props.data);
        }
    }

    makeChartDOM(){
        const chartSection1 = [];
        let section = d3.keys(this.props.data);
        for (const numSection of section){
            chartSection1.push(<dl className='data-box' key = {numSection}>
                                <dt><span>{numSection}</span></dt>
                                <dd id={'L'+numSection}></dd>
                            </dl>);
        }
        this.setState({chartSection: chartSection1});   
    }

    createChart(dataSection, section, allData){
            let data = allData[dataSection];
            var w = 400;
            var h = 400;
            var r = h/4;
            var color = d3.scale.category20c();

            this.vis[section] = d3.select('#' + section).append("svg:svg").attr("id", 'svg_' + dataSection).data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
            this.pie[section] = d3.layout.pie().value(function(d){return d.value;});


            // declare an arc generator function
            
            var arc =  d3.svg.arc().outerRadius(r);
            this.arc[section] = arc;

            // select paths, use arc generator to draw
            let temp = this.currAngle;
            this.arcs[section] = this.vis[section].selectAll("g.slice").data(this.pie[section]).enter().append("svg:g").attr("class", "slice").attr('id', 'arcs_' + dataSection);
            this.arcs[section].append("svg:path")
                    .attr("fill", function(d, i){
                        return color(i);
                    })
                    .attr("d", function (d) {
                        return arc(d);
                    })
                    .each(function(d) {
                        temp[section] = d;
                    });
            
            this.currAngle[section] = temp[section]

            // add the text
            this.arcs[section].append("svg:text").attr("transform", function(d){
                            d.innerRadius = 0;
                            d.outerRadius = r;
                            return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
                            return data[i].label;}
                        );
    }

    updateChart(dataSection, section, allData){
        /*redraw pattern*/
        d3.select('#svg_' + dataSection).remove();
        this.createChart(dataSection, section, allData);

        /* static pattern*/
        // let data = allData[dataSection];
        // this.pie[section].value(function(d){d[data];});
        // this.arcs[section].data(this.pie[section]);
        // this.arcs[section].attr("d", this.arc[section])

        /* animation pattern*/
        // let currAngle = this.currAngle;
        // let arc = this.arc[section];
        // function arcTween(a){
        //     var i = d3.interpolate(currAngle, a);
        //     currAngle = i(0);
        //     return function(t){
        //         return arc(i(t));
        //     }
        // }
        // this.arcs[section].transition().duration(100).attrTween("d", arcTween); 
    }

    render() {
        return (   
                    <article>
                        {this.state.chartSection}
                    </article>
        )
    }
}