d3.csv('/public/data/h2o_customers_bycat.csv', function(data){
	nv.addGraph(function(){
		myData = [
			{
				key: 'Single Family Residential',
				values: []
			},
			{
				key: 'Business',
				values: []
			},
			{
				key: 'Industrial',
				values: []
			},
			{
				key: 'Municipal',
				values: []
			},
			{
				key: 'Irrigation',
				values: []
			},
			{
				key: 'Gold Course Irrigation',
				values: []
			},
			{
				key: 'Coast Irrigation',
				values: []
			}
		];
		data.forEach(function(d){
			var row = {};
			row.y =		parseInt(d['Single Family Residential'], 10);
			row.x =		parseInt(d.Year, 10);
			myData[0].values.push(row);

			row = {};
			row.y =		parseInt(d.Business, 10);
			row.x =		parseInt(d.Year, 10);
			myData[1].values.push(row);

			row = {};
			row.y =		parseInt(d.Industrial, 10);
			row.x =		parseInt(d.Year, 10);
			myData[2].values.push(row);

			row = {};
			row.y =		parseInt(d.Municipal, 10);
			row.x =		parseInt(d.Year, 10);
			myData[3].values.push(row);

			row = {};
			row.y =		parseInt(d.Irrigation, 10);
			row.x =		parseInt(d.Year, 10);
			myData[4].values.push(row);

			row = {};
			row.y =		parseInt(d['Golf Course Irrigation'], 10);
			row.x =		parseInt(d.Year, 10);
			myData[5].values.push(row);

			row = {};
			row.y =		parseInt(d['Coast Irrigation'], 10);
			row.x =		parseInt(d.Year, 10);
			myData[6].values.push(row);
		});

		var chart = nv.models.multiBarChart();

		chart.xAxis
		.axisLabel('Year')
		.tickFormat(d3.format('d'));

		chart.yAxis
		.axisLabel('Millions of gallons')
		.tickFormat(d3.format('d'));

		d3.select('#consumers svg')
		.datum(myData)
		.transition().duration(500).call(chart);

		nv.utils.windowResize(chart.update);
		return chart;
	});
});