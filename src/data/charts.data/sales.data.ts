export const salesData = {
    width: 884,
    height: 370,
    grid: { horizontal: true },
    xAxis: [
        {
			id: 'x-axis-1',
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
    yAxis: [
        {
            colorMap: {
                type: 'continuous',
                color: ['rgb(0, 117, 255)', 'rgba(0, 117, 255, 0.4)'],
            },
            data: [100, 200, 300, 400, 500, 600, 700],
        },
    ],
    series: [
        {
            showMark: false,
            data: [0, 500, 300, 700, 400, 350, 540, 700, 435, 520, 230, 530],
            area: true,
        },
    ],

    // {
    //     data: [
    //         0, 300, 700, 300, 300, 320, 400, 460, 550,
    //         500, 200, 550,
    //     ],
    //     area: true,
    //     showMark: false,
    //     color: 'rgb(50, 160, 255)',
    // },
}
