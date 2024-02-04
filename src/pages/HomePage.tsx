import Footer from '../ui/Footer';
import Header from '../ui/homePage/Header';
import CardsContainer from '../ui/homePage/CardsContainer';
import SectionContainer from '../ui/homePage/SectionContainer';
import Accordion from '../ui/homePage/Accordion';

export default function HomePage() {
	return (
		<>
			<Header />
			<main className='dark:text-white text-bgDark  w-full max-w-7xl mx-auto flex gap-40 flex-col justify-center items-center py-20'>
				<SectionContainer
					title='Explore Our Products'
					element={<CardsContainer></CardsContainer>}
				/>
				<SectionContainer
					title='Easy to Get Started'
					element={<Accordion></Accordion>}
				/>
			</main>
			<Footer />
		</>
	);
}
