import React from 'react';
import * as d3 from "d3";
import StepArrowComponent from './../NNLayout/common/StepArrowComponent';

export default class NN_TrainStaticComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        //data :{"a": {"a": "10", "b": "1"}, "b": {"a": "8", "b": "3"}}
                        data :{"a": {"a": "10", "b": "1"}, "b": {"a": "8", "b": "3"}}
                     }
    }

    componentDidMount() {
        this.createChart(this.state.data);
    }

    createChart(data){
        var w = 200;
        var h = 200;
        var r = h/4;
    //    var colors = d3.scale.category20();
    //    var color = d3.scaleOrdinal(category20c();
        var color = d3.scaleOrdinal(d3.schemeCategory20);
/*
        var data = [{"label":"Category A", "value":20}, 
                        {"label":"Category B", "value":50}, 
                        {"label":"Category C", "value":30}];
*/
        var data = [{"A" : 20 , "B" : 50, "C" : 30}]; //d3.keys(data[0]); // ["A", "B", "C", "D", "E"] 
        // console.log(d3.keys(data[0])[0]);
         console.log(d3.values(data[0]));

      //  var setData = d3.data(d3.values(data[0]));
        var vis = d3.select('#chart').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
        var pie = d3.layout.pie().value(
            
            function(d,i){
            console.log(d.A);
            return d3.values(data[0])[i]});

        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);

        // select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
        arcs.append("svg:path")
            .attr("fill", function(d, i){
                return color(i);
            })
            .attr("d", function (d) {
                // log the result of the arc generator to show how cool it is :)
                console.log(arc(d));
                return arc(d);
            });

        // add the text
        arcs.append("svg:text").attr("transform", function(d){
                    d.innerRadius = 0;
                    d.outerRadius = r;
            return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text(
                
                 function(d, i) {
        
            console.log(i);
            return d3.keys(data[0])[i]}
                );
    }

    render() {
        return (
            <section>
                <h1 className="hidden">Network Configuration</h1>
                <ul className="tabHeader">
                    <li className="current"><a href="#">CNN</a></li>
                    <li><a href="#">RNN</a></li>
                    <li><a href="#">Fully</a></li>
                    <div className="btnArea">
                        <button type="button" className="img-btn save">Save</button>
                        <button type="button" className="img-btn save">Error Check</button>
                        <button type="button" className="img-btn save">Train</button>
                        <StepArrowComponent />
                    </div>
                </ul>
                 <div className="container tabBody">
                    <article>
                        <dl className="data-box">
                            <dt><span className="circle-yellow">Data info</span></dt>
                            <dd id="chart"></dd>
                        </dl>
                        <dl className="data-box">
                            <dt><span className="circle-yellow">Train Status</span></dt>
                            <dd>123</dd>
                        </dl>
                        <dl className="data-box">
                            <dt><span className="circle-yellow">TestResult</span></dt>
                            <dd>123</dd>
                        </dl>
                    </article>
                 </div>  
            </section>
        )
    }
}

                       