//set width and height for svg
var map_width = 500;
var map_height = 500;
var padding = {left: 30, right: 30, top: 20, bottom: 20};
//new svg
var svg = d3.select("#area1")
    .append("svg")
    .attr("width", map_width)
    .attr("height", map_height)
    .attr("class","map");

//dataset for map
var dataset = [0, 120];


//scale linear
var x_min = d3.min(dataset);
var x_max = d3.max(dataset);
var y_min = d3.min(dataset);
var y_max = d3.max(dataset);
var x_scale = d3.scale.linear()
    .domain([x_min, x_max])
    .range([0, map_width - padding.left - padding.right]);
var y_scale = d3.scale.linear()
    .domain([y_min, y_max])
    .range([map_height - padding.top - padding.bottom, 0]);

//axis,x,y ruler
var num_ticks = 10;
var x_axis = d3.svg.axis()
    .scale(x_scale)
    .orient("bottom")
    .ticks(num_ticks);
var y_axis = d3.svg.axis()
    .scale(y_scale)
    .orient("left")
    .ticks(num_ticks);

//svg.append("g")
//    .attr("class", "axis")
//    .attr("transform", "translate(" + padding.left + "," + (map_height - padding.bottom) + ")")
//    .call(x_axis);
//svg.append("g")
//    .attr("class", "axis")
//    .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
//    .call(y_axis);


//draw map
d3.csv("Dota Labels.csv", function (csvdata) {
    svg.selectAll("rect")
        .data(csvdata)
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
    //console.log(csvdata);
    //for (var i = 0; i < csvdata.length; i++) {
    //    var x_label = csvdata[i].x;
    //    var y_label = csvdata[i].y;
    //    //var section_label = csvdata[i].Section_Label;
    //    var value_label = csvdata[i].Label_Value;
    //    map_data.push([x_label, y_label, value_label]);
    //    //console.log( "x_label: " + x_label + "\n" +
    //    //    "y_label: " + y_label + "\n" +
    //    //    "value_label: " + value_label  );
    //}
});
var symbol_width = 500;
var symbol_height = 500;
var symbol_padding = {left: 30, right: 30, top: 20, bottom: 20};
var symbol_data = [1,2,3,5,7,9,11,12,13,15,17];
var symbol_position = [
    [1,1],
    [1,2],
    [1,3],
    [1,4],
    [1,5],
    [1,6],
    [2,1],
    [2,2],
    [2,3],
    [2,4],
    [2,5]
];
//new svg
var svg_symbol = d3.select("#area1")
    .append("svg")
    .attr("width", symbol_width)
    .attr("height", symbol_height)
    .attr("class","map");

svg_symbol.selectAll("rect")
    .data(symbol_data)
    .enter()
    .append("rect")
    .attr("x",20)
    .attr("y",function(d,i){
        return i * 25;
    })
    .attr("width", 40)
    .attr("height",15)
    .attr("transform", "translate(" + padding.left + "," +  padding.bottom + ")")
    .attr("fill",function(d){
        if(d == '1')//base1 radiant,1
        {
            return "RGB(66,140,200)";
        }
        if( d== '2')//base2 dire,2
        {
            return "RGB(186,209,237)";
        }
        if(d == '3')//bottomlane dire,3 or bottomlane radiant,4
        {
            return "RGB(249,148,66)";
        }
        if(d == '5')//jungle dire and radiant 5,6
        {
            return "RGB(254,196,145)";
        }
        if(d == '7') //laneshop 7,8
        {
            return "RGB(80,175,75)";
        }
        if(d == '9')//midlane 9,10
        {
            return "RGB(166,231,152)";
        }
        if(d == '11')//pit 11
        {
            return "RGB(215,74,78)";
        }
        if(d== '12')//river 12
        {
            return "RGB(252,166,164)";
        }
        if(d == '13')//secret shop 13
        {
            return "RGB(164,126,204)";
        }
        if(d == '15')//toplane dire and radiant 15,16
        {
            return "RGB(205,189,220)";
        }
        if(d == '17')//void dire and radiant 17,18
        {
            return "RGB(157,113,100)";
        }
        else
        {
            return "black";
        }});
var svg_symbol_name=["base1","base2","bottomLane","jungle","laneShop","midLane","pit","river","secretShop","topLane","void"];
svg_symbol.selectAll("text")
    .data(svg_symbol_name)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("x",20)
    .attr("y",function(d,i){
        return i * 25;
    })
    .attr("fill","black")
    .attr("transform", "translate(" + (padding.left +50)+ "," +  (padding.bottom + 15) + ")");



