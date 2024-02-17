import { OrbitControls } from '@react-three/drei';
// import { Bitcoin } from './Bitcoin';
import { Bitcoinv2 } from './Bitcoinv2';

function ThreeContainer() {
	return (
		<>
			<group position={[0, -1, 0]}>
				<directionalLight position={[0, 1, 2]} intensity={10} />
				<directionalLight position={[0, 1, -2]} intensity={10} />
				<directionalLight position={[0, -1, 0]} intensity={10} />
				<pointLight position={[1, 2, 1]} intensity={1} />
				<pointLight position={[-1, 2, 1]} intensity={1} />
				<pointLight position={[1, 2, -1]} intensity={1} />
				<pointLight position={[-1, 2, 1]} intensity={1} />

				<ambientLight intensity={1} />
				<OrbitControls enableZoom={true} enableRotate={true} />
				<group>
					{/* <Bitcoin scale={0.25} /> */}
					<Bitcoinv2 scale={0.20} />
				</group>
			</group>
		</>
	);
}

export default ThreeContainer;
