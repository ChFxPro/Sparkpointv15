'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type MotionPreference = 'system' | 'reduce' | 'no-preference';

interface AccessibilityContextType {
  motionPreference: MotionPreference;
  setMotionPreference: (pref: MotionPreference) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [motionPreference, setMotionPreference] = useState<MotionPreference>('system');

  useEffect(() => {
    const stored = localStorage.getItem('sparkpoint-motion-pref');
    if (stored === 'reduce' || stored === 'no-preference') {
      setMotionPreference(stored as MotionPreference);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('reduce-motion', 'no-preference-motion');

    if (motionPreference === 'reduce') {
      document.documentElement.classList.add('reduce-motion');
    } else if (motionPreference === 'no-preference') {
      document.documentElement.classList.add('no-preference-motion');
    }
  }, [motionPreference]);

  const updatePreference = (pref: MotionPreference) => {
    setMotionPreference(pref);
    if (pref === 'system') {
      localStorage.removeItem('sparkpoint-motion-pref');
    } else {
      localStorage.setItem('sparkpoint-motion-pref', pref);
    }
  };

  return (
    <AccessibilityContext.Provider value={{ motionPreference, setMotionPreference: updatePreference }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
