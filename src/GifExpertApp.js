import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    const  [categorias, setCategorias] = 
    useState(['one punch']);

    
    return (
        <>
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>
           
        
                {
                categorias.map((c,i)=>
                    
                    ( 
                    <GifGrid key={c} categoria={c}/>
                      ))
                }
           
        </div>
        </>
    )
}
