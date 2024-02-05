import { useAllCryptoPrice } from '../../features/markets/useAllCryptoPrice';
import Chart from './Chart';

function ChartsContainer() {
	const { data } = useAllCryptoPrice(500);
	// console.log(data?.data[0]);
	return (
		<div className='flex flex-col w-full justify-center px-5'>
			<Chart crypto={data?.data[0]}></Chart>

			<div className='flex flex-wrap w-full'>
				<Chart crypto={data?.data[1]}></Chart>
				<Chart crypto={data?.data[2]}></Chart>
			</div>
		</div>
	);
}

export default ChartsContainer;
