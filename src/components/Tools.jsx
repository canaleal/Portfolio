import React from 'react';
import returnLinkGivenIfStringContains from 'util/strip-tool-link';

function Tools({ tools, iconSize = 'w-8' }) {
  return (
    <div className="flex flex-wrap justify-between  ">

      {
        tools.map((tool) => (
          <img height="100" width="auto" title={tool} key={tool} className={`img-icon ${iconSize} mx-2 py-2`} alt="" src={returnLinkGivenIfStringContains(tool)} loading="lazy" />
        ))
      }
    </div>
  );
}

export default React.memo(Tools);
