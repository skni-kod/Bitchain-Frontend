import { useEffect } from 'react';
import { useSpecificCryptoInfo } from '../../features/markets/useSpecificCryptoInfo';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';

interface Crypto {
	id: string;
	name: string;
	symbol: string;
	rank: string;
	priceUsd: string;
	changePercent24Hr: string;
}

interface ChartProps {
	crypto: Crypto;
}

function Chart({ crypto }: ChartProps) {
	const { getSpecificCryptoInfo, data } = useSpecificCryptoInfo();

	useEffect(() => {
		const today = new Date().getTime();
		const twentyFourHoursAgo = today - 24 * 3600000;
		getSpecificCryptoInfo({
			id: crypto?.id,
			interval: 'm15',
			start: twentyFourHoursAgo,
			end: today,
		});
	}, [getSpecificCryptoInfo, crypto]);

	const series = data?.data.map((item) => [item.time, +item.priceUsd]);

	const options = {
		chart: {
			type: 'line',
			backgroundColor: 'rgba(0, 0, 0, 0)',
			height: `${Number(crypto?.rank) === 0 ? '250px' : '125px'}`,
		},
		series: [
			{
				data: series,
				name: crypto?.name,
			},
		],
		plotOptions: {
			series: {
				color: '#ff5700',
				enableMouseTracking: true,
				marker: {
					enabled: false,
				},
				dataLabels: {
					enabled: false,
				},
				legend: {
					enabled: true,
				},
			},
		},
		credits: { enabled: false },
		tooltip: {
			backgroundColor: '#f0f0f0',
			borderColor: 'black',
			borderRadius: 5,
			borderWidth: 1,
			formatter: function (
				this: Highcharts.TooltipFormatterContextObject
			): string {
				const yValue = typeof this.y === 'number' ? this.y : 0;
				const xValue = typeof this.x === 'number' ? this.x : 0;
				return `
				<p style="display:block; margin-left: 15px; font-size: 1rem; font-weight: bold;">${Highcharts.numberFormat(
					yValue,
					2
				)}</p></br>
				<p style="font-size: 1rem; ">${Highcharts.dateFormat('%H:%M', xValue || 0)}</p>
			  `;
			},
		},
		xAxis: {
			visible: false,
			crosshair: true,
		},
		yAxis: {
			visible: false,
		},
		title: { text: null },
		legend: {
			enabled: false,
		},
	};

	const cryptoValue = Number(crypto?.priceUsd).toFixed(2);
	const cryptoChange: number = Number(
		Number(crypto?.changePercent24Hr).toFixed(2)
	);

	return (
		<div
			className={`${
				crypto?.rank === '1' ? 'w-full' : 'sm:w-1/2 w-full'
			}  rounded-xl p-10 min-w-[220px]`}
		>
			<div className='flex flex-row justify-between items-center'>
				<img
					className='rounded-full w-10'
					src={`https://assets.coincap.io/assets/icons/${crypto?.symbol?.toLocaleLowerCase()}@2x.png`}
				/>
				<p className='text-lg'>{`${crypto?.symbol}/USD`}</p>
			</div>
			<HighchartsReact
				options={options}
				highcharts={Highcharts}
			></HighchartsReact>
			<div>
				<p className='text-2xl'>{cryptoValue}</p>
				{cryptoChange > 0 && (
					<p className='flex text-lg items-center gap-2 text-green-500'>
						+{cryptoChange}
						<span>
							<FaArrowTrendUp />
						</span>
					</p>
				)}
				{cryptoChange < 0 && (
					<p className='flex text-lg items-center gap-2 text-red-500'>
						{cryptoChange}
						<span>
							<FaArrowTrendDown />
						</span>
					</p>
				)}
			</div>
		</div>
	);
}

export default Chart;
