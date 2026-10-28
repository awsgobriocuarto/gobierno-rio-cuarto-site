'use client';

import { useState } from 'react';
import AccessibilityButton from './AccessibilityButton';
import AccessibilityMenu from './AccessibilityMenu';
import { track } from '@/app/lib/track';


export default function AccessibilityFloatingMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    track('a11y_menu_toggle', { open: !menuOpen });
  };

  return (
    <div className="accessibilityFloatingMenu">
      <AccessibilityButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <AccessibilityMenu menuOpen={menuOpen} />
    </div>
  );
}