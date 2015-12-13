/* Created by wangyu on 15/12/13. */
var stack_width = 500;
var stack_height = 500;
var stack_padding = {left: 30, right: 30, top: 20, bottom: 20};
//new svg
var stack_svg = d3.select("body")
    .append("svg")
    .attr("width", stack_width)
    .attr("height", stack_height)
    .attr("class","stack");

d3.csv("stack_gen.csv", function (stackdata) {
    //console.log(stackdata);
    //console.log(typeof(stackdata));
    var winner_data=[];
    for(var i=0;i<stackdata.length;i++)
    {
        winner_data.push(stackdata[i].winner_distace_ratio);
    }
    //console.log(winner_data);
    var bin_num = 20;
    var stack_data = d3.layout.histogram()
        .range([0,1])
        .bins(bin_num)
        .frequency(false);
    //console.log(stack_data);

    var data = stack_data(winner_data);
    console.log(data);
    stack_svg.selectAll("rect")
        .data(stackdata)
        .enter()
        .append("rect")
        .attr("x", function (d) {
            return x_scale(d.x);
        })
        .attr("y", function (d) {
            return y_scale(d.y);
        })
        .attr("width", 3.4)
        .attr("height",3.4)
        .attr("transform", "translate(" + padding.left + "," +  padding.bottom + ")")
        .attr("fill",function(d){
            if(d.Label_Value == '1')//base1 radiant,1
            {
                return "RGB(66,140,200)";
            }
            if(d.Label_Value == '2')//base2 dire,2
            {
                return "RGB(186,209,237)";
            }
            if((d.Label_Value == '3') || (d.Label_Value == '4'))//bottomlane dire,3 or bottomlane radiant,4
            {
                return "RGB(249,148,66)";
            }
            if((d.Label_Value == '5') || (d.Label_Value == '6'))//jungle dire and radiant 5,6
            {
                return "RGB(254,196,145)";
            }
            if((d.Label_Value == '7') || (d.Label_Value == '8'))//laneshop 7,8
            {
                return "RGB(80,175,75)";
            }
            if((d.Label_Value == '9') || (d.Label_Value == '10'))//midlane 9,10
            {
                return "RGB(166,231,152)";
            }
            if(d.Label_Value == '11')//pit 11
            {
                return "RGB(215,74,78)";
            }
            if(d.Label_Value == '12')//river 12
            {
                return "RGB(252,166,164)";
            }
            if((d.Label_Value == '13') || (d.Label_Value == '14'))//secret shop 13
            {
                return "RGB(164,126,204)";
            }
            if((d.Label_Value == '15') || (d.Label_Value == '16'))//toplane dire and radiant 15,16
            {
                return "RGB(205,189,220)";
            }
            if((d.Label_Value == '17') || (d.Label_Value == '18'))//void dire and radiant 17,18
            {
                return "RGB(157,113,100)";
            }
            else
            {
                return "black";
            }
        });
});
//var n = 2, // number of layers
//    m = 196, // number of samples per layer
//    stack = d3.layout.stack().offset("wiggle"),
//    layers0 = stack(d3.range(n).map(function() { return bumpLayer(m); })),
//    layers1 = stack(d3.range(n).map(function() { return bumpLayer(m); }));
//
//var width = 960,
//    height = 500;
//
//var x = d3.scale.linear()
//    .domain([0, m - 1])
//    .range([0, width]);
//
//var y = d3.scale.linear()
//    .domain([0, d3.max(layers0.concat(layers1), function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); })])
//    .range([height, 0]);
//
//var color = d3.scale.category10();
//
//var area = d3.svg.area()
//    .x(function(d) { return x(d.x); })
//    .y0(function(d) { return y(d.y0); })
//    .y1(function(d) { return y(d.y0 + d.y); });
//
//var svg_stack = d3.select("body").append("svg")
//    .attr("width", width)
//    .attr("height", height)
//    .attr("class","stack");
//
//svg_stack.selectAll("path")
//    .data(layers0)
//    .enter().append("path")
//    .attr("d", area)
//    .style("fill", function() { return color(Math.random()); });
//
////function transition() {
////    d3.selectAll("path")
////        .data(function() {
////            var d = layers1;
////            layers1 = layers0;
////            return layers0 = d;
////        })
////        .transition()
////        .duration(2500)
////        .attr("d", area);
////}
//
//// Inspired by Lee Byron's test data generator.
//function bumpLayer(n) {
//
//    function bump(a) {
//        var x = 1 / (.1 + Math.random()),
//            y = 2 * Math.random() - .5,
//            z = 10 / (.1 + Math.random());
//        for (var i = 0; i < n; i++) {
//            var w = (i / n - y) * z;
//            a[i] += x * Math.exp(-w * w);
//        }
//    }
//
//    var a = [], i;
//    for (i = 0; i < n; ++i) a[i] = 0;
//    for (i = 0; i < 5; ++i) bump(a);
//    return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
//
//}