"use client";

import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

export function useShader(fragment: string) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: false,
      dpr: Math.min(window.devicePixelRatio, 2),
    });

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    el.appendChild(gl.canvas);
    gl.canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%';

    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        void main() {
          gl_Position = vec4(position, 0, 1);
        }
      `,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: [0, 0] },
      },
      transparent: true,
    });

    console.log(program)

    const mesh = new Mesh(gl, { geometry: new Triangle(gl) });
    mesh.program = program;

    const ro = new ResizeObserver(() => {
      if (!el.offsetWidth || !el.offsetHeight) return;
      renderer.setSize(el.offsetWidth, el.offsetHeight);
      program.uniforms.iResolution.value = [gl.canvas.width, gl.canvas.height];
    });

    ro.observe(el);
    renderer.setSize(el.offsetWidth, el.offsetHeight);
    program.uniforms.iResolution.value = [gl.canvas.width, gl.canvas.height];

    let rafId: number;
    const update = (t: number) => {
      rafId = requestAnimationFrame(update);
      program.uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    };

    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      if (el.contains(gl.canvas)) el.removeChild(gl.canvas);
    };
  }, [fragment]);

  return mountRef;
}
