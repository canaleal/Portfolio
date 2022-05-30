import React from 'react';

function GridLayout({
  id = '',
  columns = ' md:grid-cols-4', shadow = '', paddingY = 'py-4', paddingX = 'px-4', children,
}) {
  return (
    <div id={id} className={`grid  grid-cols-1 ${columns} ${shadow} gap-4 ${paddingY} ${paddingX}`}>{children}</div>
  );
}

export default GridLayout;
