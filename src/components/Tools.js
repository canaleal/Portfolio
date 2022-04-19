

import React from 'react'

const Tools = ({ tools }) => {


    const returnLinkGivenIfStringContains = (tool_string) => {
        if (tool_string.includes('plain')) {
            const temp_string = tool_string.replace('-plain', '')
            return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${temp_string}/${temp_string}-plain.svg`;
        }
        else {
            return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool_string}/${tool_string}-original.svg`;
        }
    }

    return (
        <div className='flex flex-wrap justify-between  '>

            {
                tools.map((tool) => {
                    return (
                        <img height='100' width='auto' title={tool} key={tool} className='img-icon w-8 mx-2 py-2' alt='' src={returnLinkGivenIfStringContains(tool)} loading="lazy"/>
                    )
                })
            }

        </div>
    )
}


export default  React.memo(Tools);