document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        data: {
            // enablePolling: true,
            csvURL: window.location.origin + '/test.csv'
        },
        title: {
            text: 'US Treasury Yields'
        },
        yAxis: {
            title: {
                text: 'Yield %'
            }
        },
        xAxis: {
            categories: ['1 Mo', '2 Mo', '3 Mo', '4 Mo', '6 Mo', '1 Yr', '2 Yr', '3 Yr', '5 Yr', '7 Yr', '10 Yr', '20 Yr', '30 Yr'],
            title: {
                text: 'Maturity'
            }
        },
        // Your remaining options here...
    });
});







    // const options = {
    //      chart: {
    //         type: 'spline',
    //         zoomType: 'xy'
    //     },
    //     title: {
    //         text: 'Yield Curve',
    //     },
    //     subtitle: {
    //         text: 'Data for: selectedDate',
    //         },
        // xAxis: {
        //     categories: ['1 Mo', '2 Mo', '3 Mo', '4 Mo', '6 Mo', '1 Yr', '2 Yr', '3 Yr', '5 Yr', '7 Yr', '10 Yr', '20 Yr', '30 Yr'],
        //     title: {
        //     text: 'Maturity'
        //     }
        //     },
    //     yAxis: {
    //         title: {
    //         text: 'Yield (%)'
    //         },
    //         /*min: minValue // Use calculated minimum value*/
    //         }, 
    //     };
    
    // $.get('test.csv', csv =>{
    //     options.data = {
    //         csv
    //     };
    //     highcharts.chart('container', options);
    // });
    // You may call displayData once at the end of your DOMContentLoaded callback to render the initial chart.
   

