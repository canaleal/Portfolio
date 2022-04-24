import React, { Component } from 'react'
import PageHeader from '../../components/PageHeader';

export default class error extends Component {
  render() {
    return (
      <div  className="main">
        
        <PageHeader title={'404 Error'} color={'bg-red'}/>

        <div className='px-5 my-4 '>
            <p>Welcome to the backrooms. Nothing exists here, so please use the Navbar to select another page.</p>
          </div>
        
        </div>
    )
  }
}
