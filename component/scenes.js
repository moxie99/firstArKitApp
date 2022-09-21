import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpoTHREE, { THREE } from "expo-three";
import { View as GraphicsView } from "expo-graphics";

const scenes = () => {
    AR.setPlaneDetection(AR.PlaneDetectionTypes.Horizontal);
  onContextCreate = async ({ gl, scale: pixelRatio, width, height }) => {
    // Create a 3D renderer
    this.renderer = new ExpoTHREE.Renderer({
      gl,
      pixelRatio,
      width,
      height,
    });
  };

  componentDidMount(){
  // Turn off extra warnings
  THREE.suppressExpoWarnings(true);
  ThreeAR.suppressWarnings();
};

// We will add all of our meshes to this scene.
this.scene = new THREE.Scene();
// A generic camera
this.camera = new ThreeAR.Camera(width, height, 0.01, 1000);

  // Make a cube - notice that each unit is 1 meter in real life, we will make our box 0.1 meters
const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
// Simple color material
const material = new THREE.MeshPhongMaterial({
  color: 0xff00ff,
});
    
// Combine our geometry and material
this.cube = new THREE.Mesh(geometry, material);
// Place the box 0.4 meters in front of us.
this.cube.position.z = -0.4
// Add the cube to the scene
this.scene.add(this.cube);
this.scene.background = new ThreeAR.BackgroundTexture(this.renderer);

this.scene.add(new THREE.AmbientLight(0xffffff));
// In the outer scope after `onContextCreate`

onRender = () => {
  this.renderer.render(this.scene, this.camera);
};
  return (
    <GraphicsView style={{ flex: 1 }} onContextCreate={this.onContextCreate} onRender={this.onRender} isArEnabled
  arTrackingConfiguration={AR.TrackingConfigurations.World}
  // Bonus: debug props
  isArRunningStateEnabled
  isArCameraStateEnabled/>
  );
};

export default scenes;

const styles = StyleSheet.create({});
