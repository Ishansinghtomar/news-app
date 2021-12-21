import React, { Component } from 'react'
import News from './News'
import{Link} from 'react-router-dom'
export class Search extends Component {
    constructor() {
        super()
    
        this.state = {
             searchstate:"omicron",
             news:""
        }
    }
    
    
handle(key){
 this.setState({searchstate:key})
}

search=(key)=>{
    console.log(this.state.searchstate);

    this.setState({searchstate:"apple"})
}
   // <Link className="nav-link" to="/News">Search</Link>
//this.state.news=<News key="search"country="in"  category={this.state.searchstate}/>
   

    render() {
        
console.log()
  return (
            <div>
                <h1>News Search</h1>
                <input type="text" onChange={(event)=>this.handle(event.target.value)} ></input>
                <button  type="button" className="btn btn-primary"onClick={(key)=>this.search(key.target.value)}>Search</button>
                <News key="search"country="in"  category="search" search={this.state.searchstate}/>
            </div>
        )
      
    }


}

export default Search
