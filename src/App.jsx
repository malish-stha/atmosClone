import { Canvas } from "@react-three/fiber";
import { Home } from "./components/Home";
import { ScrollControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={20} damping={0.5}>
          <Home />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
