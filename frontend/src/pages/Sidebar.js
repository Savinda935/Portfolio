import React from 'react';

const Header = ({ sections, activeSection, onSectionClick }) => (
  <header style={{
    width: '100%',
    height: '64px',
    backgroundColor: '#1e1e2f',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 32 }}>
      <span style={{ fontWeight: 'bold', fontSize: 24, letterSpacing: 2 }}>DS</span>
    </div>
    <nav style={{ display: 'flex', alignItems: 'center', gap: 24, marginRight: 32 }}>
      {sections.map(section => (
        <button
          key={section.id}
          style={{
            background: 'none',
            border: 'none',
            color: activeSection === section.id ? '#ff3366' : '#fff',
            fontWeight: activeSection === section.id ? 700 : 500,
            fontSize: 16,
            padding: '8px 16px',
            borderRadius: 6,
            cursor: 'pointer',
            transition: 'color 0.2s, background 0.2s',
            backgroundColor: activeSection === section.id ? 'rgba(255,51,102,0.08)' : 'transparent',
          }}
          onClick={() => onSectionClick(section.id)}
        >
          {section.label}
        </button>
      ))}
    </nav>
  </header>
);

export default Header;
