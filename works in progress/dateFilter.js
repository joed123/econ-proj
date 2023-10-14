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
        } else 
     } // Create chart if it doesn't exist 