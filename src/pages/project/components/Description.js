import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Tools from '../../../components/Tools';

const Description = ({project}) => {
    return (
        <Fragment>
            <p className='font-bold'>Author:</p>
            <p className='highlight my-2 mb-4' >{project.author}</p>
            <p className='font-bold'>Project Scale:</p>
            <p className='my-2 mb-4'>{project.scale}</p>
            <p className='font-bold'>Description:</p>
            <p className='my-2 mb-4'>{project.description}</p>
            <p className='font-bold '>Tools:</p>
            <div className='flex my-2'>

                <Tools tools={project.tools} />
             

            </div>
        </Fragment>
    )
}


export default Description;