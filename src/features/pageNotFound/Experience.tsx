import { OrbitControls } from '@react-three/drei';
import { Btc } from './Btc.tsx';

function Experience() {
	return (
		<>
			<ambientLight intensity={1} />
			<OrbitControls enableZoom={false}></OrbitControls>

			<Btc></Btc>
		</>
	);
}

export default Experience;
