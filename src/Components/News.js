import React, {useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { query } from './Navbar';
import nores from "../Assests/cat2.png";
import DatePicker from "react-datepicker";


const News =(props)=> {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalresults] = useState(0);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [url, setURl] = useState(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3a91a9ebf071459eacf31cfb94ab1be3&page=${page}&pageSize=${props.pageSize}`);

    //const API_URL_HEADLINES = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3a91a9ebf071459eacf31cfb94ab1be3&page=${page}&pageSize=${props.pageSize}`;
    //const API_URL_EVERYTHING = `https://newsapi.org/v2/everything?q=${search}&apiKey=8a7d978f6d2f4052b4ca9a0e0ada7548`

    const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const setPath=()=>{
    if(search===""){
        setURl(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3a91a9ebf071459eacf31cfb94ab1be3&page=${page}&pageSize=${props.pageSize}`);
    }
    else{
        setURl(`https://newsapi.org/v2/everything?q=${search}&apiKey=8a7d978f6d2f4052b4ca9a0e0ada7548&page=${page}`);
    }
    if (startDate !== null && endDate !== null && startDate > endDate) {
        console.log("startDate > endDate");
        return;
      }
      if (startDate !== null) {
        startDate.setHours(0, 0, 0, 0);
      }
      if (endDate !== null) {
        endDate.setHours(24, 0, 0, 0);
      }
    console.log(url);
    updateNews();
}

    const updateNews=async ()=>{
        console.log(search);
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);
        setArticles(parsedData.articles);
        setTotalresults(parsedData.totalResults);
        setLoading(false);
        console.log(totalResults);
        props.setProgress(100);
    }
    useEffect(()=>{
        function working(){
        updateNews();
        }
        working();
    },[])



   const handlePreviousClick=async()=>{
        console.log("Previous")
        props.setProgress(10);
        //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3a91a9ebf071459eacf31cfb94ab1be3&page=${page}&pageSize=${props.pageSize}`;
        updateNews();
        setPage(page-1);
        props.setProgress(100);
        
    }

     const handleNextClick=async()=>{
        console.log("Next");
        props.setProgress(10);
        if(!(page+1 > Math.ceil(totalResults/props.pageSize))){ 
            //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3a91a9ebf071459eacf31cfb94ab1be3&page=${page}&pageSize=${props.pageSize}`;           
            updateNews();
            setPage(page+1);
            props.setProgress(100);
        }
    }


    if(totalResults!==0 && !loading){    
    return (
        <>
        <div style={{display:"flex",justifyContent:"space-between"}} class="d-flex col p-3"  >
        <div style={{display:"flex",flexDirection:"row"}}>
        {/* <input style={{borderRadius:"15px",width:"150px"}} class="form-control-m w-md-100" value={query} type="text" />
        <input style={{borderRadius:"15px",width:"150px"}} class="form-control-m w-md-100" value={query} type="text" /> */}
        {/* <div className="control is-expanded">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="input"
                    placeholderText={"01/30/2023"}
                  />
        </div>
        <div className="control is-expanded">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="input"
                    placeholderText={"01/30/2023"}
                  />
        </div> */}
        </div>
        <div >
        <form style={{display:"flex-row"}} className="flex">
            <input style={{borderRadius:"15px"}} class="form-control-m w-md-100" value={search}
                      onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Search for news" aria-label="Search"/>
            <button style={{borderRadius:"15px"}} class="btn btn-sm w-20 p-0 buttton1" onClick={setPath} 
            type="button">Search</button>
        </form>
        </div>
        </div>
        <div className='container my-3'>
            <h2 className='text-center'><strong>NewsHunt - Top {capitalizeFirstLetter(props.category)} Headlines </strong></h2>
            {loading && <Spinner/>}
            <div className='row my-3'>
            {!loading && articles.map((element)=>{
                return <div className='col' key={element.url} >
                {/* <NewsItem title ={element.title ? element.title.slice(0, 45)+"..." : " "} description={element.description? element.description.slice(0, 60)+"..." : " "} Imageurl={element.urlToImage} newsUrl={element.url}/> */}
                <NewsItem title ={element.title} description={element.description} Imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} /> {/* source={element.source.name} */}
                </div>
            })}
            
             </div>
             <div className='container d-flex justify-content-between'>
             <button disabled={page<=1} className="btn btn-sm mr-2" onClick={handlePreviousClick}><i className="fas fa-link"></i> &larr; Previous </button>
             <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-sm mr-2" onClick={handleNextClick}><i className="fas fa-link"></i> Next &rarr; </button>
             </div>
      </div>
      </> 
    ) 
}
    else if(loading){
        return(
            <div style={{marginTop:"10%"}}>
            <Spinner  />
            </div>
        )
    }
     else{
        return(
            // < className='aligncenter' style={{alignContent:"center"}}>
            <center className='flex'>
                <img style={{height:"330px", width:"330px", borderRadius:"70px", marginTop:"150px"}}src={nores} alt="centered image" />
                <p><b>No results for your search!</b></p>
            </center>
            
        )
    }

}

News.defaultProps={
    country : 'in',
    pageSize : 12,
    category : 'general',
    query : "",
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category :PropTypes.string,
    query : PropTypes.string,
}

export default News