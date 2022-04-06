import React, { Fragment } from 'react'

const Description = ({ art }) => {
    return (
        <Fragment>
            <p className='font-bold'>Author:</p>
            <p className='highlight my-2 mb-4' >{art.author}</p>
            <p className='font-bold'>Created At:</p>
            <p className='my-2 mb-4'>{art.date}</p>
        </Fragment>
    )
}


export default React.memo(Description);