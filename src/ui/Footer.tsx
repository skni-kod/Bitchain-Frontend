import useDarkMode from '../hooks/useDarkMode';
import { AiOutlineClose } from 'react-icons/ai';

function Footer() {
	const date = new Date().getFullYear();
	const { isDarkMode } = useDarkMode();

	return (
		<footer className='relative mt-16 pt-6 pb-8 px-10 mx-auto flex justify-center flex-wrap  dark:bg-bgDark max-w-7xl w-full text-black dark:text-white'>
			<div className='absolute w-5/6 h-[1px] left-1/2 -translate-x-1/2 -top-5 bg-main'></div>
			<div className='flex flex-col items-center gap-10 w-full md800:flex-row'>
				<div className='flex flex-col items-center gap-5 w-full md800:w-1/3'>
					<img
						src={isDarkMode ? '/logo-skni-black.png' : '/logo-skni-white.png'}
						alt='logo Skni KOD'
						className='w-32 '
					/>
					<span className='text-main text-xl'>
						<AiOutlineClose />
					</span>
					<img
						src={isDarkMode ? '/logo-black.png' : '/logo-white.png'}
						alt='logo BitChain'
						className='w-32'
					/>
				</div>
				<div className='md800:w-1/3 text-center text-sm '>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						vel iure dolore non quaerat, qui quibusdam reprehenderit! Nesciunt
						doloremque porro sint iste fugiat voluptates voluptatibus esse
						facilis, eaque in totam fuga doloribu.
					</p>
				</div>
				<div className='flex flex-col gap-2 justify-center py-4 h-full md800:w-1/3 text-center'>
					<p className='text-xl mb-4'>
						Our Team<span className='text-main text-3xl'>.</span>
					</p>
					<p>pawel</p>
					<p>pawel</p>
					<p>pawel</p>
				</div>
			</div>
			<div className='relative mt-20'>
				<div className='absolute w-5/6 h-[1px] left-1/2 -translate-x-1/2 -top-8 bg-main'></div>
				<p className='text-center '>
					All Rights Reserved &copy; {date} BitChain{' '}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
