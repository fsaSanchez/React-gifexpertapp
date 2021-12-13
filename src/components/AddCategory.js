import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
const [inputValue, setinputValue] = useState('');

/// Para poder escribir en el input que esta ligado al state
const handleInputChange=(e)=>
{
setinputValue(e.target.value);


}


const handleSubmit=(e)=>
{
    e.preventDefault();
    if(inputValue.trim().length>2)
    {
        // Encaso de que categoria fuera arrary asi se agrega un nuevo elemeto
       // Se agrega categoria al final fi fuera [...cat,inputValue] seria al inicio

       // al cambiar el estado de categorias vuelve a renderizar el el componente
       // donde esta el state de esta.
        setCategorias(cat=>[inputValue,...cat]); 
        
        setinputValue('');
    }

    
}

    return (
        <form onSubmit={handleSubmit}>

             
                      <input
                      type="text" value={inputValue}
                      onChange={handleInputChange}
                      />

              {/* <button onClick={handleAdd} >Agregar</button> */}
        </form>
    )
}



AddCategory.protoTypes=
{
   setCategorias:PropTypes.func.isRequired
}