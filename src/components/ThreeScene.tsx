
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);
    
    const blueLight = new THREE.PointLight(0x1EAEDB, 1, 10);
    blueLight.position.set(-3, 1, 2);
    scene.add(blueLight);
    
    const purpleLight = new THREE.PointLight(0x8B5CF6, 1, 10);
    purpleLight.position.set(3, 1, 2);
    scene.add(purpleLight);
    
    const magentaLight = new THREE.PointLight(0xD946EF, 1, 10);
    magentaLight.position.set(0, -3, 2);
    scene.add(magentaLight);
    
    // Create construction site geometry
    const createBuildingFrame = () => {
      const group = new THREE.Group();
      
      // Base
      const baseGeometry = new THREE.BoxGeometry(4, 0.2, 4);
      const baseMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x1A1F2C,
        metalness: 0.8,
        roughness: 0.2
      });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.y = -2;
      group.add(base);
      
      // Columns
      const createColumn = (x: number, z: number) => {
        const columnGeometry = new THREE.BoxGeometry(0.2, 4, 0.2);
        const columnMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x8B5CF6,
          emissive: 0x8B5CF6,
          emissiveIntensity: 0.3,
          metalness: 0.8,
          roughness: 0.2
        });
        const column = new THREE.Mesh(columnGeometry, columnMaterial);
        column.position.set(x, 0, z);
        return column;
      };
      
      // Create 4 columns
      group.add(createColumn(1.5, 1.5));
      group.add(createColumn(-1.5, 1.5));
      group.add(createColumn(1.5, -1.5));
      group.add(createColumn(-1.5, -1.5));
      
      // Beams connecting columns
      const createBeam = (start: THREE.Vector3, end: THREE.Vector3) => {
        const direction = new THREE.Vector3().subVectors(end, start);
        const length = direction.length();
        
        const beamGeometry = new THREE.BoxGeometry(0.1, 0.1, length);
        const beamMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x1EAEDB,
          emissive: 0x1EAEDB,
          emissiveIntensity: 0.3
        });
        
        const beam = new THREE.Mesh(beamGeometry, beamMaterial);
        
        // Position at the midpoint
        beam.position.addVectors(start, end).multiplyScalar(0.5);
        
        // Orient the beam
        if (Math.abs(direction.x) > Math.abs(direction.z)) {
          beam.rotateY(Math.PI / 2);
        }
        
        return beam;
      };
      
      // Add beams at the top
      const y = 1.9;
      group.add(createBeam(
        new THREE.Vector3(1.5, y, 1.5),
        new THREE.Vector3(1.5, y, -1.5)
      ));
      group.add(createBeam(
        new THREE.Vector3(1.5, y, -1.5),
        new THREE.Vector3(-1.5, y, -1.5)
      ));
      group.add(createBeam(
        new THREE.Vector3(-1.5, y, -1.5),
        new THREE.Vector3(-1.5, y, 1.5)
      ));
      group.add(createBeam(
        new THREE.Vector3(-1.5, y, 1.5),
        new THREE.Vector3(1.5, y, 1.5)
      ));
      
      // Middle level beams
      const y2 = 0;
      group.add(createBeam(
        new THREE.Vector3(1.5, y2, 1.5),
        new THREE.Vector3(1.5, y2, -1.5)
      ));
      group.add(createBeam(
        new THREE.Vector3(1.5, y2, -1.5),
        new THREE.Vector3(-1.5, y2, -1.5)
      ));
      group.add(createBeam(
        new THREE.Vector3(-1.5, y2, -1.5),
        new THREE.Vector3(-1.5, y2, 1.5)
      ));
      group.add(createBeam(
        new THREE.Vector3(-1.5, y2, 1.5),
        new THREE.Vector3(1.5, y2, 1.5)
      ));
      
      // Add floating holographic element
      const holoGeometry = new THREE.TorusGeometry(0.7, 0.05, 16, 100);
      const holoMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xD946EF,
        emissive: 0xD946EF,
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.8
      });
      
      const holo = new THREE.Mesh(holoGeometry, holoMaterial);
      holo.position.y = 0.5;
      holo.userData = { floatY: 0 };
      group.add(holo);
      
      return { group, holo };
    };
    
    // Create construction site
    const { group: buildingFrame, holo } = createBuildingFrame();
    scene.add(buildingFrame);
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Mouse interaction for parallax effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth camera movement based on mouse position
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;
      buildingFrame.rotation.y += 0.05 * (targetX - buildingFrame.rotation.y);
      buildingFrame.rotation.x += 0.05 * (targetY - buildingFrame.rotation.x);
      
      // Floating animation for the holographic element
      if (holo) {
        holo.userData.floatY += 0.01;
        holo.position.y = 0.5 + Math.sin(holo.userData.floatY) * 0.2;
        holo.rotation.x += 0.01;
        holo.rotation.z += 0.005;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
    };
  }, []);
  
  return <div ref={mountRef} className={`w-full h-full ${className}`}></div>;
};

export default ThreeScene;
