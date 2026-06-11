import React from "react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontSize: 13, color: "var(--text3)" }}>© 2025 Jakkula Tejesh. All rights reserved.</div>
        <div style={{ display: "flex", gap: 20 }}>
          {[["GitHub","https://github.com/Tejesh-sru"],["LinkedIn","https://linkedin.com/in/tejesh-jakkula123"],["LeetCode","https://leetcode.com/u/Tejeshsru"]].map(([name,url]) => (
            <a key={name} href={url} target="_blank" rel="noopener"
              style={{ fontSize: 13, color: "var(--text3)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "var(--indigo-l)"}
              onMouseLeave={e => e.target.style.color = "var(--text3)"}
            >{name}</a>
          ))}
        </div>
        <div style={{ fontSize: 13, color: "var(--text3)" }}>Made with <span style={{ color: "#fb7185" }}>♥</span> · MERN Stack Engineer</div>
      </div>
    </footer>
  );
}
