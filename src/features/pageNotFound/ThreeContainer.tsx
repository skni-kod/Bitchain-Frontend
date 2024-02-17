import { RefObject, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Bitcoin } from './Bitcoin';
import { Group } from 'three';

function ThreeContainer() {
	const ref: RefObject<Group> = useRef<Group>(null);
	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.y += delta;
		}
	});

	return (
		<>
			<group position={[0, -1, 0]}>
				<directionalLight position={[0, 1, 2]} intensity={10} />
				<directionalLight position={[0, 1, -2]} intensity={10} />
				<directionalLight position={[0, -1, 0]} intensity={10} />
				<pointLight position={[1, 2, 1]} intensity={1} />
				<pointLight position={[-1, 2, 1]} intensity={1} />
				{/* <pointLight position={[1, 2, -1]} intensity={1} /> */}
				{/* <pointLight position={[-1, 2, 1]} intensity={1} /> */}

				<ambientLight intensity={1} />
				<OrbitControls enableZoom={true} enableRotate={true} />
				<group ref={ref}>
					<Bitcoin scale={0.25} />
				</group>
			</group>
		</>
	);
}

export default ThreeContainer;
