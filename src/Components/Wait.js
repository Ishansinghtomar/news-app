import React, { Component } from 'react'
import Spinner from './loading.gif'

export class Wait extends Component {
    render() {
        return (
            <div className='text-center'>
              <img src={Spinner} alt="loading..."></img>  
            </div>
        )
    }
}

export default Wait
