import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Tools from '../../../components/Tools';

const Description = ({ project }) => {
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
            

            {
                project.title === 'Automobile Logo API' ?
                    <Link to="/logos" className="card-btn my-4 rounded-lg">Live Example</Link>
                    :
                    null
            }


            {
                project.githublink !== 'null' ?
                    <a href={project.githublink} target="_blank" rel="noreferrer" className="card-btn card-btn-blue my-4 rounded-lg">Code</a>
                    :
                    null
            }
        </Fragment>
    )
}


export default React.memo(Description);