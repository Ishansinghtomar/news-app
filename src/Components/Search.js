import React, { Component } from 'react'
import News from './News'
import { Link } from 'react-router-dom'
import {FaSearchengin} from 'react-icons/fa'
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

                <input  placeholder=" News Search"className=" search-bar" type="text" onChange={(event) => this.handle(event.target.value)} ></input>
                <Link  to ="/search" type="button" className="search-button" onClick={this.search}><FaSearchengin/></Link>

            </div>

        )

    }

}

export default Search
