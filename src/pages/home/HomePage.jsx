import React, { Component } from 'react'
import Header from './components/HomeBody'


export default class Home extends Component {
  render() {
    return (
      <div  className="main h-screen" >
        <div className="h-full flex flex-col">
       
          <Header/>
        </div>
        
      </div>
    )
  }
}
