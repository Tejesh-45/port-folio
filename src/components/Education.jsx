import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { EDUCATION } from "../data";

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" style={{ padding: "100px 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <FadeUp>
          <div className="section-label">// academic background</div>
          <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, marginBottom: 48 }}>Education</h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <motion.div whileHover={{ borderColor: "rgba(99,102,241,0.25)" }}
            style={{ background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 20, padding: 28 }}>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ width: 52, height: 52, flexShrink: 0, background: "linear-gradient(135deg,#6366f1,#22d3ee)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                🎓
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{EDUCATION.degree}</div>
                <div style={{ fontSize: 15, color: "var(--indigo-l)", marginBottom: 10 }}>{EDUCATION.university}</div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 12, padding: "4px 12px", borderRadius: 6, background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.2)", color: "#4ade80" }}>
                    CGPA {EDUCATION.gpa}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono'", fontSize: 12, padding: "4px 12px", borderRadius: 6, background: "var(--glass)", border: "1px solid var(--border)", color: "var(--text2)" }}>
                    {EDUCATION.period}
                  </span>
                </div>

                <div style={{ marginTop: 16 }}>
                  <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text3)", marginBottom: 10 }}>
                    Relevant Coursework
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {EDUCATION.coursework.map(c => (
                      <span key={c} style={{ fontSize: 12, padding: "4px 10px", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)", borderRadius: 6, color: "var(--text2)" }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
