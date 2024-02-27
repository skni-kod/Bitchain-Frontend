import { ThemeProvider, createTheme } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import AccordionElement from './AccordionElement';

function AccordionUsage() {
	const { isDarkMode } = useDarkMode();
	const [expanded, setExpanded] = useState<string | false>(false);
	const [mode, setMode] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		setMode(isDarkMode ? 'dark' : 'light');
	}, [isDarkMode]);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<div className='px-5'>
			<ThemeProvider theme={theme}>
				<AccordionElement
					num={1}
					theme='What is Bitchain'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					Bitchain is a learning cryptocurrency exchange created by group of
					good friends, inspired by platforms like Binance and BingX.
				</AccordionElement>
				<AccordionElement
					num={2}
					theme='What products does Bitchain provide'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					Bitchain provides various products and services related to
					cryptocurrency trading and education. This includes features such as
					buying and selling cryptocurrencies, tracking cryptocurrency prices,
					and learning trading strategies.
				</AccordionElement>
				<AccordionElement
					num={3}
					theme='How to buy Bitcoin and other cryptocurrencies on Bitchain'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					To buy Bitcoin and other cryptocurrencies on Bitchain, users can
					navigate to the trading section, select the desired cryptocurrency
					pair, and place a buy order by specifying the amount and price at
					which they want to buy.
				</AccordionElement>
				<AccordionElement
					num={4}
					theme='How to track cryptocurrency prices'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					Users can track cryptocurrency prices on Bitchain by accessing the
					price tracking tool or dashboard, where they can view real-time or
					historical price data for different cryptocurrencies.
				</AccordionElement>
				<AccordionElement
					num={5}
					theme='How to trade cryptocurrencies on Bitchain'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					To trade cryptocurrencies on Bitchain, users need to create an
					account, deposit funds into their account, navigate to the trading
					section, select the desired cryptocurrency pair, and place buy or sell
					orders based on their trading strategy.
				</AccordionElement>
				<AccordionElement
					num={6}
					theme='How to learn trading on Bitchain'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					Bitchain offers various educational resources and tools to help users
					learn trading. This may include tutorials, articles, videos, demo
					trading accounts, and access to community forums where users can
					discuss trading strategies and share knowledge with other traders.
				</AccordionElement>
			</ThemeProvider>
		</div>
	);
}

export default AccordionUsage;
