import { Canvas } from "@react-three/fiber";
import { Home } from "./components/Home";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { usePlay } from "./contexts/Play";
import { Overlay } from "./components/Overlay";

function App() {
  const { play } = usePlay();
  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={20}
          damping={0.5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Home />
        </ScrollControls>
        <EffectComposer>
          <Noise opacity={0.2} />
        </EffectComposer>
      </Canvas>
      <Overlay />
    </>
  );
}

export default App;
