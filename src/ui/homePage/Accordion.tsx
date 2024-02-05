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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
					voluptates sunt cumque sed odit, molestiae labore, temporibus ea ipsum
					quisquam, qui deserunt natus! Provident laborum, doloremque, non
					nostrum odio asperiores praesentium amet blanditiis sapiente veniam
					quidem optio impedit, modi reiciendis!
				</AccordionElement>
				<AccordionElement
					num={2}
					theme='What products does Bitchain provide'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
					voluptates sunt cumque sed odit, molestiae labore, temporibus ea ipsum
					quisquam, qui deserunt natus! Provident laborum, doloremque, non
					nostrum odio asperiores praesentium amet blanditiis sapiente veniam
					quidem optio impedit, modi reiciendis!
				</AccordionElement>
				<AccordionElement
					num={3}
					theme='How to buy Bitcoin and other cryptocurrencies on Bitchain'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
					voluptates sunt cumque sed odit, molestiae labore, temporibus ea ipsum
					quisquam, qui deserunt natus! Provident laborum, doloremque, non
					nostrum odio asperiores praesentium amet blanditiis sapiente veniam
					quidem optio impedit, modi reiciendis!
				</AccordionElement>
				<AccordionElement
					num={4}
					theme='How to track cryptocurrency prices'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
					voluptates sunt cumque sed odit, molestiae labore, temporibus ea ipsum
					quisquam, qui deserunt natus! Provident laborum, doloremque, non
					nostrum odio asperiores praesentium amet blanditiis sapiente veniam
					quidem optio impedit, modi reiciendis!
				</AccordionElement>
				<AccordionElement
					num={5}
					theme='How to trade cryptocurrencies on Bitchain'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
					voluptates sunt cumque sed odit, molestiae labore, temporibus ea ipsum
					quisquam, qui deserunt natus! Provident laborum, doloremque, non
					nostrum odio asperiores praesentium amet blanditiis sapiente veniam
					quidem optio impedit, modi reiciendis!
				</AccordionElement>
				<AccordionElement
					num={6}
					theme='How to learn trading on Bitchain'
					expanded={expanded}
					setExpanded={setExpanded}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
					voluptates sunt cumque sed odit, molestiae labore, temporibus ea ipsum
					quisquam, qui deserunt natus! Provident laborum, doloremque, non
					nostrum odio asperiores praesentium amet blanditiis sapiente veniam
					quidem optio impedit, modi reiciendis!
				</AccordionElement>
			</ThemeProvider>
		</div>
	);
}

export default AccordionUsage;
