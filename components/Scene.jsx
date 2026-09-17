'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* Shared pointer + scroll state, read every frame by the meshes. */
const motion = { p: 0, tp: 0, mx: 0, my: 0, tmx: 0, tmy: 0 };
const lerp = (a, b, k) => a + (b - a) * k;

function useWindowMotion() {
  useEffect(() => {
    const onMove = (e) => {
      motion.tmx = (e.clientX / window.innerWidth) * 2 - 1;
      motion.tmy = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      motion.tp = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}

const COMMON = /* glsl */ `
  varying vec3 vN; varying vec3 vView; varying vec3 vPos;
  uniform float uTime; uniform vec3 uAccent; uniform vec2 uMouse; uniform float uAmp; uniform float uOpacity;
`;

const FRAG = /* glsl */ `
  ${COMMON}
  void main() {
    vec3 N = normalize(vN);
    vec3 V = normalize(vView);
    float f = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 2.2);
    float band = vPos.y * 1.1 + f * 2.6 + uTime * 0.08;
    vec3 irid = 0.5 + 0.5 * cos(6.28318 * (vec3(0.0, 0.28, 0.58) + band));
    vec3 chrome = vec3(0.06, 0.06, 0.08) + irid * 0.55;
    vec3 L = normalize(vec3(0.6, 0.9, 0.7));
    float spec = pow(max(dot(reflect(-L, N), V), 0.0), 48.0);
    vec3 col = chrome + uAccent * (f * 0.55) + vec3(spec) * 0.9;
    col = mix(col, uAccent, f * 0.18);
    gl_FragColor = vec4(col, uOpacity);
  }
`;

const VERT_KNOT = /* glsl */ `
  ${COMMON}
  void main() {
    vN = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = -mv.xyz;
    vPos = position;
    gl_Position = projectionMatrix * mv;
  }
`;

const VERT_BLOB = /* glsl */ `
  ${COMMON}
  vec3 disp(vec3 p) {
    float t = uTime * 0.5;
    float d = sin(p.x * 2.1 + t) * cos(p.y * 1.8 - t * 0.8) * sin(p.z * 2.4 + t * 0.6);
    float m = sin(p.x * 3.0 + uMouse.x * 3.0) * cos(p.y * 3.0 + uMouse.y * 3.0);
    return p * (1.0 + d * 0.16 * uAmp + m * 0.07 * uAmp);
  }
  void main() {
    vec3 p = disp(position);
    float e = 0.04;
    vec3 t1 = disp(position + vec3(e, 0.0, 0.0)) - p;
    vec3 t2 = disp(position + vec3(0.0, e, 0.0)) - p;
    vec3 n = normalize(mix(normal, normalize(cross(t1, t2) + normal * 0.6), 0.85));
    vN = normalize(normalMatrix * n);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vView = -mv.xyz; vPos = p;
    gl_Position = projectionMatrix * mv;
  }
`;

function useSharedUniforms(accent) {
  return useMemo(
    () => ({
      uTime: { value: 0 },
      uAccent: { value: new THREE.Color(accent) },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uAmp: { value: 1 },
      uOpacity: { value: 1 }
    }),
    [accent]
  );
}

function Sculpture({ intensity, accent }) {
  const knot = useRef();
  const blob = useRef();
  const dust = useRef();
  const shared = useSharedUniforms(accent);
  const blobUniforms = useMemo(
    () => ({ ...shared, uOpacity: { value: 0 } }),
    [shared]
  );

  const dustPositions = useMemo(() => {
    const N = 2600;
    const arr = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 3.2 + Math.random() * 7;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(ph) * Math.cos(th);
      arr[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(ph);
    }
    return arr;
  }, []);

  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    motion.p = lerp(motion.p, motion.tp, 0.07);
    motion.mx = lerp(motion.mx, motion.tmx, 0.05);
    motion.my = lerp(motion.my, motion.tmy, 0.05);
    const { p, mx, my } = motion;

    shared.uTime.value = t;
    shared.uMouse.value.set(mx, my);

    const hero = Math.min(1, p / 0.18);
    if (knot.current) {
      knot.current.position.set(
        lerp(0.9, 2.55, hero) + mx * 0.25 * intensity,
        lerp(0.15, -0.6, hero) - my * 0.18 * intensity,
        0
      );
      knot.current.scale.setScalar(lerp(1.35, 0.52, hero));
      knot.current.rotation.y = t * 0.22 * intensity + mx * 0.6;
      knot.current.rotation.x = t * 0.12 * intensity + my * 0.4;
      knot.current.rotation.z = p * 3.2 * intensity;
    }
    shared.uOpacity.value = 1 - Math.max(0, (p - 0.62) / 0.22);

    const bp = Math.max(0, Math.min(1, (p - 0.66) / 0.22));
    if (blob.current) {
      blob.current.scale.setScalar(0.001 + bp * 1.5);
      blob.current.position.set(-1.9 + mx * 0.35 * intensity, 0.1 - my * 0.25 * intensity, -0.4);
      blob.current.rotation.y = t * 0.16 * intensity;
      blob.current.rotation.x = -t * 0.1 * intensity;
    }
    blobUniforms.uOpacity.value = bp * 0.95;

    if (dust.current) {
      dust.current.rotation.y = t * 0.02 + p * 0.9 * intensity;
      dust.current.rotation.x = my * 0.08;
      dust.current.position.z = p * 3.4 * intensity;
    }

    camera.position.x = mx * 0.18 * intensity;
    camera.position.y = -my * 0.12 * intensity;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <mesh ref={knot}>
        <torusKnotGeometry args={[1.02, 0.3, 200, 28]} />
        <shaderMaterial uniforms={shared} vertexShader={VERT_KNOT} fragmentShader={FRAG} transparent />
      </mesh>

      <mesh ref={blob} scale={0.001}>
        <icosahedronGeometry args={[1.25, 22]} />
        <shaderMaterial uniforms={blobUniforms} vertexShader={VERT_BLOB} fragmentShader={FRAG} transparent />
      </mesh>

      <points ref={dust}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={dustPositions.length / 3} array={dustPositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.018}
          color="#ffffff"
          transparent
          opacity={0.45}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

export default function Scene({ intensity = 1, accent = '#c6ff4f' }) {
  useWindowMotion();
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="canvas-layer" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ fov: 42, position: [0, 0, 5.4], near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={reduced ? 'never' : 'always'}
      >
        <Sculpture intensity={reduced ? 0 : intensity} accent={accent} />
      </Canvas>
    </div>
  );
}
