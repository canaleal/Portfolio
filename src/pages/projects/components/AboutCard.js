import React from 'react'


const AboutCard = ({  aboutElement }) => {



  return (


    <div className=" bg-white rounded-lg col-span-1 shadow-xl">



      <div className='flex flex-col'>
   
        <img height='100' width='auto' src={`${aboutElement.imglink}`} alt={`${aboutElement.title}`} className='card card-md'  loading="lazy"/>

        <div className='p-4'>
          <p className='font-bold my-2'>{aboutElement.title}</p>
          <p className='highlight text-sm my-2'>{aboutElement.role}</p>

          <p className='text-sm my-2'>{aboutElement.startDate} to {aboutElement.endDate}</p>

          <hr></hr>
          <p className='font-bold my-2'>Description</p>
          <p className='text-sm my-2 ' >{aboutElement.description}</p>


        </div>


      </div>
    </div>
  )

}


export default React.memo(AboutCard);
