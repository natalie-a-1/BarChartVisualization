# Data Visualization with Bar Charts

<img width="1438" alt="Screen Shot 2022-06-15 at 8 21 51 PM" src="https://user-images.githubusercontent.com/98536588/173971618-e5048229-b5b8-41f3-9b02-64e128c4212d.png">


<img width="1465" alt="Screen Shot 2022-06-15 at 8 23 16 PM" src="https://user-images.githubusercontent.com/98536588/173971636-59e0253e-dce9-463d-8859-777080277d38.png">


[Dataset API](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json)

***Project Description***
This was a fun project that I needed to complete for my Data Visualization Certificate. 
The goal of this project was to use JSON and APAX to retrieve a dataset from a given API. After that,
I was given specific details from a "user" on how they would like their data to be presented (Below is a section
to see the user's request to satisfy). I used javascript, specifically javascript's D3 library, and HTML to complete the visual
components of this project. Using these languages, I also added my personal touch of interactiveness that allows users to hover
over specific content and get a better view of the information. This code can be ran using a live web server. 

***User Requests***
- My chart should have a title with a corresponding id="title".
- My chart should have a g element x-axis with a corresponding id="x-axis".
- My chart should have a g element y-axis with a corresponding id="y-axis".
- Both axes should contain multiple tick labels, each with a corresponding class="tick".
- My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.
- Each bar should have the properties data-date and data-gdp containing date and GDP values.
- The bar elements' data-date properties should match the order of the provided data.
- The bar elements' data-gdp properties should match the order of the provided data.
- Each bar element's height should accurately represent the data's corresponding GDP.
- The data-date attribute and its corresponding bar element should align with the corresponding value on the x-axis.
- The data-gdp attribute and its corresponding bar element should align with the corresponding value on the y-axis.
- I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
- My tooltip should have a data-date property that corresponds to the data-date of the active area.


