// import ThreeContainer from './ThreeContainer';
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { Bitcoinv2 } from "./Bitcoinv2";
import { useUserWidth } from "../../hooks/useUserWidth";

function Container() {
  const windowSize = useUserWidth();
  const scale = windowSize < 400 ? 0.2 : windowSize < 700 ? 0.25 : 0.3;
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <group scale={0.5}>
        <Html position={[0, 5, -2]} transform>
          <div className="flex flex-col gap-3">
            <p className="text-5xl text-center text-main mb-6">Oops</p>
            <p className="text-2xl text-center text-">Something Went Wrong</p>
            <p className="text-xl text-center">Page Not Found</p>
            <p>
              Click
              <a
                href="/homepage"
                className=" text-main hover:text-mainHover text-center "
              >
                {" "}
                here{" "}
              </a>
              to go to the Home Page
            </p>
          </div>
        </Html>
        <group position={[0, -2, 0]}>
          <OrbitControls enableZoom={false} enableRotate={false} />
          <group>
            <Bitcoinv2 scale={scale} castShadow={true} />
          </group>
        </group>
      </group>
    </Canvas>
  );
}

export default Container;
