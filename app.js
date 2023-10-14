document.addEventListener('DOMContentLoaded', function () {
    let chart; 

    document.getElementById('selectedDate').addEventListener('change', displayData);

    function displayData() {
        const selectedDate = document.getElementById('selectedDate').value;

        // Find data for the selected date
        const dataForRow = allData.find(row => row.Date === selectedDate);

        if (!dataForRow) {
            alert('No data available for the selected date!');
            return;
        }

        const yieldData = Object.values(dataForRow).slice(1); // Extracting yield values
        const minValue = Math.min(...yieldData); // Calculating the minimum value
        
        if (chart) {
            // Update series, subtitle, and yAxis if the chart exists
            chart.series[0].setData(yieldData);
            chart.setTitle(null, {text: 'Data for: ' + selectedDate});
            chart.yAxis[0].update({min: minValue});
        } else {
            // Create chart if it doesn't exist
            chart = Highcharts.chart('container', {
                title: {
                    text: 'Yield Curve',
                },
                subtitle: {
                    text: 'Data for: ' + selectedDate,
                },
                xAxis: {
                    categories: ['1 Mo', '2 Mo', '3 Mo', '4 Mo', '6 Mo', '1 Yr', '2 Yr', '3 Yr', '5 Yr', '7 Yr', '10 Yr', '20 Yr', '30 Yr'],
                    title: {
                        text: 'Maturity'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Yield (%)'
                    },
                    min: minValue // Use calculated minimum value
                },
                series: [{
                    name: 'Yield',
                    data: yieldData
                }]
            });
        }
    }
    // You may call displayData once at the end of your DOMContentLoaded callback to render the initial chart.
    displayData();
});
