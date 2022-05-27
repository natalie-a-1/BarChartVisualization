    //grabbing data from API
    d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(Data => {
        document.getElementById('test').innerHTML = JSON.stringify(Data);
    });

    //creating svg
    d3.select('body')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500);


