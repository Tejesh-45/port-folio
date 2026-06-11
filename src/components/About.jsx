import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT, HIGHLIGHTS } from "../data";

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <FadeUp>
          <div className="section-label">// who I am</div>
          <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, marginBottom: 48 }}>
            About <span className="grad-text">Me</span>
          </h2>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="about-grid">
          <FadeUp delay={0.1}>
            {ABOUT.map((p, i) => (
              <p key={i} style={{ fontSize: 16, color: "var(--text2)", lineHeight: 1.85, marginBottom: i < ABOUT.length - 1 ? 16 : 0 }}>{p}</p>
            ))}
          </FadeUp>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {HIGHLIGHTS.map((h, i) => (
              <FadeUp key={h.title} delay={0.15 + i * 0.08}>
                <motion.div whileHover={{ borderColor: "rgba(99,102,241,0.3)" }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 22, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{h.icon}</div>
                  <div>
                    <strong style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>{h.title}</strong>
                    <span style={{ fontSize: 13, color: "var(--text3)" }}>{h.sub}</span>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
