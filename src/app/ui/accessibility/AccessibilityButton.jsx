'use client';

export default function AccessibilityButton({ toggleMenu, menuOpen }) {

  return (
    <button
      className="floatingButton"
      onClick={toggleMenu}
      aria-controls="accessibility-menu"
      aria-expanded={menuOpen}
    >
      <i className="fa-solid fa-universal-access"></i>
    </button>
  );
}