import {useState,useEffect} from 'react'
import { getGits } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {
 const [state, setState] = useState(
     {
         images:[],
         loading:true
     }
 )

 /// abajo comemntario de useEfeec
  useEffect(()=>
 {
     
    getGits(categoria).then(imgs=> setState(
        {
      images: imgs,
       loading:false
        }
        ));
},[categoria]);


return state;
}



///useEffect Ayuda a quel metodo no se ejecute mas que en la primer
    //vez que se renderiza, recordemos que cada que cambia el state se vuelve
    // a renderizar el componete,   el valor final se ocupa para indicar si categoria cambio
    // Se vuelve a renderizar el componente GifGrid , pero recordemos que este componete
    // se agrega por cada uno de las categorias del array, etonces el array puede cambiar
    //Pero la categoria de indece X no, en este ejmplo. al menos que ya se haya creado el
    // el componete de la categoria X y por algun mitvo cambia el valor de ese indice, el
    // use effect vuelve a ejecutar.
