import Button from '../Button';

function Header() {
	return (
		<div className='relative w-full h-full text-center'>
			<div className='absolute w-full -z-9 h-full bg-no-repeat bg-cover bg-center md:bg-[center_top_-50px] bg-hero-pattern grayscale-[50%]'></div>
			<div className='z-10 pb-15 absolute text-white w-full h-full flex justify-center items-center flex-col bg-bgDark bg-opacity-50 px-3'>
				<h1 className='z-20 text-3xl mb-3 lg:text-5xl'>
					A Leading Crypto Exchange
				</h1>
				<p className='z-20 text-md lg:text-lg'>
					Trade, earn and learn about crypto with us.
				</p>
				<div className='z-20 pt-8 flex flex-wrap justify-center'>
					<Button type='link' bgType='headerLink' size='large' to='#pawel'>
						Read about us
					</Button>
					<Button type='link' size='large' to='/signup'>
						Get started
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Header;
