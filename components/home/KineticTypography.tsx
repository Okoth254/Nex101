'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text3D, Center, ScrollControls, useScroll, Float } from '@react-three/drei';
import * as THREE from 'three';

// --- CONFIGURATION ---
// Note: You need to place a valid JSON font file at this path in your public folder.
// You can download one from: https://github.com/mrdoob/three.js/blob/master/examples/fonts/helvetiker_bold.typeface.json
// --- CONFIGURATION ---
// Note: We have converted the project font 'Monument Extended' to JSON format.
const FONT_URL = '/fonts/MonumentExtended_Ultrabold.json';
const BRAND_COLORS = ["#CE0054", "#4C0224", "#E29D23", "#24395B"]; // Magenta, Burgundy, Gold, Navy

// --- INDIVIDUAL LETTER COMPONENT ---
const MatteLetter = ({ char, position, index }: { char: string, position: number[], index: number }) => {
    const mesh = useRef<THREE.Mesh>(null);
    const group = useRef<THREE.Group>(null);
    const scroll = useScroll(); // Access scroll data

    // Assign color cyclically
    const color = BRAND_COLORS[index % BRAND_COLORS.length];

    // Random "explosion" vector for this specific letter
    const explodeDir = useMemo(() => {
        return new THREE.Vector3(
            (Math.random() - 0.5) * 8, // Reduced scatter for cleaner look
            (Math.random() - 0.5) * 8,
            (Math.random()) * 4
        );
    }, []);

    // Initial position to return to
    const initialPos = new THREE.Vector3(...position);

    useFrame((state, delta) => {
        if (!group.current || !mesh.current) return;

        // 1. SCROLL LOGIC
        const r1 = scroll.range(0, 1 / 2);
        const targetScrollPos = initialPos.clone().add(explodeDir.clone().multiplyScalar(r1 * 2));
        const targetRotation = new THREE.Euler(
            r1 * Math.PI * 1, // Reduced rotation speed
            r1 * Math.PI * 0.5,
            0
        );

        // 2. MOUSE REPULSION
        let repulsionVector = new THREE.Vector3(0, 0, 0);
        if (r1 < 0.1) {
            const mousePos = new THREE.Vector3(state.pointer.x * 10, state.pointer.y * 10, 0);
            const distance = group.current.position.distanceTo(mousePos);
            if (distance < 3.5) {
                const direction = new THREE.Vector3().subVectors(group.current.position, mousePos).normalize();
                const force = 3 / distance;
                repulsionVector.add(direction.multiplyScalar(force));
            }
        }

        // 3. APPLY PHYSICS
        const finalTarget = targetScrollPos.add(repulsionVector);
        group.current.position.lerp(finalTarget, 0.1);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotation.x, 0.1);
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotation.y, 0.1);
    });

    return (
        <group ref={group} position={new THREE.Vector3(...position)}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                <Text3D
                    ref={mesh}
                    font={FONT_URL}
                    size={2}
                    height={0.2} // Reduced thickness for graphical look
                    curveSegments={12} // Optimized geometry
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.01}
                    bevelOffset={0}
                    bevelSegments={3} // Optimized bevel
                >
                    {char}
                    <meshStandardMaterial
                        color={color}
                        roughness={0.3}
                        metalness={0.1}
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
        <div style={{ width: '100vw', height: '100vh', background: '#ffffff', position: 'relative' }}>
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 12], fov: 45 }}>
                <ScrollControls pages={2} damping={0.2}>

                    {/* LIGHTING - Clean Studio Setup */}
                    <ambientLight intensity={0.8} />
                    <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
                    <pointLight position={[-10, -5, -5]} intensity={0.5} />

                    <Center>
                        <group>
                            {letters.map((item, index) => (
                                <MatteLetter
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

            {/* Minimal Scroll Indicator */}
            <div style={{
                position: 'absolute',
                bottom: 40,
                left: '50%',
                transform: 'translate(-50%)',
                color: '#4C0224', // Dark Burgundy for visibility on white
                opacity: 0.6,
                fontFamily: 'var(--font-figtree)',
                pointerEvents: 'none',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
            }}>
                Scroll
            </div>
        </div>
    );
}
