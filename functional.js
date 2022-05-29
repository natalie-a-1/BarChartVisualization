    
    //grabbing data from API and storing in values
    var height = 800;
    var width = 940;
    var padding = 50;

    var hScale;
    var wScale;
    var yScale
    var xScale;

    var values = [];
    var data = d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(data => {
        values = data.data;
        console.log(values);
        svgBox();
        scales();
    });

    //creating svg
    let svgBox = () => {
        d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('text')
        .attr('x', width/2)
        .attr('y', height/7)
        .text('USA GDP')
        .attr('id', 'title');

    };

    //create scales
    let scales = () => {
        hScale = d3.scaleLinear()
        .domain([0, d3.max(values, (item) => {
            return item[1];
        })])
        .range([0, height-(2*padding)]);

        wScale = d3.scaleLinear()
        .domain([0, values.length -1])
        .range(padding, width - padding);

        let dates = values.map((item) => {
            return new Date(item[0]);
        });

        console.log(dates);
    };

    //create axes
    let axes = () => {

    };

