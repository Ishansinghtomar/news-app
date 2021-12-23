import React, { Component } from 'react'
import NewsItem from "./NewsItem"
import Wait from './Wait';
import PropTypes from 'prop-types'
import './NewsItem.css'

export default class News extends Component {

    static defautProps = {
        country: 'in',
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [{
                title:"SADSA",
                description:"{ element.description }",
                image:"{ element.urlToImage }",
                compurl:"{ element.url }",
                author:"{ element.author }",
                date:"{ element.publishedAt }"

            }],  //this.articles,
            loading: false,
            page: 1,
            totalResult: 0,
            search:this.props.search?this.props.search:""
        }


        document.title = `${(this.props.category).toUpperCase()} -News App`
    }

    componentDidUpdate(previousProps, previousState) {
        if(previousProps.search !== this.props.search){
            this.apiCall();
        }
    }

    apiCall() {
        this.setState({ loading: true })
        if (this.props.category === "search") {
            var url = ` https://newsapi.org/v2/everything?q=${this.props.search}&from=2021-12-21&sortBy=popularity&apiKey=19aaf03db0794d309a0c06c19ba61e4c${this.state.page}&pageSize=15`
        } 
        fetch(url)
        .then(res => res.json())
        .catch(err => console.log("Wdasdsadsad", err))
        .then(data => this.setState({ articles: data.articles, totalResult: data.totalResults, loading: false }))
    }

    componentDidMount() {
        this.setState({ loading: true })
        if (this.props.category === "search") {
            var url = ` https://newsapi.org/v2/everything?q=${this.state.search}&from=2021-12-21&sortBy=popularity&apiKey=19aaf03db0794d309a0c06c19ba61e4c&page=${this.state.page}&pageSize=15`
        } else {
            url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19aaf03db0794d309a0c06c19ba61e4c&page=${this.state.page}&pageSize=15`
        }
        //let data =await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19aaf03db0794d309a0c06c19ba61e4c")
        //let parsejson=await data.json();
        //this.setState({articles:parsejson.articles})
        fetch(url)
            .then(res => res.json())
            .catch(err => console.log("Wdasdsadsad", err))
            .then(data => this.setState({ articles: data.articles,page:this.state.page+1 ,totalResult: data.totalResults, loading: false }))

    }

    render() {
console.log("helll from re")
        return (
            <div className="container-Outer">
                <h2 className="text-center"style={{fontWeight:"bold"}}>TOP HEADLINES FROM {(this.props.category).toUpperCase()} CATEGORY</h2><br/>
                {this.state.loading && <Wait />}
                <div className="listing">
                    {!this.state.loading && this.state.articles.map((element,index) => {
                        return (
                            <NewsItem key={index} title={element.title} description={element.description} image={element.urlToImage} compurl={element.url} author={element.author} date={element.publishedAt} />
                    )
                    })}
                </div>
                <div className="container d-flex justify-content-between" >
                   {this.state.loading ? "":<button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.prevClick}>&larr; Previous</button>}
                   {this.state.loading ? "":  <button disabled={this.state.page >= Math.ceil(this.state.totalResult / 15)} type="button" className="btn btn-primary" onClick={this.nextClick}>Next &rarr;</button>}

                </div>
            </div>

        )
    }
    nextClick = () => {


        this.setState({ loading: true })
        if (this.props.category === "search") {
            var url = ` https://newsapi.org/v2/everything?q=${this.state.search}&from=2021-12-21&sortBy=popularity&apiKey=19aaf03db0794d309a0c06c19ba61e4c&page=${this.state.page}&pageSize=15`
        } else {
            url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19aaf03db0794d309a0c06c19ba61e4c&page=${this.state.page}&pageSize=15`

        }

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ articles: data.articles, page: this.state.page + 1, loading: false }))
    }
    prevClick = () => {
        this.setState({ loading: true })
        if (this.props.category === "search") {
            var url = ` https://newsapi.org/v2/everything?q=${this.state.search}&from=2021-12-21&sortBy=popularity&apiKey=19aaf03db0794d309a0c06c19ba61e4c&page=${this.state.page}&pageSize=15`
        } else {
            url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19aaf03db0794d309a0c06c19ba61e4c&page=${this.state.page}&pageSize=15`
        }

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ articles: data.articles, page: this.state.page - 1, loading: false }))

    }

}