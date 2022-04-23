import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Tools from '../../../components/Tools';

const ProjectPageDescription = ({ project }) => {

    const {author, scale, title, description, tools, githublink} = project;



    
  const returnLinkComponentGivenGithubLink = (githublink) => {

    if (githublink !== 'null') {
      return <a href={githublink} target="_blank" rel="noreferrer" className="card-btn card-btn-blue my-4 ml-2 rounded-lg">Code</a>
    }
    else {
      return null;
    }
  }
    

    const returnLinkComponentGivenTitle = (title) => {


        switch (title) {
          case 'Automobile Logo API':
            return <Link to="/logos" className="card-btn card-btn-green my-4 ml-2 rounded-lg">Example</Link>
          case 'Portfolio Website':
            return <Link to="/" className="card-btn card-btn-green my-4 ml-2 rounded-lg">Example</Link>
          default:
            return null;
        }
      }

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
            returnLinkComponentGivenGithubLink(githublink)
          }


{
            returnLinkComponentGivenTitle(title)
          }
        </Fragment>
    )
}


export default React.memo(ProjectPageDescription);