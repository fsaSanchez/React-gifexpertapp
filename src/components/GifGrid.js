import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifgridItem } from './GifgridItem';


export const GifGrid = ({categoria}) => {

   ///Creamos un custom hub
    const {images,loading}= useFetchGifs(categoria);

 

    return (
        <>
        <h3>{categoria}</h3>
       {loading && <p className="animate__animated animate__flash">Cargando...</p>}
        <div className="card-grid animate__animated animate__backInLeft">
            {
                
                images.map(i => 
                    (<GifgridItem key={i.id}  img={i} /> 
            
                    )
                    )

               
             } 
             </div>
      
        </>
    )
}
