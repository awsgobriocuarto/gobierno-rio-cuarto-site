'use client';

import { useState } from 'react';
import AccessibilityButton from './AccessibilityButton';
import AccessibilityMenu from './AccessibilityMenu';


export default function AccessibilityFloatingMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };

  return (
    <div className="accessibilityFloatingMenu">
      <AccessibilityButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <AccessibilityMenu menuOpen={menuOpen} />
    </div>
  );
}