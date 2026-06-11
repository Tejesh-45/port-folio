import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub } from "react-icons/fi";
import { PROJECTS } from "../data";

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

const tagStyle = (color) => {
  const map = {
    indigo: { bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.2)", color: "#818cf8" },
    cyan:   { bg: "rgba(34,211,238,0.10)", border: "rgba(34,211,238,0.2)", color: "#22d3ee" },
    rose:   { bg: "rgba(251,113,133,0.10)", border: "rgba(251,113,133,0.2)", color: "#fb7185" },
  };
  return map[color] || map.indigo;
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <FadeUp>
          <div className="section-label">// what I've built</div>
          <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, marginBottom: 48 }}>
            Featured <span className="grad-text">Projects</span>
          </h2>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 24 }}>
          {PROJECTS.map((p, i) => {
            const ts = tagStyle(p.color);
            return (
              <FadeUp key={p.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6, borderColor: "rgba(99,102,241,0.3)", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}
                  style={{ background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 20, padding: 28, display: "flex", flexDirection: "column", height: "100%", position: "relative", overflow: "hidden" }}>

                  {/* Top accent bar on hover handled via CSS */}
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{p.emoji}</div>
                  <div style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8 }}>{p.name}</div>
                  <div style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{p.desc}</div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, padding: "4px 10px", background: ts.bg, border: `1px solid ${ts.border}`, borderRadius: 6, color: ts.color }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href={p.github} target="_blank" rel="noopener"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, color: "var(--text2)", textDecoration: "none", padding: "7px 14px", border: "1px solid var(--border)", borderRadius: 8, width: "fit-content", transition: "color 0.2s, border-color 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#818cf8"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                  >
                    <FiGithub size={14} /> GitHub
                  </a>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
