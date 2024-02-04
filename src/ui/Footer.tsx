function Footer() {
	const date = new Date().getFullYear();
	return <footer className='dark:text-white text-bgDark text-center py-2'>{date} BITCHAIN</footer>;
}

export default Footer;
