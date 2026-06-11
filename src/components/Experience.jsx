import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE } from "../data";

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <FadeUp>
          <div className="section-label">// where I've worked</div>
          <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, marginBottom: 48 }}>
            Work <span className="grad-text">Experience</span>
          </h2>
        </FadeUp>

        <div style={{ position: "relative", paddingLeft: 28 }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom,#6366f1,#22d3ee,transparent)", borderRadius: 2 }} />

          {EXPERIENCE.map((exp, i) => (
            <FadeUp key={exp.company} delay={i * 0.1}>
              <div style={{ position: "relative", marginBottom: 40 }}>
                {/* Dot */}
                <div style={{ position: "absolute", left: -35, top: 6, width: 14, height: 14, background: "linear-gradient(135deg,#6366f1,#22d3ee)", borderRadius: "50%", border: "2px solid var(--bg)" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{exp.role}</div>
                    <div style={{ fontSize: 15, color: "var(--indigo-l)", fontWeight: 500 }}>{exp.company}</div>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono'", fontSize: 12, color: "var(--text3)", background: "var(--glass)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: 6 }}>
                    {exp.period} · {exp.type}
                  </div>
                </div>

                <ul style={{ listStyle: "none", marginTop: 12 }}>
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7, paddingLeft: 16, position: "relative", marginBottom: 6 }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--indigo)", fontSize: 12, top: 3 }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
