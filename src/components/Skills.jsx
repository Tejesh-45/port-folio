import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "../data";

const dotColor = { indigo: "#6366f1", cyan: "#22d3ee", rose: "#fb7185", amber: "#fbbf24", green: "#4ade80" };

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <FadeUp>
          <div className="section-label">// what I work with</div>
          <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, marginBottom: 48 }}>
            Technical <span className="grad-text">Skills</span>
          </h2>
        </FadeUp>

        {SKILLS.map((group, gi) => (
          <FadeUp key={group.category} delay={gi * 0.07}>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text3)", marginBottom: 14 }}>
                {group.category}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {group.items.map((item, ii) => (
                  <motion.div key={item} whileHover={{ y: -2, borderColor: "rgba(99,102,241,0.3)" }}
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: gi * 0.07 + ii * 0.05 }}
                    style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 10, padding: "12px 16px", fontSize: 14, fontWeight: 500, cursor: "default" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: dotColor[group.color] || "#6366f1", flexShrink: 0 }} />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
