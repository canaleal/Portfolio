import React from 'react';

function GridLayout({ children }) {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 py-4 px-4">{children}</div>
  );
}

export default GridLayout;
