import Footer from '../ui/Footer';
import Header from '../ui/homePage/Header';
import CardsContainer from '../ui/homePage/CardsContainer';
import SectionContainer from '../ui/homePage/SectionContainer';
import Accordion from '../ui/homePage/Accordion';
import ChartsContainer from '../ui/homePage/ChartsContainer';
import CryptoJourneyContent from '../ui/homePage/CryptoJourneyContent';

export default function HomePage() {
	return (
		<>
			<Header />
			<main className='dark:text-white text-bgDark w-full mx-auto flex flex-col justify-center items-center'>
				<SectionContainer
					title='Starty Your Crypto Journey'
					element={<CryptoJourneyContent></CryptoJourneyContent>}
				/>

				<SectionContainer
					title='Explore Our Products'
					element={<CardsContainer></CardsContainer>}
				/>

				<div className='w-full bg-bgDark '>
					<SectionContainer
						title='Capture Every Trading Opportunity'
						element={<ChartsContainer />}
						isBlack={true}
					/>
				</div>

				<SectionContainer
					title='Easy to Get Started'
					element={<Accordion></Accordion>}
				/>
			</main>
			<Footer />
		</>
	);
}
