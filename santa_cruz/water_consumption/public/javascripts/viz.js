d3.csv('/public/data/annual-h2o-consumption-gal-2000-2010.csv', function(data){
	nv.addGraph(function(){
		myData = [{
			key: 'Millions of gallons vs. Year',
			values: []
		}];
		data.forEach(function(d){
			var row = {};
			row.y =		parseInt(d.Business, 10) +
						parseInt(d['Coast Irrigation'], 10) +
						parseInt(d['Golf Course Irrigation'], 10) +
						parseInt(d['Multiple Residential'], 10) +
						parseInt(d.Industrial, 10) +
						parseInt(d.Irrigation, 10) +
						parseInt(d.Municipal, 10) +
						parseInt(d.Other, 10) +
						parseInt(d['Single Family Residential'], 10);
			row.x =		parseInt(d.Year, 10);
			myData[0].values.push(row);
		});
		var chart = nv.models.discreteBarChart()
			.x(function(d) { return d.x })
			.y(function(d) { return d.y }) // values must be x and y
			.margin({top: 30, right: 20, bottom: 50, left: 175})
			.tooltips(true)
			.showValues(true);

		chart.xAxis
		.axisLabel('Year')
		.tickFormat(d3.format('d'));

		chart.yAxis
		.axisLabel('Millions of gallons')
		.tickFormat(d3.format('d'));

		d3.select('#consumption svg')
		.datum(myData)
		.transition().duration(500).call(chart);

		nv.utils.windowResize(chart.update);
		return chart;
	});

	nv.addGraph(function(){
		myData = [
			{
				key: 'Industrial',
				values: []
			},
			{
				key: 'Irrigation',
				values: []
			},
			{
				key: 'Business',
				values: []
			},
			{
				key: 'Coast Irrigation',
				values: []
			},
			{
				key: 'Golf Course Irrigation',
				values: []
			},
			{
				key: 'Multiple Residential',
				values: []
			},
			{
				key: 'Municipal',
				values: []
			},
			{
				key: 'Other',
				values: []
			},
			{
				key: 'Single Family Residential',
				values: []
			}
		];

		data.forEach(function(d){
			var row = {};
			row.y = +d.Industrial;
			row.x = +d.Year;
			myData[0].values.push(row);

			row = {};
			row.y = +d.Irrigation;
			row.x = +d.Year;
			myData[1].values.push(row);

			row = {};
			row.y = +d.Business;
			row.x = +d.Year;
			myData[2].values.push(row);

			row = {};
			row.y = +d['Coast Irrigation'];
			row.x = +d.Year;
			myData[3].values.push(row);

			row = {};
			row.y = +d['Golf Course Irrigation'];
			row.x = +d.Year;
			myData[4].values.push(row);

			row = {};
			row.y = +d['Multiple Residential'];
			row.x = +d.Year;
			myData[5].values.push(row);

			row = {};
			row.y = +d.Municipal;
			row.x = +d.Year;
			myData[6].values.push(row);

			row = {};
			row.y = +d.Other;
			row.x = +d.Year;
			myData[7].values.push(row);

			row = {};
			row.y = +d['Single Family Residential'];
			row.x = +d.Year;
			myData[8].values.push(row);
		});
		var chart = nv.models.multiBarChart();
		
		chart.xAxis
		.axisLabel('Year')
		.tickFormat(d3.format('d'));

		chart.yAxis
		.axisLabel('Millions of gallons')
		.tickFormat(d3.format('d'));

		d3.select('#breakdown svg')
		.datum(myData)
		.transition().duration(500)
		.call(chart);

		nv.utils.windowResize(chart.update);
		return chart;
	})
});