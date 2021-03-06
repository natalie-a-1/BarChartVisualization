
//grabbing data from API and storing in values
var height = 830;
var width = 1504;
var padding = 70;

var hScale;
var wScale;
var yScale
var xScale;
var svg;
var dates;


var values = [];
var data = d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(data => {
        values = data.data;
        svgBox();
        scales();
        axes();
        createRect();
    });

//creating svg
var svgBox = () => {
    d3.select('#barArea')
        .append('svg')
        .attr('width', (width / 2) + padding)
        .attr('height', height)
        .attr('overflow', 'hidden');

    svg = d3.select('svg');
    window.scrollTo(0, 0);

};

//create scales
var scales = () => {
    hScale = d3.scaleLinear()
        .domain([0, d3.max(values, (item) => {
            return item[1];
        })])
        .range([0, height - (2 * padding)]);

    wScale = d3.scaleLinear()
        .domain([0, values.length - 1])
        .range([padding, (width / 2)]);

    dates = values.map((item) => {
        return new Date(item[0]);
    });

    xScale = d3.scaleTime()
        .domain(d3.extent(dates))
        .range([padding, (width / 2)]);

    yScale = d3.scaleLinear()
        .domain([0, d3.max(values, (item) => {
            return item[1];
        })])
        .range([height - padding, padding]);
};

//create axes
var axes = () => {
    let xAxis = d3.axisBottom(xScale);

    svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0,' + (height - padding) + ')');

    let yAxis = d3.axisLeft(yScale);

    svg.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', 'translate(' + padding + ',0)');
};

//create bars
var createRect = () => {

    let tooltip = d3.selectAll('#tooltip')
        .style('visibility', 'hidden')
        .attr('class', 'item');

    svg.selectAll('rect')
        .data(values)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('width', ((width / 2) - (2 * padding)) / values.length)
        .attr('data-date', (item) => {
            return item[0];
        })
        .attr('data-gdp', (item) => {
            return item[1];
        })
        .attr('height', (item) => {
            return hScale(item[1]);
        })
        .attr('x', (item, index) => {
            return wScale(index);
        })
        .attr('y', (item) => {
            return (height - padding) - hScale(item[1]);
        })
        .on('mouseover', function (item) {
            tooltip.transition()
                .style('visibility', 'visible')
                .style('position', 'relative');

            document.querySelector('#tooltip').setAttribute('data-date', item[0]);

            tooltip.html("$ " + item[1] + " billion" + '<br>' + "" + item[0])
                .style('font-weight', 1000 + 'px')

            tooltip.style('left', 220 + 'px')
                .style('top', 400 + 'px')
                .style('transform', 'translateX(60px)');

        })
        .on('mouseout', function (item) {
            tooltip.transition()
                .style('visibility', 'hidden');
        })
    window.scrollTo(0, 0);
};
