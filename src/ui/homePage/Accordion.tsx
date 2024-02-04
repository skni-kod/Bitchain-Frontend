import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	ThemeProvider,
	Typography,
	createTheme,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

function AccordionUsage() {
	const { isDarkMode } = useDarkMode();
	const [expanded, setExpanded] = useState<string | false>(false);
	const [mode, setMode] = useState<'light' | 'dark'>('light');

	function handleChange(isExpanded: boolean, panel: string) {
		setExpanded(isExpanded ? panel : false);
	}

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
				<Accordion
					expanded={expanded === 'panel1'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
				>
					<AccordionSummary
						id='panel1-header'
						aria-controls='panel1-content'
						expandIcon={<FaArrowDown />}
					>
						<Typography>What is a cryptocurrency exchange</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus odio ipsum consequuntur ratione eligendi debitis! Est
							repellendus reiciendis vitae totam beatae fuga exercitationem
							fugiat quisquam eaque modi ipsum, tempora, quis quod amet ea quia
							tempore cupiditate hic quam recusandae sunt.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel2'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
				>
					<AccordionSummary
						id='panel2-header'
						aria-controls='panel2-content'
						expandIcon={<FaArrowDown />}
					>
						<Typography>What products does Bitchain provide</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus odio ipsum consequuntur ratione eligendi debitis! Est
							repellendus reiciendis vitae totam beatae fuga exercitationem
							fugiat quisquam eaque modi ipsum, tempora, quis quod amet ea quia
							tempore cupiditate hic quam recusandae sunt.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel3'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
				>
					<AccordionSummary
						id='panel3-header'
						aria-controls='panel3-content'
						expandIcon={<FaArrowDown />}
					>
						<Typography>
							How to buy Bitcoin and other cryptocurrencies on Bitchain
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus odio ipsum consequuntur ratione eligendi debitis! Est
							repellendus reiciendis vitae totam beatae fuga exercitationem
							fugiat quisquam eaque modi ipsum, tempora, quis quod amet ea quia
							tempore cupiditate hic quam recusandae sunt.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel4'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')}
				>
					<AccordionSummary
						id='panel4-header'
						aria-controls='panel4-content'
						expandIcon={<FaArrowDown />}
					>
						<Typography>How to track cryptocurrency prices</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus odio ipsum consequuntur ratione eligendi debitis! Est
							repellendus reiciendis vitae totam beatae fuga exercitationem
							fugiat quisquam eaque modi ipsum, tempora, quis quod amet ea quia
							tempore cupiditate hic quam recusandae sunt.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel5'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel5')}
				>
					<AccordionSummary
						id='panel5-header'
						aria-controls='panel5-content'
						expandIcon={<FaArrowDown />}
					>
						<Typography>How to trade cryptocurrencies on Bitchain</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus odio ipsum consequuntur ratione eligendi debitis! Est
							repellendus reiciendis vitae totam beatae fuga exercitationem
							fugiat quisquam eaque modi ipsum, tempora, quis quod amet ea quia
							tempore cupiditate hic quam recusandae sunt.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === 'panel6'}
					onChange={(event, isExpanded) => handleChange(isExpanded, 'panel6')}
				>
					<AccordionSummary
						id='panel6-header'
						aria-controls='panel6-content'
						expandIcon={<FaArrowDown />}
					>
						<Typography>How to earn from crypto on Bitchain</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus odio ipsum consequuntur ratione eligendi debitis! Est
							repellendus reiciendis vitae totam beatae fuga exercitationem
							fugiat quisquam eaque modi ipsum, tempora, quis quod amet ea quia
							tempore cupiditate hic quam recusandae sunt.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</ThemeProvider>
		</div>
	);
}

export default AccordionUsage;
