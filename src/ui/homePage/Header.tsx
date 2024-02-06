import { motion } from 'framer-motion';

import Button from '../Button';

function Header() {
	return (
		<div className='relative w-full h-full text-center'>
			<div className='absolute w-full -z-9 h-full bg-no-repeat bg-cover bg-center md:bg-[center_top_-50px] bg-hero-pattern grayscale-[50%]'></div>
			<div className='z-10 pb-15 absolute text-white w-full h-full flex justify-center items-center flex-col bg-bgDark bg-opacity-50 px-3'>
				<motion.h1
					animate={{ y: [-100, 0], opacity: [0, 1] }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className='z-20 text-3xl mb-3 lg:text-5xl'
				>
					A Learning Crypto Exchange
				</motion.h1>
				<motion.p
					animate={{ y: [-100, 0], opacity: [0, 1] }}
					transition={{ delay: 0.45, duration: 0.5 }}
					className='z-20 text-md lg:text-lg'
				>
					Trade, earn and learn about crypto with us.
				</motion.p>
				<div className='z-20 pt-8 flex flex-wrap justify-center'>
					<motion.div
						animate={{ x: [-100, 0], opacity: [0, 1] }}
						transition={{ delay: 0.45, duration: 0.5 }}
						className='z-20 text-md lg:text-lg'
					>
						<Button type='link' bgType='headerLink' size='large' to='/about'>
							Read about us
						</Button>
					</motion.div>
					<motion.div
						animate={{ x: [100, 0], opacity: [0, 1] }}
						transition={{ delay: 0.45, duration: 0.5 }}
						className='z-20 text-md lg:text-lg'
					>
						<Button type='link' size='large' to='/signup'>
							Get started
						</Button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Header;
