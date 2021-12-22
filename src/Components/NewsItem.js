import React, { Component } from 'react'
import './NewsItem.css'
export class NewsItem extends Component {

  render() {
    let { title, description, image, compurl, author, date } = this.props
    return (
   
        <div className="card-container" >
          <img src={image} className="card-image" alt="..." />
          <div className="card-info">
            <h5 className="card-title">{title}</h5>
            <p className="card-desc">{description}</p>
            <p className="card-auth"><small className="">By {author ? author : "uknown"} On {new Date(date).toGMTString()}</small></p>
           <button className='fourth'> <a rel="noreferrer" href={compurl} target="_blank" className="card-link">Read Complete News</a></button>
          </div>
        </div>
      
    )
  }
}

export default NewsItem
