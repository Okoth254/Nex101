'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text3D, Center, Environment, ScrollControls, useScroll, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// --- CONFIGURATION ---
// Note: You need to place a valid JSON font file at this path in your public folder.
// You can download one from: https://github.com/mrdoob/three.js/blob/master/examples/fonts/helvetiker_bold.typeface.json
// or convert your own. for now we will use a standard one if available or the user needs to provide it.
const FONT_URL = '/fonts/Inter_Bold.json';
const COLOR_ACCENT = "#00ff88"; // Neon green accent

// --- INDIVIDUAL LETTER COMPONENT ---
const GlassLetter = ({ char, position, index }: { char: string, position: number[], index: number }) => {
    const mesh = useRef<THREE.Mesh>(null);
    const group = useRef<THREE.Group>(null);
    const scroll = useScroll(); // Access scroll data

    // Random "explosion" vector for this specific letter
    const explodeDir = useMemo(() => {
        return new THREE.Vector3(
            (Math.random() - 0.5) * 10, // Random X scatter
            (Math.random() - 0.5) * 10, // Random Y scatter
            (Math.random()) * 5         // Random Z (fly towards camera)
        );
    }, []);

    // Initial position to return to
    const initialPos = new THREE.Vector3(...position);

    useFrame((state, delta) => {
        if (!group.current || !mesh.current) return;

        // 1. SCROLL LOGIC (The Explosion)
        // scroll.offset is 0 (top) to 1 (bottom)
        const r1 = scroll.range(0, 1 / 2); // Trigger animation in the first half of scroll

        // Interpolate position: Current = Initial + (ExplodeVector * ScrollAmount)
        const targetScrollPos = initialPos.clone().add(explodeDir.clone().multiplyScalar(r1 * 2));

        // Add rotation based on scroll
        const targetRotation = new THREE.Euler(
            r1 * Math.PI * 2, // Spin X
            r1 * Math.PI,     // Spin Y
            0
        );

        // 2. MOUSE REPULSION (The "Magnetic" Effect)
        let repulsionVector = new THREE.Vector3(0, 0, 0);

        // Only apply repulsion if not exploding (scroll is near top)
        if (r1 < 0.1) {
            const mousePos = new THREE.Vector3(state.pointer.x * 10, state.pointer.y * 10, 0);

            // We need the world position of the group to calculate distance correctly
            // But for simplicity in this structure, using group.position (which is local but mostly works if parent is 0,0,0) varies.
            // Better to use a vector that approximates the screen projection or just world distance if camera is static.
            // given camera z=12, pointer.x*10 covers a good range.

            const distance = group.current.position.distanceTo(mousePos);

            if (distance < 3) {
                const direction = new THREE.Vector3().subVectors(group.current.position, mousePos).normalize();
                const force = 2.5 / distance;
                repulsionVector.add(direction.multiplyScalar(force));
            }
        }

        // 3. APPLY PHYSICS (Lerping for smoothness)
        const finalTarget = targetScrollPos.add(repulsionVector);

        group.current.position.lerp(finalTarget, 0.1);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotation.x, 0.1);
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotation.y, 0.1);
    });

    return (
        <group ref={group} position={new THREE.Vector3(...position)}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                <Text3D
                    ref={mesh}
                    font={FONT_URL}
                    size={2}
                    height={0.5}
                    curveSegments={24}
                    bevelEnabled
                    bevelThickness={0.05}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    {char}
                    {/* THE PREMIUM GLASS MATERIAL */}
                    <MeshTransmissionMaterial
                        color="white"
                        transmission={1.0}   // Glass transparency
                        thickness={1.5}      // Refraction volume
                        roughness={0.15}     // Slightly frosted
                        ior={1.5}            // Index of Refraction (glass)
                        chromaticAberration={0.06} // Prism effect
                        anisotropy={0.1}     // Brushed look
                        clearcoat={1}
                        attenuationColor={COLOR_ACCENT} // The color the glass "tints" internally
                        attenuationDistance={0.5}
                    />
                </Text3D>
            </Float>
        </group>
    );
};

// --- MAIN SCENE ---
export default function KineticTypography() {
    const letters = [
        { char: 'n', pos: [-5, 0, 0] },
        { char: 'e', pos: [-3, 0, 0] },
        { char: 'x', pos: [-1, 0, 0] },
        { char: 't', pos: [1, 0, 0] },
        { char: '1', pos: [3, 0, 0] },
        { char: '0', pos: [4.5, 0, 0] },
        { char: '1', pos: [6, 0, 0] },
    ];

    return (
        <div style={{ width: '100vw', height: '100vh', background: '#050505', position: 'relative' }}>
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 12], fov: 45 }}>
                {/* SCROLL CONTROLS: "pages={2}" means the scroll area is 200vh */}
                <ScrollControls pages={2} damping={0.2}>

                    {/* LIGHTING - Crucial for Glass */}
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} color={COLOR_ACCENT} />
                    <pointLight position={[-10, -10, -10]} intensity={2} color="blue" />

                    {/* REFLECTION ENVIRONMENT */}
                    <Environment preset="warehouse" background={false} blur={0.6} />

                    <Center>
                        <group>
                            {letters.map((item, index) => (
                                <GlassLetter
                                    key={index}
                                    char={item.char}
                                    position={item.pos}
                                    index={index}
                                />
                            ))}
                        </group>
                    </Center>

                </ScrollControls>
            </Canvas>

            {/* HTML OVERLAY FOR SCROLL INSTRUCTIONS */}
            <div style={{
                position: 'absolute',
                bottom: 40,
                left: '50%',
                transform: 'translate(-50%)',
                color: 'white',
                opacity: 0.5,
                fontFamily: 'var(--font-figtree)',
                pointerEvents: 'none'
            }}>
                Scroll to Explore
            </div>
        </div>
    );
}
