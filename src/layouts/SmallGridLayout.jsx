import React from 'react';

function SmallGridLayout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shadow-xl px-5 my-4">{children}</div>
  );
}

export default SmallGridLayout;
