import { FaChartArea } from 'react-icons/fa';
import Card from './Card';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { GiLever } from 'react-icons/gi';

function CardsContainer() {
	return (
		<div className='flex gap-5 flex-row flex-wrap justify-left lg:justify-center align-top w-full'>
			<Card icon={<FaChartArea />} title='Spot' link='test'>
				Over 500+ coins available. Buy and sell quickly with automatic
				calculation of average cost and PnL.
			</Card>
			<Card icon={<GiLever />} title='Futures' link='test'>
				Supports long/short positions with leverage and profit of up to 150x
				from market volatilities.
			</Card>
			<Card icon={<RiExchangeDollarFill />} title='Fast convert' link='test'>
				Instantly swap between 500+ coins with ease and precision for seamless
				transactions.
			</Card>
		</div>
	);
}

export default CardsContainer;
