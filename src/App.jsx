import { Canvas } from "@react-three/fiber";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 30,
        }}
      >
        <color attach="background" args={["#ececec"]} />
        <Home />
      </Canvas>
    </>
  );
}

export default App;
