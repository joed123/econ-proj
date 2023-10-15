document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {
        chart: {
            type: 'spline'
        },
        data: {
            csvURL: window.location.origin + '/test.csv',
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
            type: 'catagories',
            title: {
                text: 'maturity'
            }
        },
    });
});



