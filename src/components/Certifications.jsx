import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CERTIFICATIONS } from "../data";

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

const logoStyle = {
  ms:  { background: "rgba(0,120,212,0.15)", border: "1px solid rgba(0,120,212,0.3)", color: "#2196f3" },
  aws: { background: "rgba(255,153,0,0.15)",  border: "1px solid rgba(255,153,0,0.3)",  color: "#ff9900" },
};

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "100px 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <FadeUp>
          <div className="section-label">// credentials</div>
          <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, marginBottom: 48 }}>Certifications</h2>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
          {CERTIFICATIONS.map((c, i) => (
            <FadeUp key={c.name} delay={i * 0.1}>
              <motion.a href={c.link} target="_blank" rel="noopener" whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.3)" }}
                style={{ background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 20, padding: 24, display: "flex", alignItems: "center", gap: 16, textDecoration: "none", color: "inherit" }}>
                <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, ...logoStyle[c.type] }}>
                  {c.logo}
                </div>
                <div style={{ flex: 1 }}>
                  <strong style={{ fontSize: 14, fontWeight: 600, display: "block", marginBottom: 4 }}>{c.name}</strong>
                  <span style={{ fontSize: 12, color: "var(--text3)", display: "block" }}>{c.issuer}</span>
                  <span style={{ fontSize: 11, color: "#6366f1", display: "block", marginTop: 2 }}>Credly Verified ↗</span>
                </div>
                <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono'", padding: "3px 8px", borderRadius: 4, background: "rgba(74,222,128,0.1)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.2)", flexShrink: 0 }}>
                  Active
                </span>
              </motion.a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
