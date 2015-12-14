///* Created by wangyu on 15/12/13. */
//var stack_width = 500;
//var stack_height = 500;
//var stack_padding = {left: 30, right: 30, top: 20, bottom: 20};
////new svg
//var stack_svg = d3.select("body")
//    .append("svg")
//    .attr("width", stack_width)
//    .attr("height", stack_height)
//    .attr("class","stack");
//
//d3.csv("stack_gen.csv", function (stackdata) {
//    //console.log(stackdata);
//    //console.log(typeof(stackdata));
//    var winner_data=[];
//    for(var i=0;i<stackdata.length;i++)
//    {
//        winner_data.push(stackdata[i].winner_distace_ratio);
//    }
//    //console.log(winner_data);
//    var bin_num = 20;
//    var stack_data = d3.layout.histogram()
//        .range([0,1])
//        .bins(bin_num)
//        .frequency(false);
//    //console.log(stack_data);
//
//    var data = stack_data(winner_data);
//    console.log(data);
//    stack_svg.selectAll("rect")
//        .data(stackdata)
//        .enter()
//        .append("rect")
//        .attr("x", function (d) {
//            return x_scale(d.x);
//        })
//        .attr("y", function (d) {
//            return y_scale(d.y);
//        })
//        .attr("width", 3.4)
//        .attr("height",3.4)
//        .attr("transform", "translate(" + padding.left + "," +  padding.bottom + ")")
//        .attr("fill",function(d){
//            if(d.Label_Value == '1')//base1 radiant,1
//            {
//                return "RGB(66,140,200)";
//            }
//            if(d.Label_Value == '2')//base2 dire,2
//            {
//                return "RGB(186,209,237)";
//            }
//            if((d.Label_Value == '3') || (d.Label_Value == '4'))//bottomlane dire,3 or bottomlane radiant,4
//            {
//                return "RGB(249,148,66)";
//            }
//            if((d.Label_Value == '5') || (d.Label_Value == '6'))//jungle dire and radiant 5,6
//            {
//                return "RGB(254,196,145)";
//            }
//            if((d.Label_Value == '7') || (d.Label_Value == '8'))//laneshop 7,8
//            {
//                return "RGB(80,175,75)";
//            }
//            if((d.Label_Value == '9') || (d.Label_Value == '10'))//midlane 9,10
//            {
//                return "RGB(166,231,152)";
//            }
//            if(d.Label_Value == '11')//pit 11
//            {
//                return "RGB(215,74,78)";
//            }
//            if(d.Label_Value == '12')//river 12
//            {
//                return "RGB(252,166,164)";
//            }
//            if((d.Label_Value == '13') || (d.Label_Value == '14'))//secret shop 13
//            {
//                return "RGB(164,126,204)";
//            }
//            if((d.Label_Value == '15') || (d.Label_Value == '16'))//toplane dire and radiant 15,16
//            {
//                return "RGB(205,189,220)";
//            }
//            if((d.Label_Value == '17') || (d.Label_Value == '18'))//void dire and radiant 17,18
//            {
//                return "RGB(157,113,100)";
//            }
//            else
//            {
//                return "black";
//            }
//        });
//});
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

//var n = 2, // number of layers
//    m = 20, // number of samples per layer
//    stack = d3.layout.stack(),
//    layers = stack(d3.range(n).map(function() { return bumpLayer(m, .1); })),
//    yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
//    yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });
//
//var margin = {top: 40, right: 10, bottom: 20, left: 10},
//    width = 960 - margin.left - margin.right,
//    height = 500 - margin.top - margin.bottom;
//
//var x = d3.scale.ordinal()
//    .domain(d3.range(m))
//    .rangeRoundBands([0, width], .08);
//
//var y = d3.scale.linear()
//    .domain([0, yStackMax])
//    .range([height, 0]);
//
//var color = d3.scale.linear()
//    .domain([0, n - 1])
//    .range(["#aad", "#556"]);
//
//var xAxis = d3.svg.axis()
//    .scale(x)
//    .tickSize(0)
//    .tickPadding(6)
//    .orient("bottom");
//
//var svg_stack = d3.select("body").append("svg")
//    .attr("width", width + margin.left + margin.right)
//    .attr("height", height + margin.top + margin.bottom)
//    .append("g")
//    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//var layer = svg_stack.selectAll(".layer")
//    .data(layers)
//    .enter().append("g")
//    .attr("class", "layer")
//    .style("fill", function(d, i) { return color(i); });
//
//var rect = layer.selectAll("rect")
//    .data(function(d) { return d; })
//    .enter().append("rect")
//    .attr("x", function(d) { return x(d.x); })
//    .attr("y", height)
//    .attr("width", x.rangeBand())
//    .attr("height", 0);
//
//rect.transition()
//    .delay(function(d, i) { return i * 10; })
//    .attr("y", function(d) { return y(d.y0 + d.y); })
//    .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });
//
//svg_stack.append("g")
//    .attr("class", "x axis")
//    .attr("transform", "translate(0," + height + ")")
//    .call(xAxis);
//d3.selectAll("input").on("change", change);
//
//var timeout = setTimeout(function() {
//    d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
//}, 2000);
//
//function change() {
//    clearTimeout(timeout);
//    if (this.value === "grouped") transitionGrouped();
//    else transitionStacked();
//}
//
//function transitionGrouped() {
//    y.domain([0, yGroupMax]);
//
//    rect.transition()
//        .duration(500)
//        .delay(function(d, i) { return i * 10; })
//        .attr("x", function(d, i, j) { return x(d.x) + x.rangeBand() / n * j; })
//        .attr("width", x.rangeBand() / n)
//        .transition()
//        .attr("y", function(d) { return y(d.y); })
//        .attr("height", function(d) { return height - y(d.y); });
//}
//
//function transitionStacked() {
//    y.domain([0, yStackMax]);
//
//    rect.transition()
//        .duration(500)
//        .delay(function(d, i) { return i * 10; })
//        .attr("y", function(d) { return y(d.y0 + d.y); })
//        .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
//        .transition()
//        .attr("x", function(d) { return x(d.x); })
//        .attr("width", x.rangeBand());
//}
//
//function bumpLayer(n, o) {
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
//    for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
//    for (i = 0; i < 5; ++i) bump(a);
//    return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
//}
var n = 40, // number of layers
    m = 2; // number of samples per layer

var margin = {top: 20, right: 50, bottom: 100, left: 75},
    width = 740 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg_stack = d3.select("#chart-svg").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("frequency_for_ratio.csv", function (data){

    //var headers = ["0","2%","4%","6%","8%","10%","12%","14%","16%","18%","20%","22%","24%","26%","28%","30%","32%","34%","36%","38%"];
    var headers = ["winner","loser"];
    var layers = d3.layout.stack()(headers.map(function(ratioRange) {
        return data.map(function(d) {
            return {x: d.number, y: +d[ratioRange]};
        });
    }));

    var yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); });
    var yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

    var xScale = d3.scale.ordinal()
        .domain(layers[0].map(function(d) { return d.x; }))
        .rangeRoundBands([25, width], .08);

    var y = d3.scale.linear()
        .domain([0, yStackMax])
        .range([height, 0]);

    var color = d3.scale.ordinal()
        .range(["#98ABC5", "#8a89a6"]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .tickSize(0)
        .tickPadding(40)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format(".2s"));

    var layer = svg_stack.selectAll(".layer")
        .data(layers)
        .enter().append("g")
        .attr("class", "layer")
        .style("fill", function(d, i) { return color(i); });

    var rect = layer.selectAll("rect")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("x", function(d) { return xScale(d.x); })
        .attr("y", height)
        .attr("width", xScale.rangeBand())
        .attr("height", 0);

    rect.transition()
        .delay(function(d, i) { return i * 10; })
        .attr("y", function(d) { return y(d.y0 + d.y); })
        .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });

    //********** AXES ************
    svg_stack.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text").style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", function(d) {
            return "rotate(-45)"
        });

    svg_stack.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(20,0)")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr({"x": -150, "y": -70})
        .attr("dy", ".75em")
        .style("text-anchor", "end")
        .text("# of campaigns");

    var legend = svg_stack.selectAll(".legend")
        .data(color.domain().slice().reverse())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(-20," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.selectAll("text .legend").data([headers.slice().reverse()])
        .enter().append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d,i,j) { return d[j];  });

    console.log(legend);
    console.log("check above legend");


    d3.selectAll("input").on("change", change);

    var timeout = setTimeout(function() {
        d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
    }, 2000);

    function change() {
        clearTimeout(timeout);
        if (this.value === "grouped") transitionGrouped();
        else transitionStacked();
    }

    function transitionGrouped() {
        y.domain([0, yGroupMax]);

        rect.transition()
            .duration(500)
            .delay(function(d, i) { return i * 10; })
            .attr("x", function(d, i, j) { return xScale(d.x) + xScale.rangeBand() / n * j; })
            .attr("width", xScale.rangeBand() / n)
            .transition()
            .attr("y", function(d) { return y(d.y); })
            .attr("height", function(d) { return height - y(d.y); });

        rect.on("mouseover", function() { tooltip.style("display", null); })
            .on("mouseout", function() { tooltip.style("display", "none"); })
            .on("mousemove", function(d) {
                var xPosition = d3.mouse(this)[0] - 15;
                var yPosition = d3.mouse(this)[1] - 25;
                tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
                tooltip.select("text").text("hello world");
            });
    };

    function transitionStacked() {
        y.domain([0, yStackMax]);

        rect.transition()
            .duration(500)
            .delay(function(d, i) { return i * 10; })
            .attr("y", function(d) { return y(d.y0 + d.y); })
            .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
            .transition()
            .attr("x", function(d) { return xScale(d.x); })
            .attr("width", xScale.rangeBand());

        rect.on("mouseover", function() { tooltip.style("display", null); })
            .on("mouseout", function() { tooltip.style("display", "none"); })
            .on("mousemove", function(d) {
                var xPosition = d3.mouse(this)[0] - 15;
                var yPosition = d3.mouse(this)[1] - 25;
                console.log(xPosition);
                tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
                tooltip.select("text").text("hello world");
            });
    };

    var tooltip = svg_stack.append("g")
        .attr("class", "tooltip");

    tooltip.append("rect")
        .attr("width", 30)
        .attr("height", 20)
        .attr("fill", "red")
        .style("opacity", 0.5);

    tooltip.append("text")
        .attr("x", 15)
        .attr("dy", "1.2em")
        .style("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold");
});