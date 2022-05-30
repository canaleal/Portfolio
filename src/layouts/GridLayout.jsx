import React from 'react';

function GridLayout({
  id = '',
  columns = '4', shadow = '', paddingY = 'py-4', paddingX = 'px-4', children,
}) {
  return (
    <section id={id} className={`grid  grid-cols-1 md:grid-cols-${columns} ${shadow} gap-4 ${paddingY} ${paddingX}`}>{children}</section>
  );
}

export default GridLayout;
