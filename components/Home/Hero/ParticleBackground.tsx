"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesHero() {
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
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 120, duration: 0.5 },
        push: { quantity: 3 },
      },
    },

    particles: {
      number: { value: 180, density: { enable: true, area: 1200 } },
      color: { value: ["#ffffff", "#9ecfff", "#ffd27f", "#b19cd9", "#80e0ff"] },
      opacity: { value: { min: 0.3, max: 0.9 }, animation: { enable: true, speed: 1.5, minimumValue: 0.3 } },
      size: { value: { min: 0.5, max: 3 }, animation: { enable: true, speed: 3, minimumValue: 0.4 } },
      move: { enable: true, speed: 0.6, direction: MoveDirection.none, random: true, outModes: { default: OutMode.out } },
      twinkle: { particles: { enable: true, frequency: 0.05, opacity: 1 } },
      shape: { type: "circle" },
    },

    emitters: [
      // 🌠 Shooting stars
      {
        position: { x: 50, y: 0 },
        size: { width: 100, height: 0, mode: "percent" },
        rate: { delay: 2.5, quantity: 1 },
        life: { count: 0 },
        particles: {
          life: { duration: { value: 1.5 }, count: 1 },
          color: { value: "#ffffff" },
          size: { value: { min: 0.7, max: 1.7 } },
          opacity: {
            value: { min: 0.4, max: 0.9 },
            animation: { enable: true, speed: 0.8, startValue: "min", destroy: "max", sync: true },
          },
          move: {
            enable: true,
            speed: { min: 130, max: 160 },
            direction: "bottom",
            angle: { offset: 20, value: 90 },
            straight: true,
            outModes: { default: OutMode.destroy },
            trail: { enable: true, length: 6, fillColor: "#ffffff" },
          },
        },
      },

      // 🌌 Subtle nebula/glow particles
      {
        direction: MoveDirection.none,
        rate: { delay: 0.2, quantity: 1 },
        position: { x: 50, y: 50 },
        size: { width: 100, height: 100 },
        particles: {
          color: { value: ["#381a71", "#261865", "#1a2b7a", "#004e92"] },
          size: { value: { min: 120, max: 250 } },
          opacity: { value: 0.03 },
          move: { enable: true, speed: 0.3, direction: MoveDirection.none, outModes: { default: OutMode.out } },
        },
      },
    ],
  }), []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 bg-linear-to-t from-[#01010a] via-[#050524] to-[#000000] overflow-hidden">
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} className="absolute inset-0" />
    </div>
  );
}
