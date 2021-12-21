import React, { Component } from 'react'
import NewsItem from "./NewsItem"
import Wait from './Wait';
import PropTypes from 'prop-types'


export default class News extends Component {

static defautProps={
country:'in',
category:'general'
}
static propTypes={
country:PropTypes.string,
category:PropTypes.string
}

   
constructor(props){
super(props);
console.log("hello  const")
this.state={
articles:[],  //this.articles,
loading:false,
page:1,
totalResult:0
}


document.title=`${(this.props.category).toUpperCase()} -News App`
}

  componentDidMount(){
  this.setState({loading:true})

if(this.props.category === "search"){
var url=` https://newsapi.org/v2/everything?q=${this.props.search}&from=2021-12-21&sortBy=popularity&apiKey=b3542dfc5d6447f29b4e56010eeeb0db`
console.log("hi fom ",this.props)
}else{
     url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3542dfc5d6447f29b4e56010eeeb0db&page=${this.state.page}&pageSize=15`
 }
  console.log(url)
        //let data =await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b3542dfc5d6447f29b4e56010eeeb0db")
        //let parsejson=await data.json();
        //this.setState({articles:parsejson.articles})
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({articles:data.articles,totalResult:data.totalResults,loading:false}))

 }
render() {
        return (
            <div className="container my-3">
               <h2 className="text-center">Top Headlines From {(this.props.category).toUpperCase()} Category</h2>
             {this.state.loading && <Wait/>}
               <div className="row">
               {!this.state.loading && this.state.articles.map((element)=>{
                   return( <div className="col-md-4" key={element.url}>
                   <NewsItem  title={element.title} description={element.description} image={element.urlToImage} compurl={element.url} author={element.author}  date={element.publishedAt}  />
                   </div>)
                    
                   })}
              
               </div>
               <div className="container d-flex justify-content-between" >
               <button disabled={this.state.page<=1}  type="button" className="btn btn-primary"onClick={this.prevClick}>&larr; Previous</button>
               <button disabled={this.state.page>=Math.ceil(this.state.totalResult/15)}type="button" className="btn btn-primary"onClick={this.nextClick}>Next &rarr;</button>
               </div>
            </div>
        
        )
    }
 nextClick=()=>{
     this.setState({loading:true})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3542dfc5d6447f29b4e56010eeeb0db&page=${this.state.page+1}&pageSize=15`

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({articles:data.articles,page:this.state.page+1,loading:false}))
}
 prevClick=()=>{
    this.setState({loading:true})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3542dfc5d6447f29b4e56010eeeb0db&page=${this.state.page-1}&pageSize=15`

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({articles:data.articles,page:this.state.page-1,loading:false}))

    
}





}