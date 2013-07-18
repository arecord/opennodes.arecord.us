var parseXlsx = require('excel');

parseXlsx('Spreadsheet.xlsx', function(data) {
    // data is an array of arrays
	console.log(data);
});
