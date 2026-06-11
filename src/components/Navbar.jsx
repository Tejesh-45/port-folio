import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(8,12,20,0.92)" : "rgba(8,12,20,0.6)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.3s",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#hero" style={{ fontFamily: "'JetBrains Mono'", fontSize: 18, fontWeight: 500, color: "var(--text)", textDecoration: "none" }}>
            <span style={{ color: "var(--indigo)" }}>&lt;</span>tejesh<span style={{ color: "var(--indigo)" }}> /&gt;</span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0 }} className="hide-mobile">
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} style={{ fontSize: 14, fontWeight: 500, color: "var(--text2)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "var(--text)"}
                  onMouseLeave={e => e.target.style.color = "var(--text2)"}
                >{l}</a>
              </li>
            ))}
          </ul>

          <a href="mailto:jakkulatejesh2005@gmail.com"
            style={{ padding: "8px 20px", background: "linear-gradient(135deg,#6366f1,#22d3ee)", border: "none", borderRadius: 8, color: "#fff", fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
            className="hide-mobile"
          >Hire Me</a>

          {/* Hamburger */}
          <button onClick={() => setOpen(o => !o)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 4 }}
            className="show-mobile hamburger"
          >
            <span style={{ width: 22, height: 2, background: "var(--text2)", borderRadius: 2, display: "block", transition: "0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ width: 22, height: 2, background: "var(--text2)", borderRadius: 2, display: "block", transition: "0.3s", opacity: open ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: "var(--text2)", borderRadius: 2, display: "block", transition: "0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            style={{ position: "fixed", top: 64, left: 0, right: 0, zIndex: 99, background: "rgba(8,12,20,0.97)", borderBottom: "1px solid var(--border)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 20 }}
          >
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                style={{ color: "var(--text2)", textDecoration: "none", fontSize: 16, fontWeight: 500 }}
              >{l}</a>
            ))}
            <a href="mailto:jakkulatejesh2005@gmail.com"
              style={{ padding: "10px 20px", background: "linear-gradient(135deg,#6366f1,#22d3ee)", borderRadius: 8, color: "#fff", fontWeight: 600, textDecoration: "none", textAlign: "center" }}
            >Hire Me</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .hide-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
