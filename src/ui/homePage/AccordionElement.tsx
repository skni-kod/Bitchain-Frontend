import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import { FaArrowDown } from 'react-icons/fa';
import { ReactNode } from 'react';

interface AccordionElementProps {
	num: number;
	theme: string;
	children: ReactNode;
	expanded: string | false;
	setExpanded: (expanded: string | false) => void;
}

function AccordionElement({
	num,
	theme,
	children,
	expanded,
	setExpanded,
}: AccordionElementProps) {
	function handleChange(isExpanded: boolean, panel: string) {
		setExpanded(isExpanded ? panel : false);
	}
	return (
		<Accordion
			expanded={expanded === `panel${num}`}
			onChange={(event, isExpanded) => handleChange(isExpanded, `panel${num}`)}
		>
			<AccordionSummary
				id={`panel${num}-header`}
				aria-controls={`panel${num}-content`}
				expandIcon={
					<span className='text-bgDark1Hover dark:text-bgWhite'>
						<FaArrowDown />
					</span>
				}
				sx={{
					padding: '0.5rem',
					paddingX: '1.5rem',
					'&:hover': { color: '#ff5700' },
					'&:focus': { color: '#ff5700' },
				}}
			>
				<Typography>{theme}</Typography>
			</AccordionSummary>
			<AccordionDetails sx={{ '&:focus': { color: '#ff5700' } }}>
				<Typography>{children}</Typography>
			</AccordionDetails>
		</Accordion>
	);
}

export default AccordionElement;
