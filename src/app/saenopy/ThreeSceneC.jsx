"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import { loadNpy } from "./load_numpy";

function set_camera(scene, r, theta_deg, phi_deg) {
  let camera = scene.camera;

  // Convert current camera position to spherical coordinates
  const currentSpherical = new THREE.Spherical().setFromVector3(
    camera.position,
  );

  // Only update radius if `r` is provided
  const radius = r !== undefined ? r : currentSpherical.radius;

  // Convert degrees to radians, and only update if values are provided
  let theta =
    theta_deg !== undefined
      ? (theta_deg * Math.PI) / 180
      : currentSpherical.theta;
  let phi =
    phi_deg !== undefined ? (phi_deg * Math.PI) / 180 : currentSpherical.phi; // Assuming phi is always provided for simplicity

  // Convert spherical to Cartesian coordinates for the camera position
  const spherical = new THREE.Spherical(radius, phi, theta);
  const position = new THREE.Vector3().setFromSpherical(spherical);

  // Set camera position
  camera.position.set(position.x, position.y, position.z);

  // Make the camera look at the scene center or any other point of interest
  camera.lookAt(scene.position);
}

function add_cube(scene, w, h, d) {
  // Cube setup
  const geometry = new THREE.BoxGeometry(w, d, h);
  const wireframe = new THREE.EdgesGeometry(geometry);
  const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  let cube = new THREE.LineSegments(wireframe, material);
  scene.add(cube);
}

function pad_zero(num, places) {
  return String(num).padStart(places, "0");
}

function add_image(scene, w, h, d, factor) {
  // Image setup
  const imageGeometry = new THREE.PlaneGeometry(w, h);

  const loadedTextures = [];
  for (let i = 0; i < 188; i++) {
    const texture = new THREE.TextureLoader().load(
      `stack/compressed/${pad_zero(i + 1, 3)}.jpg`,
    );
    loadedTextures.push(texture);
  }
  //setTextures(loadedTextures);
  //const texture = new THREE.TextureLoader().load(`stack/${pad_zero(parseInt(factor * 100), 3)}.jpg`);
  const imageMaterial = new THREE.MeshBasicMaterial({ map: loadedTextures[0] });
  let imagePlane = new THREE.Mesh(imageGeometry, imageMaterial);
  imagePlane.position.y = -d / 2 + factor * d; // Custom Z position
  imagePlane.rotation.x = -Math.PI / 2;
  scene.add(imagePlane);

  function image_anim() {
    factor = (factor + 0.001) % 1;
    imagePlane.position.y = -d / 2 + factor * d; // Custom Z position
    imagePlane.material.map = loadedTextures[Math.floor(factor * 188)];
  }
  return image_anim;
}

const ThreeSceneC = ({ className }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Function to update the div dimensions state

    let w = 2;
    let h = 2;
    let d = 1.5;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      15,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement); // Attach the renderer to the DOM
    scene.camera = camera;

    const updateDimensions = () => {
      console.log("Updating dimensions", mountRef.current);
      if (mountRef.current) {
        let container = mountRef.current;
        let width = container.clientWidth;
        let height = container.clientHeight - 4;

        // Update camera aspect ratio
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        // Update renderer size
        renderer.setSize(width, height);
      }
    };

    // Initial dimensions update and setup of Three.js scene
    updateDimensions();
    window.addEventListener("resize", updateDimensions); // Update dimensions on window resize

    add_cube(scene, w, h, d);
    //let image_anim = add_image(scene, w, h, d, 0.4);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    scene.controls = controls;
    set_camera(scene, 10, 30, 20);

    async function add_arrows() {
      const w = 0.005;
      const arrowGeometry = new THREE.ConeGeometry(w * 2, 1, 6); // Cone geometry for the arrowhead
      const cylinderGeometry = new THREE.CylinderGeometry(w, w, 1, 6); // Cylinder geometry for the arrow shaft
      const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const instancedMesh = new THREE.InstancedMesh(
        arrowGeometry,
        material,
        1000,
      ); // 1000 arrows

      // Positioning the arrows

      console.log("Adding arrows");
      let nodes = await loadNpy("vector_data/nodes.npy");
      let vectors = await loadNpy("vector_data/vectorsF.npy");
      let vector_colors = await loadNpy("vector_data/vectorsF_color.npy");
      let vector_length = await loadNpy("vector_data/vectorsF_length.npy");
      let cmap = [
        0x30123b, 0x321543, 0x33184a, 0x341b51, 0x351e58, 0x36215f, 0x372466,
        0x38276d, 0x392a73, 0x3a2d79, 0x3b2f80, 0x3c3286, 0x3d358b, 0x3e3891,
        0x3f3b97, 0x3f3e9c, 0x4040a2, 0x4143a7, 0x4146ac, 0x4249b1, 0x424bb5,
        0x434eba, 0x4451bf, 0x4454c3, 0x4456c7, 0x4559cb, 0x455ccf, 0x455ed3,
        0x4661d6, 0x4664da, 0x4666dd, 0x4669e0, 0x466be3, 0x476ee6, 0x4771e9,
        0x4773eb, 0x4776ee, 0x4778f0, 0x477bf2, 0x467df4, 0x4680f6, 0x4682f8,
        0x4685fa, 0x4687fb, 0x458afc, 0x458cfd, 0x448ffe, 0x4391fe, 0x4294ff,
        0x4196ff, 0x4099ff, 0x3e9bfe, 0x3d9efe, 0x3ba0fd, 0x3aa3fc, 0x38a5fb,
        0x37a8fa, 0x35abf8, 0x33adf7, 0x31aff5, 0x2fb2f4, 0x2eb4f2, 0x2cb7f0,
        0x2ab9ee, 0x28bceb, 0x27bee9, 0x25c0e7, 0x23c3e4, 0x22c5e2, 0x20c7df,
        0x1fc9dd, 0x1ecbda, 0x1ccdd8, 0x1bd0d5, 0x1ad2d2, 0x1ad4d0, 0x19d5cd,
        0x18d7ca, 0x18d9c8, 0x18dbc5, 0x18ddc2, 0x18dec0, 0x18e0bd, 0x19e2bb,
        0x19e3b9, 0x1ae4b6, 0x1ce6b4, 0x1de7b2, 0x1fe9af, 0x20eaac, 0x22ebaa,
        0x25eca7, 0x27eea4, 0x2aefa1, 0x2cf09e, 0x2ff19b, 0x32f298, 0x35f394,
        0x38f491, 0x3cf58e, 0x3ff68a, 0x43f787, 0x46f884, 0x4af880, 0x4ef97d,
        0x52fa7a, 0x55fa76, 0x59fb73, 0x5dfc6f, 0x61fc6c, 0x65fd69, 0x69fd66,
        0x6dfe62, 0x71fe5f, 0x75fe5c, 0x79fe59, 0x7dff56, 0x80ff53, 0x84ff51,
        0x88ff4e, 0x8bff4b, 0x8fff49, 0x92ff47, 0x96fe44, 0x99fe42, 0x9cfe40,
        0x9ffd3f, 0xa1fd3d, 0xa4fc3c, 0xa7fc3a, 0xa9fb39, 0xacfb38, 0xaffa37,
        0xb1f936, 0xb4f836, 0xb7f735, 0xb9f635, 0xbcf534, 0xbef434, 0xc1f334,
        0xc3f134, 0xc6f034, 0xc8ef34, 0xcbed34, 0xcdec34, 0xd0ea34, 0xd2e935,
        0xd4e735, 0xd7e535, 0xd9e436, 0xdbe236, 0xdde037, 0xdfdf37, 0xe1dd37,
        0xe3db38, 0xe5d938, 0xe7d739, 0xe9d539, 0xebd339, 0xecd13a, 0xeecf3a,
        0xefcd3a, 0xf1cb3a, 0xf2c93a, 0xf4c73a, 0xf5c53a, 0xf6c33a, 0xf7c13a,
        0xf8be39, 0xf9bc39, 0xfaba39, 0xfbb838, 0xfbb637, 0xfcb336, 0xfcb136,
        0xfdae35, 0xfdac34, 0xfea933, 0xfea732, 0xfea431, 0xfea130, 0xfe9e2f,
        0xfe9b2d, 0xfe992c, 0xfe962b, 0xfe932a, 0xfe9029, 0xfd8d27, 0xfd8a26,
        0xfc8725, 0xfc8423, 0xfb8122, 0xfb7e21, 0xfa7b1f, 0xf9781e, 0xf9751d,
        0xf8721c, 0xf76f1a, 0xf66c19, 0xf56918, 0xf46617, 0xf36315, 0xf26014,
        0xf15d13, 0xf05b12, 0xef5811, 0xed5510, 0xec530f, 0xeb500e, 0xea4e0d,
        0xe84b0c, 0xe7490c, 0xe5470b, 0xe4450a, 0xe2430a, 0xe14109, 0xdf3f08,
        0xdd3d08, 0xdc3b07, 0xda3907, 0xd83706, 0xd63506, 0xd43305, 0xd23105,
        0xd02f05, 0xce2d04, 0xcc2b04, 0xca2a04, 0xc82803, 0xc52603, 0xc32503,
        0xc12302, 0xbe2102, 0xbc2002, 0xb91e02, 0xb71d02, 0xb41b01, 0xb21a01,
        0xaf1801, 0xac1701, 0xa91601, 0xa71401, 0xa41301, 0xa11201, 0x9e1001,
        0x9b0f01, 0x980e01, 0x950d01, 0x920b01, 0x8e0a01, 0x8b0902, 0x880802,
        0x850702, 0x810602, 0x7e0502, 0x7a0403,
      ];

      const materials = cmap.map(
        (color) => new THREE.MeshBasicMaterial({ color: color }),
      );

      let arrowHeadLength = 0.02;
      let arrowHeadWidth = 0.02;

      const dummy = new THREE.Object3D();
      for (let i = 0; i < vectors.length / 3; i++) {
        const origin = new THREE.Vector3(
          nodes[i * 3],
          nodes[i * 3 + 1],
          nodes[i * 3 + 2],
        );
        const direction = new THREE.Vector3(
          vectors[i * 3],
          vectors[i * 3 + 1],
          vectors[i * 3 + 2],
        );
        //const color = cmap[index];
        const material = materials[vector_colors[i]];

        const length = direction.length() * 2;
        const origin2 = origin
          .clone()
          .add(direction.clone().multiplyScalar(0.8));
        const arrow = new THREE.InstancedMesh(arrowGeometry, material, 1); // Creating a single instance for simplicity in this example

        // Scale arrow according to the direction vector's length
        const scale = length; // Assuming the arrow's length should match the vector's length
        const width = length * 20;
        arrow.scale.set(width, length * 0.2 * 1, width);

        // Orient arrow
        const orientation = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          direction.normalize(),
        );
        arrow.setRotationFromQuaternion(orientation);

        // Position arrow
        arrow.position.copy(origin2);

        scene.add(arrow);

        const arrowStem = new THREE.InstancedMesh(
          cylinderGeometry,
          material,
          1,
        ); // Creating a single instance for simplicity in this example

        // Scale arrow according to the direction vector's length
        //const scale = length; // Assuming the arrow's length should match the vector's length
        arrowStem.scale.set(width, length * 0.8 * 1, width);

        // Orient arrow
        //const orientation = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
        arrowStem.setRotationFromQuaternion(orientation);

        // Position arrow
        arrowStem.position.copy(origin);

        scene.add(arrowStem);
      }
    }
    add_arrows();
    let positions = [
      [0, 0, 0],
      [1, 0, 0],
      [1, 0.5, 0],
    ];
    let directions = [
      [1, 0, 0],
      [1, 1, 0],
      [1, 0, 1],
    ];
    let arrowLength = [0.1, 0.2, 0.3];
    let arrowColor = 0xff0000;
    let arrowHeadLength = 0.1;
    let arrowHeadWidth = 0.1;

    // Animation loop
    let frameId;
    let last_top_pos = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      ///cube.rotation.x += 0.01;
      //cube.rotation.y += 0.01;
      //image_anim();

      if (mountRef.current.getBoundingClientRect().top !== last_top_pos) {
        let factor =
          mountRef.current.getBoundingClientRect().top / window.innerHeight;
        set_camera(scene, undefined, undefined, 90 - 40 * factor);
        last_top_pos = mountRef.current.getBoundingClientRect().top;
      }
      renderer.render(scene, camera);
    };
    window.set_camera = set_camera;
    window.scene = scene;
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId); // Stop the animation
      mountRef.current.removeChild(renderer.domElement); // Remove the renderer from the DOM
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return <div className={className} ref={mountRef}></div>;
};

export default ThreeSceneC;
