import React from 'react';

function Tools({ tools }) {
  const returnLinkGivenIfStringContains = (toolString) => {
    if (toolString.includes('plain')) {
      const tempString = toolString.replace('-plain', '');
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tempString}/${tempString}-plain.svg`;
    }

    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${toolString}/${toolString}-original.svg`;
  };

  return (
    <div className="flex flex-wrap justify-between  ">

      {
        tools.map((tool) => (
          <img height="100" width="auto" title={tool} key={tool} className="img-icon w-8 mx-2 py-2" alt="" src={returnLinkGivenIfStringContains(tool)} loading="lazy" />
        ))
      }

    </div>
  );
}

export default React.memo(Tools);
