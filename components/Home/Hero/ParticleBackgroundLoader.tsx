"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesLoader() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fullScreen: { enable: false },
    fpsLimit: 60,
    detectRetina: true,

    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },

    particles: {
      number: { value: 120, density: { enable: true, area: 1200 } },
      color: { value: ["#ffffff", "#9ecfff", "#ffd27f", "#b19cd9", "#80e0ff"] },
      opacity: { value: { min: 0.3, max: 0.8 }, animation: { enable: true, speed: 0.3, minimumValue: 0.3 } },
      size: { value: { min: 0.5, max: 2.5 }, animation: { enable: true, speed: 0.5, minimumValue: 0.4 } },
      move: { enable: true, speed: 0.15, direction: MoveDirection.none, random: true, outModes: { default: OutMode.out } },
      shape: { type: "circle" },
    },

    emitters: [
      // 🌠 Shooting stars - slower
      {
        position: { x: 50, y: 0 },
        size: { width: 100, height: 0, mode: "percent" },
        rate: { delay: 4, quantity: 1 },
        life: { count: 0 },
        particles: {
          life: { duration: { value: 2 }, count: 1 },
          color: { value: "#ffffff" },
          size: { value: { min: 0.5, max: 1.2 } },
          opacity: {
            value: { min: 0.3, max: 0.7 },
            animation: { enable: true, speed: 0.5, startValue: "min", destroy: "max", sync: true },
          },
          move: {
            enable: true,
            speed: { min: 80, max: 100 },
            direction: "bottom",
            angle: { offset: 20, value: 90 },
            straight: true,
            outModes: { default: OutMode.destroy },
            trail: { enable: true, length: 4, fillColor: "#ffffff" },
          },
        },
      },

      // 🌌 Subtle nebula/glow particles - slower
      {
        direction: MoveDirection.none,
        rate: { delay: 0.3, quantity: 1 },
        position: { x: 50, y: 50 },
        size: { width: 100, height: 100 },
        particles: {
          color: { value: ["#381a71", "#261865", "#1a2b7a", "#004e92"] },
          size: { value: { min: 100, max: 200 } },
          opacity: { value: 0.02 },
          move: { enable: true, speed: 0.15, direction: MoveDirection.none, outModes: { default: OutMode.out } },
        },
      },
    ],
  }), []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 bg-linear-to-t from-[#01010a] via-[#050524] to-[#000000] overflow-hidden">
      <Particles id="tsparticles-loader" particlesLoaded={particlesLoaded} options={options} className="absolute inset-0" />
    </div>
  );
}
