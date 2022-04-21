import React, { Fragment } from 'react'

const ArtPageDescription = ({ art }) => {
    const {author, date, description} = art;
    return (
        <Fragment>
            <p className='font-bold'>Author:</p>
            <p className='highlight my-2 mb-4' >{author}</p>
            <p className='font-bold'>Uploaded At:</p>
            <p className='my-2 mb-4'>{date}</p>
            <p className='font-bold'>Description:</p>
            <p className=' my-2 mb-4' >{description}</p>
        </Fragment>
    )
}


export default React.memo(ArtPageDescription);