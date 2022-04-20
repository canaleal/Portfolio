import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Tools from '../../../components/Tools';

const Description = ({ project }) => {

    const {author, scale, title, description, tools, githublink} = project;

    return (
        <Fragment>
            <p className='font-bold'>Author:</p>
            <p className='highlight my-2 mb-4' >{author}</p>
            <p className='font-bold'>Project Scale:</p>
            <p className='my-2 mb-4'>{scale}</p>
            <p className='font-bold'>Description:</p>
            <p className='my-2 mb-4'>{description}</p>
            <p className='font-bold '>Tools:</p>
            <div className='flex my-2'>
                <Tools tools={tools} />
            </div>
            

            {
                title === 'Automobile Logo API' ?
                    <Link to="/logos" className="card-btn my-4 rounded-lg">Live Example</Link>
                    :
                    null
            }


            {
                githublink !== 'null' ?
                    <a href={githublink} target="_blank" rel="noreferrer" className="card-btn card-btn-blue my-4 rounded-lg">Code</a>
                    :
                    null
            }
        </Fragment>
    )
}


export default React.memo(Description);