import { AxisConfig } from '@mui/x-charts'

export const userActivityData = {
	xAxis:[
		{
			scaleType: 'band',
			data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			categoryGapRatio: 0.86,
			barGapRatio: 3.9,
		} as AxisConfig<'band'>,
	],
	series:[
		{
			data: [
				254, 300, 340, 410, 480, 210, 110, 160,
				320,
			],
		},
	],
	height: 250
}