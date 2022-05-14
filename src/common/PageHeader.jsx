import React from 'react';

function PageHeader({ title, color, rounded = '' }) {
  return (
    <div className={`${color} ${rounded}  py-5 text-center text-white sticky`}>
      <h1 className="text-4xl  ">{title}</h1>
    </div>

  );
}

export default React.memo(PageHeader);
