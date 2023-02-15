import React from 'react'

const NewsItem=(props)=> {
    let {title, description,Imageurl,newsUrl,author,date,source} = props;
    return (
    <div className='d-flex align-items-stretch'>
        <div className="container my-2">
            <div className="card mx-auto" style={{minWidth:"300px"}}>
             <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%', zIndex:'1'}}>
                      {source}
                </span> 
            <img src={!Imageurl ? "https://elegalmetrology.jharkhand.gov.in/japnet/images/news.jpg":Imageurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6 style={{fontFamily:"cursive"}} className="card-title"><strong>{title}</strong></h6>
                    {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {source}
                    </span> */}
                    <p style={{fontSize:'16px'}}className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn mr-2"><i className="fas fa-link"></i> Read More </a>
                </div>
            </div>
        </div> 
    </div>
    )
  }

export default NewsItem

