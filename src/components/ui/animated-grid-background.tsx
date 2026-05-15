"use client";

import { useShader } from '@/hooks/use-shader';

const SHADER = `
  precision highp float;
  uniform float iTime;
  uniform vec2 iResolution;

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord - 0.5 * iResolution.xy) / iResolution.y;
    float d = max(abs(uv.x), abs(uv.y));
    float ring = 0.5 + 0.5 * cos(7.0 * d - iTime * 3.0);

    vec3 color = mix(vec3(0.1), vec3(0.506, 0.169, 1.0), ring);
    vec2 grid = fract(uv * 12.0);

    float w = 0.005;

    float border =
      step(grid.x, w) +
      step(1.0 - w, grid.x) +
      step(grid.y, w) +
      step(1.0 - w, grid.y);

    border = clamp(border, 0.0, 1.0);

    float baseOpacity = 0.2;
    float ringOpacity = 0.5;
    float opacity = mix(baseOpacity, ringOpacity, ring);

    fragColor = border * vec4(color, opacity);
  }

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }
`;

export function AnimatedGrid() {
  const ref = useShader(SHADER);

  return (
    <div
      ref={ref}
      className="absolute -z-1 w-screen h-screen top-0 left-0"
      style={{ position: 'absolute' }}
    >
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,rgb(0,0,0))] bg-black z-10" />
    </div>
  );
}
