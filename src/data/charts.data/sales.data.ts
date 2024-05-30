export const salesData = {
    grid: { horizontal: true },
    series: [
        {
            showMark: false,
            data: [0, 500, 300, 680, 400, 450, 530, 680, 505, 600, 300, 530],
            area: true,
            color: '#18adff',
        },
        {
            data: [0, 300, 650, 300, 350, 400, 500, 550, 680, 500, 200, 550],
            area: true,
            showMark: false,
            color: '#2cd9ff',
        },
    ],
    yAxis: [
        {
            data: [100, 200, 300, 400, 500, 600, 680],
        },
    ],
    xAxis: [
        {
            data: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            scaleType: 'band',
        },
    ],
    sx: {
        '.MuiAreaElement-root': {
            fill: 'url(#custom_gradient_1)',
        },
        '.css-13vdo2f-MuiLineElement-root': {
            strokeWidth: '4px',
        },
        '.css-xglyfy-MuiLineElement-root': {
            strokeWidth: '4px',
            fill: 'url(#custom_gradient_2)',
        },
    },
}
