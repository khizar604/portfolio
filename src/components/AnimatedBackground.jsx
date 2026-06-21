import { motion } from "framer-motion";

const particles = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 5,
}));

const orbs = [
  { color: "rgba(34,211,238,0.15)", size: 400, x: "10%", y: "20%", duration: 18 },
  { color: "rgba(168,85,247,0.12)", size: 350, x: "70%", y: "10%", duration: 22 },
  { color: "rgba(244,114,182,0.1)", size: 300, x: "60%", y: "60%", duration: 20 },
  { color: "rgba(99,102,241,0.1)", size: 280, x: "20%", y: "70%", duration: 25 },
];

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora blobs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated gradient mesh overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(34,211,238,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(244,114,182,0.06) 0%, transparent 50%)",
        }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating grid */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background:
              p.id % 3 === 0
                ? "rgba(34,211,238,0.5)"
                : p.id % 3 === 1
                  ? "rgba(168,85,247,0.5)"
                  : "rgba(244,114,182,0.4)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.sin(p.id) * 20, 0],
            opacity: [0.1, 0.7, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ top: `${20 + i * 25}%`, left: "-5%" }}
          animate={{
            x: ["0vw", "110vw"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 4 + 2,
            ease: "easeIn",
          }}
        />
      ))}

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </div>
  );
}
