var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
d3.select("body").selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "bar-chart")
    .style("height", function (d) { // 높이 설정
        return d + "px";
    })
    .style("width", function (d) { // 너비 설정
        return "20px";
    });


var w = 200, h = 100;
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("display","block")
    .style("margin-top", 50)
    .attr("height", h);
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d, i) { // x 좌표 설정
        return i * (w / data.length)
    })
    .attr("y", function(d) { // y 좌표 설정
        return h - d;
    })
    .attr("width", w / data.length - 1) // 너비 설정
    .attr("height", function(d) { // 높이 설정
        return d;
    })
    .attr("fill", function(d) { // 색상 설정
        return "hotpink";
    });

svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("x", function(d, i) {
        return i * (w / data.length) + (w / data.length) / 2;
    })
    .attr("y", function(d) {
        return h - d + 10;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "black")
    .attr("text-anchor", "middle");
