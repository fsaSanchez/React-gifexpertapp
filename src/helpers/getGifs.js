export const getGits=async(categoria)=>{
    console.log('entra')
    const url=`https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(categoria)}&api_key=LgVyn89xTyq56Ix9pmm96u4JSjN6bHld`;
const respuesta= await fetch(url);
const {data}= await respuesta.json();
const gifs= data.map(img=>
{
    return{
        id:img.id,
        title:img.title,
        url:img.images?.downsized_medium.url
    }
})
return gifs; // al ser async esta regresando un promesa
}