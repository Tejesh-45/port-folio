import React from "react";
import { motion } from "framer-motion";
import { HERO } from "../data";
import profilePic from "../assets/profile_pic.jpeg";

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64, position: "relative", overflow: "hidden" }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(99,102,241,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(34,211,238,0.07) 0%, transparent 60%)"
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }} className="hero-grid">

          {/* Left content */}
          <div>
            {/* Available badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)", borderRadius: 100, padding: "6px 16px", fontSize: 13, fontFamily: "'JetBrains Mono'", color: "var(--indigo-l)", marginBottom: 24 }}>
              <span className="pulse-dot" style={{ width: 6, height: 6, background: "var(--cyan)", borderRadius: "50%", display: "inline-block" }} />
              Available for internships &amp; full-time roles
            </motion.div>

            {/* Name */}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
              style={{ fontSize: "clamp(2.8rem,6vw,4.8rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Jakkula<br /><span className="grad-text">Tejesh</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
              style={{ fontSize: "clamp(1.05rem,2vw,1.35rem)", color: "var(--text2)", fontWeight: 400, marginBottom: 28, maxWidth: 520 }}>
              {HERO.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
              style={{ display: "flex", gap: 32, marginBottom: 36, flexWrap: "wrap" }}>
              {HERO.stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, background: "linear-gradient(135deg,#6366f1,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: "var(--text3)", fontFamily: "'JetBrains Mono'", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.4 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <motion.a whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(99,102,241,0.35)" }} href="#projects"
                style={{ padding: "14px 28px", background: "linear-gradient(135deg,#6366f1,#22d3ee)", border: "none", borderRadius: 10, color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                View Projects ↓
              </motion.a>
              <motion.a whileHover={{ borderColor: "var(--indigo)", background: "rgba(99,102,241,0.08)" }} href={HERO.linkedin} target="_blank" rel="noopener"
                style={{ padding: "14px 28px", background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 10, color: "var(--text)", fontSize: 15, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                LinkedIn ↗
              </motion.a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-avatar-wrap">
            <div className="spin-slow" style={{ width: 280, height: 280, borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#22d3ee)", padding: 3 }}>
              <img src={profilePic} alt="Jakkula Tejesh"
                style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", border: "4px solid var(--bg)", display: "block" }} />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } .hero-avatar-wrap { display: none !important; } }
      `}</style>
    </section>
  );
}
