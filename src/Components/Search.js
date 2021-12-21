import React, { Component } from 'react'
import News from './News'
import { Link } from 'react-router-dom'
export class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchstate: " ",
            news: ""
        }
    }

    handle(key) {
        this.setState({ searchstate: key })
    }

    search = () => {
        this.setState({ news: <News key="search" country="in" category="search" search={this.state.searchstate} /> })
    }
    
    render() {

        return (
            <div>
                <h1>News Search</h1>
                <input type="text" onChange={(event) => this.handle(event.target.value)} ></input>
                <Link type="button" className="btn btn-primary" to="/search" onClick={this.search}>Search</Link>
                {this.state.news}
            </div>
        )

    }

}

export default Search
