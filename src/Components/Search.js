import React, { Component } from 'react'
import News from './News'
import { Link } from 'react-router-dom'
export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchstate: "latest",
            news: false,

        }
    }

    handle(key) {
        this.setState({ searchstate: key })
    }

    search = () => {
        this.setState({ news: true })
this.props.searchkey(this.state.searchstate)
    }

    render() {

        return (


            <div className="text-center">
                <h1>News Search</h1>
                <input type="text" onChange={(event) => this.handle(event.target.value)} ></input>
                <Link  to ="/search" type="button" className="btn btn-primary" onClick={this.search}>Search</Link>
               
            </div>

        )

    }

}

export default Search
