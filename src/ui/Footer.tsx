import { Link } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import { GoDotFill } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';

function Footer() {
	const date = new Date().getFullYear();
	const { isDarkMode } = useDarkMode();

	return (
		<footer className='relative mt-16 pt-6 pb-8 px-10 mx-auto flex justify-center flex-wrap  dark:bg-bgDark max-w-7xl w-full  text-gray'>
      <div className='absolute w-5/6 h-[1px] left-1/2 -translate-x-1/2 -top-5 bg-main'></div>
			<div className='flex flex-col items-center gap-5 w-full'>
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
