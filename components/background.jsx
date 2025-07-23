"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default function InteractiveGlowOctahedron() {
  const mountRef = useRef(null);
  const mouse = { x: 0, y: 0 };

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Octahedron
    const geometry = new THREE.OctahedronGeometry(1, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      emissive: 0x00ffff,
      emissiveIntensity: 1,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Particles
    const particlesCount = 200;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = [];
    for (let i = 0; i < particlesCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lights
    const pointLight = new THREE.PointLight(0x00ffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    scene.add(new THREE.AmbientLight(0x404040, 0.5));

    // Postprocessing: bloom
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(mount.clientWidth, mount.clientHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 1.5;
    bloomPass.radius = 0;
    composer.addPass(bloomPass);

    // Resize handler
    function onResize() {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    }

    window.addEventListener("resize", onResize);
    onResize(); // αρχικό

    // Mouse move handler
    function onMouseMove(e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      shape.rotation.x += 0.01 + mouse.y * 0.05;
      shape.rotation.y += 0.01 + mouse.x * 0.05;

      particles.rotation.y += 0.001;

      composer.render();
    }
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
}
