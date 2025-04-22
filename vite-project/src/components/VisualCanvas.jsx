import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { initThreeJS } from '../utils/threejsUtils';

function VisualCanvas({ visual }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const { scene, camera, renderer, cube } = initThreeJS();
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [visual]);

  return <div ref={mountRef} className="mt-4" />;
}

export default VisualCanvas;