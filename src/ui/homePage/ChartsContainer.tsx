import { useAllCryptoPrice } from '../../features/markets/useAllCryptoPrice';
import Button from '../Button';
import Chart from './Chart';

function ChartsContainer() {
	const { data } = useAllCryptoPrice(20);
	// console.log(data?.data[0]);
	return (
		<div className='flex flex-col w-full justify-center px-5 gap-5'>
			<Chart crypto={data?.data[0]}></Chart>

			<div className='flex flex-wrap justify-between w-full gap-5 md800:gap-2'>
				<Chart crypto={data?.data[1]}></Chart>
				<Chart crypto={data?.data[4]}></Chart>
			</div>
			<div className='flex justify-center pt-6 pb-4'>
				<Button to='/markets' type='link' size='large'>
					Trade
				</Button>
			</div>
		</div>
	);
}

export default ChartsContainer;
