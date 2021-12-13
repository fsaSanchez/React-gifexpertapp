import React from 'react'

export const GifgridItem = (props) => {
  
    return (
        <div className="card animate__animated animate__backInLeft">
          <img src={props.img.url}  alt={props.img.title}/>
          <p>{props.img.title}</p> 
        </div>
    )
}
