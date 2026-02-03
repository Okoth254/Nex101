// Three.js helper utilities

import * as THREE from 'three';

/**
 * Create a responsive camera that adjusts to window size
 */
export const createResponsiveCamera = (
    fov: number = 75,
    near: number = 0.1,
    far: number = 1000
): THREE.PerspectiveCamera => {
    const camera = new THREE.PerspectiveCamera(
        fov,
        window.innerWidth / window.innerHeight,
        near,
        far
    );
    return camera;
};

/**
 * Handle window resize for Three.js scenes
 */
export const handleResize = (
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

/**
 * Mouse tracking for 3D interactions
 */
export const getMousePosition = (event: MouseEvent) => {
    return {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
    };
};

/**
 * Smooth lerp for animations
 */
export const lerp = (start: number, end: number, factor: number): number => {
    return start + (end - start) * factor;
};

/**
 * Convert hex color to Three.js color
 */
export const hexToThreeColor = (hex: string): THREE.Color => {
    return new THREE.Color(hex);
};
