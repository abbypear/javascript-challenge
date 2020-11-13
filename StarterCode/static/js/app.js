// from data.js
var tableData = data;

// Reference the table body
var tbody = d3.select("tbody");

// Make the buttons/handlers
var filter = d3.select("#filter-btn");
var form = d3.select("form");

filter.on("click", theTable)
form.on("submit", theTable)

// Use d3 to append one table row `tr` for each data point
tableData.forEach((sighting) => {
    console.log(sighting);
    var row = tbody.append("tr");
    // Object entries
    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

//------------------------------------------------------------------------

// Create the function that runs either button/event 
function theTable() {

// Prevent the page from refreshing
    d3.event.preventDefault();

// Select the input element and get values
    var inputElement = d3.select("#datetime")
    var inputValue = d3.property("value")

// Print the value to the console
    console.log(inputValue);

// Clear the input data so that it refreshes easier 
    inputElement.property("value", "");

// Filter the table by the datetime 
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        // Object entries
        Object.entries(sighting).forEach(([key, value]) => {
             console.log(key, value);
             var cell = row.append("td");
            cell.text(value);
    });
});

});