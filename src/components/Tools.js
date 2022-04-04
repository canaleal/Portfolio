

import React, { Fragment } from 'react'


const Tools = ({tools}) => {
    return (
        <div className='flex flex-wrap justify-between  '>

            {
                tools.map((tool) => {
                    return (
                        <img title={tool} key={tool} className='img-icon w-8 mx-2 py-2' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`} />
                    )
                })
            }

        </div>
    )
}


export default Tools;