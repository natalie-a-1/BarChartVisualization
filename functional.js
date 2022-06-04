    
    //grabbing data from API and storing in values
    var height = 800;
    var width = 940;
    var padding = 50;

    var hScale;
    var wScale;
    var yScale
    var xScale;
    var svg;


    var values = [];
    var data = d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(data => {
        values = data.data;
        console.log(values);
        svgBox();
        scales();
        axes();
        createRect();
    });

    //creating svg
     var svgBox = () => {
        d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('text')
        .attr('x', width/2)
        .attr('y', height/7)
        .text('USA GDP')
        .attr('id', 'title');

        svg = d3.select('svg');

    };

    //create scales
    var scales = () => {
        hScale = d3.scaleLinear()
        .domain([0, d3.max(values, (item) => {
            return item[1];
        })])
        .range([0, height-(2*padding)]);

        wScale = d3.scaleLinear()
        .domain([0, values.length -1])
        .range([padding, (width - padding)]);

        let dates = values.map((item) => {
            return new Date(item[0]);
        });

        xScale = d3.scaleTime()
        .domain(d3.extent(dates))
        .range([padding, width - padding]);

        console.log(dates);

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

    var createRect = () => {
        svg.selectAll('rect')
        .data(values)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('width', (width - (2 * padding)) / values.length)
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

    };

