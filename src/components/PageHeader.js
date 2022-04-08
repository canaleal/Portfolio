import React from 'react'


const PageHeader = ({ title , color}) => {
    return (
        <div className={`${color}  py-5 text-center text-white sticky`}>
            <h1 className='text-4xl  '>{title}</h1>
        </div>

    )
}



export default React.memo(PageHeader);