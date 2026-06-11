import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import { HERO } from "../data";

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

const links = [
  { icon: <FiMail size={18}/>, label: HERO.email,   href: `mailto:${HERO.email}` },
  { icon: <FiPhone size={18}/>, label: HERO.phone,  href: `tel:${HERO.phone}` },
  { icon: <FiLinkedin size={18}/>, label: "LinkedIn", href: HERO.linkedin },
  { icon: <FiGithub size={18}/>, label: "GitHub",    href: HERO.github },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <FadeUp>
            <div style={{ width: 60, height: 3, background: "linear-gradient(135deg,#6366f1,#22d3ee)", borderRadius: 2, margin: "0 auto 16px" }} />
            <div className="section-label" style={{ textAlign: "center" }}>// let's connect</div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, marginBottom: 16 }}>
              Open to <span className="grad-text">Opportunities</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--text2)", marginBottom: 40 }}>
              I'm actively looking for software engineering internships and entry-level roles. If you're building something exciting, I'd love to talk.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
              {links.map(l => (
                <motion.a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
                  whileHover={{ y: -3, borderColor: "rgba(99,102,241,0.4)", color: "var(--indigo-l)" }}
                  style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 20px", fontSize: 14, fontWeight: 500, color: "var(--text)", textDecoration: "none" }}>
                  {l.icon} {l.label}
                </motion.a>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
