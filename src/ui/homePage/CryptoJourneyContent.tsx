import Button from '../Button';
import CryptoJourneyContainer from './CryptoJourneyContainer';

function CryptoJourneyContent() {
	return (
		<div className='flex justify-center flex-col gap-10'>
			<CryptoJourneyContainer
				type='textOnLeft'
				imageSrc='/bitcoin.png'
				imageAlt='Bitcoin coin'
			>
				<p>
					<span className='text-main'>Bitchain</span> makes it easy to get
					started, sign up today and learn how to trade without risk
					<span className='text-main text-3xl'>.</span>
				</p>
			</CryptoJourneyContainer>

			<CryptoJourneyContainer
				type='textOnRight'
				imageSrc='/gift.png'
				imageAlt='Gift box and Bitcoin coin'
			>
				<p>
					Claim <span className='text-main'>starter pack</span> to your crypto
					learning
					<span className='text-main text-3xl'>.</span>
				</p>
			</CryptoJourneyContainer>

			<CryptoJourneyContainer
				type='textOnLeft'
				imageSrc='/tools.png'
				imageAlt='Moneta Bitcoin'
			>
				<p>
					<span className='text-main'>Professional tools</span> for traders and
					all the <span className='text-main'>mechanics</span> available on a
					real cryptocurrency exchange
					<span className='text-main text-3xl'>.</span>
				</p>
			</CryptoJourneyContainer>

			<div className='flex flex-wrap justify-center'>
				<Button type='link' bgType='transparent' to='/about'>
					Read about the project
				</Button>
				<Button type='link' to='/signup'>Get Started</Button>
			</div>
		</div>
	);
}

export default CryptoJourneyContent;
