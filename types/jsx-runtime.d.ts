import React from 'react';

declare global {
  namespace React {
    interface JSX {
      Element: React.ReactElement;
    }
  }
} 