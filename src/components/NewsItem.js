import React from 'react'


export default function NewsItem({title,description,imageUrl,newsUrl,author,date,source}) {
   
  return (
    <div className='my-3'>
        <div className="card">
          <div style={{display:'flex',
                       justifyContent:'flex-end',
                       position:'absolute',
                       right:'0'}}>
              <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
            <img style={{height:'250px'}} src={imageUrl? imageUrl:"https://www.livemint.com/lm-img/img/2024/01/17/1600x900/2-0-153902044-Bombay-Stock-Exchange--5C-0_1681142958887_1705454801551.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted"> By {author?author.slice(0,10):"Unknown"}... on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    </div>
  )
}
