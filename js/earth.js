/**
 * 3D Earth Animation with Three.js
 * Features: Auto-rotation, mouse parallax, interactive globe
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    console.log('Reduced motion preferred - Earth animation disabled');
    return;
  }

  // Wait for Three.js to load
  if (typeof THREE === 'undefined') {
    console.error('Three.js not loaded');
    return;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEarth);
  } else {
    initEarth();
  }

  function initEarth() {
    const canvas = document.getElementById('earth-canvas');
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Earth sphere geometry
    const isMobile = window.innerWidth < 768;
    const segments = isMobile ? 32 : 64; // Reduce quality on mobile
    const geometry = new THREE.SphereGeometry(2, segments, segments);

    // Earth material
    const material = new THREE.MeshStandardMaterial({
      color: 0x3B82F6, // Primary blue
      metalness: 0.3,
      roughness: 0.7,
      wireframe: false
    });

    // Create mesh
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xE6F0FF, 0.4);
    scene.add(ambientLight);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation loop
    let animationId;
    function animate() {
      animationId = requestAnimationFrame(animate);

      // Auto-rotation
      earth.rotation.y += 0.001;

      // Smooth parallax following
      targetX = mouseX * 0.3;
      targetY = mouseY * 0.3;
      earth.position.x += (targetX - earth.position.x) * 0.1;
      earth.position.y += (targetY - earth.position.y) * 0.1;

      renderer.render(scene, camera);
    }

    // Start animation
    animate();

    // Handle window resize
    function handleResize() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener('resize', handleResize);

    // Pause animation when tab is inactive (performance optimization)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    });

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    });

    console.log('3D Earth animation initialized');
  }
})();
